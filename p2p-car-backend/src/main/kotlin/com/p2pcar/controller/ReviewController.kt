package com.p2pcar.controller

import com.p2pcar.dto.request.ReviewRequest
import com.p2pcar.dto.response.ApiResponse
import com.p2pcar.dto.response.ReviewResponse
import com.p2pcar.service.ReviewService
import jakarta.validation.Valid
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/reviews")
class ReviewController(
    private val reviewService: ReviewService
) {

    @PostMapping
    fun createReview(@Valid @RequestBody request: ReviewRequest): ResponseEntity<ApiResponse<ReviewResponse>> {
        val review = reviewService.createReview(request)
        return ResponseEntity.ok(ApiResponse.success(review))
    }

    @GetMapping("/order/{orderId}")
    fun getReviewByOrderId(@PathVariable orderId: Long): ResponseEntity<ApiResponse<ReviewResponse>> {
        val review = reviewService.getReviewByOrderId(orderId)
        return ResponseEntity.ok(ApiResponse.success(review))
    }

    @GetMapping("/user/{userId}")
    fun getUserReviews(@PathVariable userId: Long): ResponseEntity<ApiResponse<List<ReviewResponse>>> {
        val reviews = reviewService.getUserReviews(userId, org.springframework.data.domain.Pageable.unpaged())
        return ResponseEntity.ok(ApiResponse.success(reviews.content))
    }

    @GetMapping("/vehicle/{vehicleId}")
    fun getVehicleReviews(@PathVariable vehicleId: Long): ResponseEntity<ApiResponse<List<ReviewResponse>>> {
        val reviews = reviewService.getVehicleReviews(vehicleId)
        return ResponseEntity.ok(ApiResponse.success(reviews))
    }
}
