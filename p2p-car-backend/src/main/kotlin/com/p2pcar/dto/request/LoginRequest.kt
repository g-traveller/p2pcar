package com.p2pcar.dto.request

import jakarta.validation.constraints.NotBlank

data class LoginRequest(
    @field:NotBlank(message = "Phone number is required")
    val phone: String,

    @field:NotBlank(message = "Password is required")
    val password: String
)
