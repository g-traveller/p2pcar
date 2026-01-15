package com.p2pcar.service

import com.p2pcar.dto.request.CreateOrderRequest
import com.p2pcar.dto.response.OrderResponse
import com.p2pcar.dto.response.UserSummary
import com.p2pcar.dto.response.VehicleSummary
import com.p2pcar.entity.Order
import com.p2pcar.entity.OrderStatus
import com.p2pcar.entity.User
import com.p2pcar.entity.Vehicle
import com.p2pcar.exception.BusinessException
import com.p2pcar.exception.ErrorCode
import com.p2pcar.repository.OrderRepository
import com.p2pcar.repository.UserRepository
import com.p2pcar.repository.VehicleImageRepository
import com.p2pcar.repository.VehicleRepository
import com.p2pcar.security.UserPrincipal
import com.p2pcar.util.DateUtil
import com.p2pcar.util.OrderNoGenerator
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional
class OrderService(
    private val orderRepository: OrderRepository,
    private val vehicleRepository: VehicleRepository,
    private val vehicleImageRepository: VehicleImageRepository,
    private val userRepository: UserRepository
) {

    fun createOrder(request: CreateOrderRequest): OrderResponse {
        val userPrincipal = SecurityContextHolder.getContext().authentication.principal as UserPrincipal

        // Get vehicle
        val vehicle = vehicleRepository.findById(request.vehicleId)
            .orElseThrow { BusinessException(ErrorCode.VEHICLE_NOT_FOUND) }

        if (vehicle.status != com.p2pcar.entity.VehicleStatus.AVAILABLE) {
            throw BusinessException(ErrorCode.VEHICLE_NOT_AVAILABLE)
        }

        if (vehicle.ownerId == userPrincipal.id) {
            throw BusinessException(ErrorCode.BAD_REQUEST, "Cannot rent your own vehicle")
        }

        // Validate date range
        if (request.endDate.isBefore(request.startDate)) {
            throw BusinessException(ErrorCode.INVALID_DATE_RANGE)
        }

        // Check availability
        val conflictCount = orderRepository.countConflictingOrders(
            vehicle.id!!,
            request.startDate,
            request.endDate
        )

        if (conflictCount > 0) {
            throw BusinessException(ErrorCode.VEHICLE_UNAVAILABLE)
        }

        // Calculate days
        val days = DateUtil.calculateDays(request.startDate, request.endDate).toInt()

        // Create order
        val order = Order(
            orderNo = OrderNoGenerator.generate(),
            renterId = userPrincipal.id,
            vehicleId = vehicle.id!!,
            ownerId = vehicle.ownerId,
            startDate = request.startDate,
            endDate = request.endDate,
            days = days,
            totalPrice = request.totalPrice,
            deposit = request.deposit,
            status = OrderStatus.PENDING
        )

        val savedOrder = orderRepository.save(order)

        return toResponse(savedOrder, vehicle)
    }

    @Transactional(readOnly = true)
    fun getOrderById(id: Long): OrderResponse {
        val userPrincipal = SecurityContextHolder.getContext().authentication.principal as UserPrincipal
        val order = orderRepository.findById(id)
            .orElseThrow { BusinessException(ErrorCode.ORDER_NOT_FOUND) }

        if (order.renterId != userPrincipal.id && order.ownerId != userPrincipal.id) {
            throw BusinessException(ErrorCode.FORBIDDEN)
        }

        val vehicle = vehicleRepository.findById(order.vehicleId)
            .orElseThrow { BusinessException(ErrorCode.VEHICLE_NOT_FOUND) }

        return toResponse(order, vehicle)
    }

    @Transactional(readOnly = true)
    fun getMyOrders(status: OrderStatus?, pageable: Pageable): Page<OrderResponse> {
        val userPrincipal = SecurityContextHolder.getContext().authentication.principal as UserPrincipal

        // Get all orders first
        val allOrders = orderRepository.findAll()

        // Filter by user and status
        val filteredOrders = if (status != null) {
            allOrders.filter {
                (it.renterId == userPrincipal.id || it.ownerId == userPrincipal.id) && it.status == status
            }
        } else {
            allOrders.filter {
                it.renterId == userPrincipal.id || it.ownerId == userPrincipal.id
            }
        }

        // Manual pagination
        val start = pageable.offset.toInt()
        val end = minOf(start + pageable.pageSize, filteredOrders.size)
        val paginatedOrders = if (start < filteredOrders.size) {
            filteredOrders.subList(start, end)
        } else {
            emptyList()
        }

        val responses = paginatedOrders.map { order ->
            val vehicle = vehicleRepository.findById(order.vehicleId).orElse(null)
            if (vehicle != null) {
                toResponse(order, vehicle)
            } else {
                null
            }
        }.filterNotNull()

        // Return a page
        return org.springframework.data.domain.PageImpl(
            responses,
            pageable,
            filteredOrders.size.toLong()
        )
    }

    fun cancelOrder(id: Long, reason: String? = null) {
        val userPrincipal = SecurityContextHolder.getContext().authentication.principal as UserPrincipal
        val order = orderRepository.findById(id)
            .orElseThrow { BusinessException(ErrorCode.ORDER_NOT_FOUND) }

        if (order.renterId != userPrincipal.id) {
            throw BusinessException(ErrorCode.FORBIDDEN, "Only renter can cancel the order")
        }

        if (order.status != OrderStatus.PENDING && order.status != OrderStatus.CONFIRMED) {
            throw BusinessException(ErrorCode.ORDER_CANNOT_CANCEL)
        }

        order.status = OrderStatus.CANCELLED
        order.cancelReason = reason
        order.updatedAt = java.time.LocalDateTime.now()

        orderRepository.save(order)
    }

    fun confirmOrder(id: Long) {
        val userPrincipal = SecurityContextHolder.getContext().authentication.principal as UserPrincipal
        val order = orderRepository.findById(id)
            .orElseThrow { BusinessException(ErrorCode.ORDER_NOT_FOUND) }

        if (order.ownerId != userPrincipal.id) {
            throw BusinessException(ErrorCode.FORBIDDEN, "Only owner can confirm the order")
        }

        if (order.status != OrderStatus.PENDING) {
            throw BusinessException(ErrorCode.ORDER_CANNOT_CONFIRM)
        }

        order.status = OrderStatus.CONFIRMED
        order.updatedAt = java.time.LocalDateTime.now()

        orderRepository.save(order)
    }

    fun checkIn(id: Long) {
        val userPrincipal = SecurityContextHolder.getContext().authentication.principal as UserPrincipal
        val order = orderRepository.findById(id)
            .orElseThrow { BusinessException(ErrorCode.ORDER_NOT_FOUND) }

        if (order.ownerId != userPrincipal.id) {
            throw BusinessException(ErrorCode.FORBIDDEN)
        }

        if (order.status != OrderStatus.CONFIRMED) {
            throw BusinessException(ErrorCode.BAD_REQUEST, "Order must be confirmed first")
        }

        order.status = OrderStatus.IN_PROGRESS
        order.checkedInAt = java.time.LocalDateTime.now()
        order.updatedAt = java.time.LocalDateTime.now()

        orderRepository.save(order)

        // Update vehicle status
        val vehicle = vehicleRepository.findById(order.vehicleId)
            .orElseThrow { BusinessException(ErrorCode.VEHICLE_NOT_FOUND) }
        vehicle.status = com.p2pcar.entity.VehicleStatus.RENTED
        vehicleRepository.save(vehicle)
    }

    fun checkOut(id: Long) {
        val userPrincipal = SecurityContextHolder.getContext().authentication.principal as UserPrincipal
        val order = orderRepository.findById(id)
            .orElseThrow { BusinessException(ErrorCode.ORDER_NOT_FOUND) }

        if (order.ownerId != userPrincipal.id) {
            throw BusinessException(ErrorCode.FORBIDDEN)
        }

        if (order.status != OrderStatus.IN_PROGRESS) {
            throw BusinessException(ErrorCode.BAD_REQUEST, "Order must be in progress")
        }

        order.status = OrderStatus.COMPLETED
        order.checkedOutAt = java.time.LocalDateTime.now()
        order.updatedAt = java.time.LocalDateTime.now()

        orderRepository.save(order)

        // Update vehicle status
        val vehicle = vehicleRepository.findById(order.vehicleId)
            .orElseThrow { BusinessException(ErrorCode.VEHICLE_NOT_FOUND) }
        vehicle.status = com.p2pcar.entity.VehicleStatus.AVAILABLE
        vehicle.totalTrips = vehicle.totalTrips + 1
        vehicleRepository.save(vehicle)
    }

    private fun toResponse(order: Order, vehicle: Vehicle): OrderResponse {
        val images = vehicleImageRepository.findByVehicleIdOrderByDisplayOrderAsc(vehicle.id!!)
        val primaryImage = images.firstOrNull { it.isPrimary }?.url ?: images.firstOrNull()?.url

        val renter = userRepository.findById(order.renterId).orElse(null)
        val owner = userRepository.findById(order.ownerId).orElse(null)

        return OrderResponse(
            id = order.id!!,
            orderNo = order.orderNo,
            vehicle = VehicleSummary(
                id = vehicle.id!!,
                name = "${vehicle.brand} ${vehicle.model}",
                image = primaryImage,
                location = vehicle.location
            ),
            renter = renter?.let {
                UserSummary(
                    id = it.id!!,
                    name = it.name,
                    avatar = it.avatar,
                    phone = it.phone
                )
            } ?: UserSummary(0, "", "", ""),
            owner = owner?.let {
                UserSummary(
                    id = it.id!!,
                    name = it.name,
                    avatar = it.avatar,
                    phone = it.phone
                )
            } ?: UserSummary(0, "", "", ""),
            startDate = order.startDate,
            endDate = order.endDate,
            days = order.days,
            totalPrice = order.totalPrice,
            deposit = order.deposit,
            status = order.status.name,
            cancelReason = order.cancelReason,
            checkedInAt = order.checkedInAt,
            checkedOutAt = order.checkedOutAt,
            createdAt = order.createdAt
        )
    }
}
