package com.p2pcar.dto.request

import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.Pattern
import jakarta.validation.constraints.Size
import jakarta.validation.constraints.Email

data class RegisterRequest(
    @field:Pattern(regexp = "^1[3-9]\\d{9}$", message = "Invalid phone number format")
    val phone: String? = null,

    @field:Email(message = "Invalid email format")
    val email: String? = null,

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
) {
    init {
        // Validate that either phone or email is provided
        if (phone.isNullOrBlank() && email.isNullOrBlank()) {
            throw IllegalArgumentException("Either phone or email must be provided")
        }
        if (!phone.isNullOrBlank() && !email.isNullOrBlank()) {
            throw IllegalArgumentException("Only one of phone or email should be provided")
        }
    }
}
