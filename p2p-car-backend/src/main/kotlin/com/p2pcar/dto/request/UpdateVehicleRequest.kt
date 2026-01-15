package com.p2pcar.dto.request

import jakarta.validation.constraints.*
import java.math.BigDecimal

data class UpdateVehicleRequest(
    @field:Size(max = 50, message = "Brand must not exceed 50 characters")
    val brand: String? = null,

    @field:Size(max = 100, message = "Model must not exceed 100 characters")
    val model: String? = null,

    @field:Min(1900, message = "Year must be after 1900")
    @field:Max(value = 2100, message = "Year must be before 2100")
    val year: Int? = null,

    @field:Size(max = 30, message = "Color must not exceed 30 characters")
    val color: String? = null,

    @field:Size(max = 20, message = "License plate must not exceed 20 characters")
    val licensePlate: String? = null,

    @field:Min(value = 2, message = "Seats must be at least 2")
    @field:Max(value = 20, message = "Seats must not exceed 20")
    val seats: Int? = null,

    val transmission: String? = null,

    val fuelType: String? = null,

    @field:DecimalMin(value = "0.01", message = "Price per day must be at least 0.01")
    val pricePerDay: BigDecimal? = null,

    @field:Size(max = 200, message = "Location must not exceed 200 characters")
    val location: String? = null,

    val latitude: BigDecimal? = null,
    val longitude: BigDecimal? = null,

    @field:Size(max = 2000, message = "Description must not exceed 2000 characters")
    val description: String? = null,

    val instantBook: Boolean? = null
)
