package com.p2pcar.dto.request

import java.math.BigDecimal
import java.time.LocalDateTime

data class VehicleSearchRequest(
    val location: String? = null,  // 保留用于显示
    val latitude: Double? = null,  // 搜索中心纬度
    val longitude: Double? = null, // 搜索中心经度
    val radius: Double? = null,    // 搜索半径（公里），默认50km
    val startDate: LocalDateTime? = null,
    val endDate: LocalDateTime? = null,
    val minPrice: BigDecimal? = null,
    val maxPrice: BigDecimal? = null,
    val seats: List<Int>? = null,
    val transmission: String? = null, // AUTOMATIC, MANUAL
    val fuelType: List<String>? = null, // PETROL, ELECTRIC, HYBRID
    val brand: String? = null,
    val sortBy: String = "rating_desc", // price_asc, price_desc, rating_desc, created_desc, distance_asc
    val page: Int = 0,
    val size: Int = 20
)
