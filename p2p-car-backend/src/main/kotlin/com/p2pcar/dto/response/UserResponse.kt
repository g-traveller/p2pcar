package com.p2pcar.dto.response

import java.time.LocalDateTime

data class UserResponse(
    val id: Long,
    val phone: String?,
    val email: String?,
    val name: String,
    val avatar: String?,
    val role: String,
    val status: String,
    val idCardVerified: Boolean,
    val driverLicenseVerified: Boolean,
    val createdAt: LocalDateTime
)
