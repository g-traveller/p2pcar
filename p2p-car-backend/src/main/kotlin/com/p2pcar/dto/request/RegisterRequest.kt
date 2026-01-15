package com.p2pcar.dto.request

import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.Pattern
import jakarta.validation.constraints.Size

data class RegisterRequest(
    @field:NotBlank(message = "Phone number is required")
    @field:Pattern(regexp = "^1[3-9]\\d{9}$", message = "Invalid phone number format")
    val phone: String,

    @field:NotBlank(message = "Password is required")
    @field:Size(min = 6, max = 50, message = "Password must be between 6 and 50 characters")
    val password: String,

    @field:NotBlank(message = "Verification code is required")
    @field:Size(min = 6, max = 6, message = "Verification code must be 6 digits")
    val code: String,

    @field:NotBlank(message = "Name is required")
    @field:Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
    val name: String,

    val role: String = "RENTER"
)
