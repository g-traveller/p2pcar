package com.p2pcar.dto.response

import java.math.BigDecimal
import java.time.LocalDateTime

data class OrderResponse(
    val id: Long,
    val orderNo: String,
    val vehicle: VehicleSummary,
    val renter: UserSummary,
    val owner: UserSummary,
    val startDate: LocalDateTime,
    val endDate: LocalDateTime,
    val days: Int,
    val totalPrice: BigDecimal,
    val deposit: BigDecimal,
    val status: String,
    val cancelReason: String?,
    val checkedInAt: LocalDateTime?,
    val checkedOutAt: LocalDateTime?,
    val createdAt: LocalDateTime
)

data class VehicleSummary(
    val id: Long,
    val name: String,
    val image: String?,
    val location: String
)

data class UserSummary(
    val id: Long,
    val name: String,
    val avatar: String?,
    val phone: String?
)
