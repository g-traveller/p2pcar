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
    val createdAt: LocalDateTime
)

data class HostInfo(
    val id: Long,
    val name: String,
    val avatar: String?,
    val trips: Int,
    val rating: BigDecimal,
    val isSuperHost: Boolean
)
