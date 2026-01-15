package com.p2pcar.dto.request

import jakarta.validation.constraints.*
import java.util.*

data class ReviewRequest(
    @field:NotNull(message = "Order ID is required")
    val orderId: Long,

    @field:NotNull(message = "Rating is required")
    @field:Min(value = 1, message = "Rating must be at least 1")
    @field:Max(value = 5, message = "Rating must not exceed 5")
    val rating: Int,

    @field:Size(max = 1000, message = "Comment must not exceed 1000 characters")
    val comment: String? = null,

    @field:Min(value = 1, message = "Vehicle rating must be at least 1")
    @field:Max(value = 5, message = "Vehicle rating must not exceed 5")
    val vehicleRating: Int? = null,

    @field:Min(value = 1, message = "Owner rating must be at least 1")
    @field:Max(value = 5, message = "Owner rating must not exceed 5")
    val ownerRating: Int? = null,

    @field:Min(value = 1, message = "Renter rating must be at least 1")
    @field:Max(value = 5, message = "Renter rating must not exceed 5")
    val renterRating: Int? = null
)
