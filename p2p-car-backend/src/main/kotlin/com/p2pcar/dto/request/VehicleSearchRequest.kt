package com.p2pcar.dto.request

import java.math.BigDecimal
import java.time.LocalDateTime

data class VehicleSearchRequest(
    val location: String? = null,
    val startDate: LocalDateTime? = null,
    val endDate: LocalDateTime? = null,
    val minPrice: BigDecimal? = null,
    val maxPrice: BigDecimal? = null,
    val seats: Int? = null,
    val transmission: String? = null, // AUTOMATIC, MANUAL
    val fuelType: String? = null, // PETROL, ELECTRIC, HYBRID
    val brand: String? = null,
    val sortBy: String = "rating_desc", // price_asc, price_desc, rating_desc, created_desc
    val page: Int = 0,
    val size: Int = 20
)
