package com.p2pcar.dto.response

import com.fasterxml.jackson.annotation.JsonInclude
import java.math.BigDecimal
import java.time.LocalDateTime

@JsonInclude(JsonInclude.Include.NON_NULL)
data class VehicleResponse(
    val id: Long,
    val name: String,
    val brand: String,
    val model: String,
    val year: Int?,
    val color: String?,
    val image: String?,
    val images: List<String>,
    val price: BigDecimal,
    val rating: BigDecimal,
    val reviewCount: Int,
    val location: String,
    val seats: Int,
    val transmission: String,
    val fuel: String,
    val description: String?,
    val instantBook: Boolean,
    val host: HostInfo? = null,
    val badges: List<String> = emptyList(),
    val status: String,
    val createdAt: LocalDateTime,
    val distance: Double? = null,  // 距离（公里）
    val latitude: BigDecimal? = null,  // 车辆位置纬度
    val longitude: BigDecimal? = null  // 车辆位置经度
)

data class HostInfo(
    val id: Long,
    val name: String,
    val avatar: String?,
    val trips: Int,
    val rating: BigDecimal,
    val isSuperHost: Boolean
)
