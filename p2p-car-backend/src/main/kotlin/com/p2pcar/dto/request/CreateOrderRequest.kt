package com.p2pcar.dto.request

import jakarta.validation.constraints.*
import java.math.BigDecimal
import java.time.LocalDateTime

data class CreateOrderRequest(
    @field:NotNull(message = "Vehicle ID is required")
    val vehicleId: Long,

    @field:NotNull(message = "Start date is required")
    val startDate: LocalDateTime,

    @field:NotNull(message = "End date is required")
    val endDate: LocalDateTime,

    @field:NotNull(message = "Total price is required")
    @field:DecimalMin(value = "0.01", message = "Total price must be at least 0.01")
    val totalPrice: BigDecimal,

    @field:DecimalMin(value = "0", message = "Deposit must be non-negative")
    val deposit: BigDecimal = BigDecimal.ZERO
)
