package com.p2pcar.service

import com.p2pcar.dto.request.ReviewRequest
import com.p2pcar.dto.response.ReviewResponse
import com.p2pcar.dto.response.UserSummary
import com.p2pcar.entity.Order
import com.p2pcar.entity.OrderStatus
import com.p2pcar.entity.Review
import com.p2pcar.exception.BusinessException
import com.p2pcar.exception.ErrorCode
import com.p2pcar.repository.OrderRepository
import com.p2pcar.repository.ReviewRepository
import com.p2pcar.repository.UserRepository
import com.p2pcar.repository.VehicleRepository
import com.p2pcar.security.UserPrincipal
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional
class ReviewService(
    private val reviewRepository: ReviewRepository,
    private val orderRepository: OrderRepository,
    private val userRepository: UserRepository,
    private val vehicleRepository: VehicleRepository
) {

    fun createReview(request: ReviewRequest): ReviewResponse {
        val userPrincipal = SecurityContextHolder.getContext().authentication.principal as UserPrincipal

        val order = orderRepository.findById(request.orderId)
            .orElseThrow { BusinessException(ErrorCode.ORDER_NOT_FOUND) }

        if (order.renterId != userPrincipal.id && order.ownerId != userPrincipal.id) {
            throw BusinessException(ErrorCode.FORBIDDEN)
        }

        if (order.status != OrderStatus.COMPLETED) {
            throw BusinessException(ErrorCode.BAD_REQUEST, "Can only review completed orders")
        }

        if (reviewRepository.existsByOrderId(request.orderId)) {
            throw BusinessException(ErrorCode.REVIEW_ALREADY_EXISTS)
        }

        val targetId = if (order.renterId == userPrincipal.id) {
            order.ownerId
        } else {
            order.renterId
        }

        val review = Review(
            orderId = request.orderId,
            reviewerId = userPrincipal.id,
            targetId = targetId,
            rating = request.rating,
            comment = request.comment,
            vehicleRating = request.vehicleRating,
            ownerRating = request.ownerRating,
            renterRating = request.renterRating
        )

        val savedReview = reviewRepository.save(review)

        // Update vehicle rating if vehicle rating is provided
        if (request.vehicleRating != null) {
            val vehicle = vehicleRepository.findById(order.vehicleId)
                .orElseThrow { BusinessException(ErrorCode.VEHICLE_NOT_FOUND) }

            val avgRating = reviewRepository.calculateAverageRating(targetId)
            if (avgRating != null) {
                vehicle.rating = java.math.BigDecimal.valueOf(avgRating)
            }
            vehicle.reviewCount = reviewRepository.countReviews(targetId).toInt()
            vehicleRepository.save(vehicle)
        }

        return toResponse(savedReview, order)
    }

    @Transactional(readOnly = true)
    fun getReviewByOrderId(orderId: Long): ReviewResponse {
        val review = reviewRepository.findByOrderId(orderId)
            .orElseThrow { BusinessException(ErrorCode.REVIEW_NOT_FOUND) }

        val order = orderRepository.findById(review.orderId)
            .orElseThrow { BusinessException(ErrorCode.ORDER_NOT_FOUND) }

        return toResponse(review, order)
    }

    @Transactional(readOnly = true)
    fun getUserReviews(userId: Long, pageable: Pageable): Page<ReviewResponse> {
        val reviewsPage = reviewRepository.findByTargetId(userId, pageable)

        val responses = reviewsPage.content.map { review ->
            val order = orderRepository.findById(review.orderId).orElse(null)
            if (order != null) {
                toResponse(review, order)
            } else {
                null
            }
        }.filterNotNull()

        return org.springframework.data.domain.PageImpl(
            responses,
            pageable,
            reviewsPage.totalElements
        )
    }

    @Transactional(readOnly = true)
    fun getVehicleReviews(vehicleId: Long): List<ReviewResponse> {
        val orders = orderRepository.findByVehicleId(vehicleId)
        val orderIds = orders.mapNotNull { it.id }

        return orderIds.mapNotNull { orderId ->
            val review = reviewRepository.findByOrderId(orderId).orElse(null)
            if (review != null) {
                val order = orderRepository.findById(review.orderId).orElse(null)
                if (order != null) {
                    toResponse(review, order)
                } else {
                    null
                }
            } else {
                null
            }
        }
    }

    private fun toResponse(review: Review, order: Order): ReviewResponse {
        val reviewer = userRepository.findById(review.reviewerId).orElse(null)
        val target = userRepository.findById(review.targetId).orElse(null)

        return ReviewResponse(
            id = review.id!!,
            orderId = review.orderId,
            reviewer = reviewer?.let {
                UserSummary(
                    id = it.id!!,
                    name = it.name,
                    avatar = it.avatar,
                    phone = it.phone
                )
            } ?: UserSummary(0, "", "", ""),
            target = target?.let {
                UserSummary(
                    id = it.id!!,
                    name = it.name,
                    avatar = it.avatar,
                    phone = it.phone
                )
            } ?: UserSummary(0, "", "", ""),
            rating = review.rating,
            comment = review.comment,
            vehicleRating = review.vehicleRating,
            ownerRating = review.ownerRating,
            renterRating = review.renterRating,
            createdAt = review.createdAt
        )
    }
}
