package com.p2pcar.dto.request

import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.Pattern

data class SendVerificationCodeRequest(
    @field:NotBlank(message = "Type is required")
    @field:Pattern(regexp = "phone|email", message = "Type must be 'phone' or 'email'")
    val type: String,

    val phone: String? = null,

    val email: String? = null
) {
    init {
        when (type.lowercase()) {
            "phone" -> {
                if (phone.isNullOrBlank()) {
                    throw IllegalArgumentException("Phone number is required for phone verification")
                }
                if (!phone.matches(Regex("^1[3-9]\\d{9}$"))) {
                    throw IllegalArgumentException("Invalid phone number format")
                }
            }
            "email" -> {
                if (email.isNullOrBlank()) {
                    throw IllegalArgumentException("Email is required for email verification")
                }
                if (!email.matches(Regex("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$"))) {
                    throw IllegalArgumentException("Invalid email format")
                }
            }
        }
    }
}
