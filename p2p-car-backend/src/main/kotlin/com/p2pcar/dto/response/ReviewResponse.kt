package com.p2pcar.dto.response

import java.time.LocalDateTime

data class ReviewResponse(
    val id: Long,
    val orderId: Long,
    val reviewer: UserSummary,
    val target: UserSummary,
    val rating: Int,
    val comment: String?,
    val vehicleRating: Int?,
    val ownerRating: Int?,
    val renterRating: Int?,
    val createdAt: LocalDateTime
)
