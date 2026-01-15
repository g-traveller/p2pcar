package com.p2pcar.dto.request

import jakarta.validation.constraints.NotBlank

data class LoginRequest(
    @field:NotBlank(message = "Email or phone is required")
    val emailOrPhone: String,

    @field:NotBlank(message = "Password is required")
    val password: String
)
