package com.p2pcar.dto.response

data class AuthResponse(
    val token: String,
    val refreshToken: String,
    val user: UserResponse
)
