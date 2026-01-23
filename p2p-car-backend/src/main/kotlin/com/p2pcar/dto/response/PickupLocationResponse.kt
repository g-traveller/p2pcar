package com.p2pcar.dto.response

import java.time.LocalDateTime

data class PickupLocationResponse(
    val id: Long,
    val name: String,
    val address: String,
    val district: String?,
    val city: String,
    val latitude: Double?,
    val longitude: Double?,
    val isActive: Boolean,
    val displayOrder: Int,
    val createdAt: LocalDateTime
)
