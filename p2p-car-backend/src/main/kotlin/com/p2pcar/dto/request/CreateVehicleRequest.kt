package com.p2pcar.dto.request

import jakarta.validation.constraints.*
import java.math.BigDecimal

data class CreateVehicleRequest(
    @field:NotBlank(message = "Brand is required")
    @field:Size(max = 50, message = "Brand must not exceed 50 characters")
    val brand: String,

    @field:NotBlank(message = "Model is required")
    @field:Size(max = 100, message = "Model must not exceed 100 characters")
    val model: String,

    @field:Min(1900, message = "Year must be after 1900")
    @field:Max(value = 2100, message = "Year must be before 2100")
    val year: Int? = null,

    @field:Size(max = 30, message = "Color must not exceed 30 characters")
    val color: String? = null,

    @field:Size(max = 20, message = "License plate must not exceed 20 characters")
    val licensePlate: String? = null,

    @field:NotNull(message = "Seats is required")
    @field:Min(value = 2, message = "Seats must be at least 2")
    @field:Max(value = 20, message = "Seats must not exceed 20")
    val seats: Int,

    @field:NotBlank(message = "Transmission is required")
    val transmission: String, // AUTOMATIC, MANUAL

    @field:NotBlank(message = "Fuel type is required")
    val fuelType: String, // PETROL, ELECTRIC, HYBRID

    @field:NotNull(message = "Price per day is required")
    @field:DecimalMin(value = "0.01", message = "Price per day must be at least 0.01")
    val pricePerDay: BigDecimal,

    @field:NotBlank(message = "Location is required")
    @field:Size(max = 200, message = "Location must not exceed 200 characters")
    val location: String,

    val latitude: BigDecimal? = null,
    val longitude: BigDecimal? = null,

    @field:Size(max = 2000, message = "Description must not exceed 2000 characters")
    val description: String? = null,

    val instantBook: Boolean = false,

    val images: List<String> = emptyList()
)
