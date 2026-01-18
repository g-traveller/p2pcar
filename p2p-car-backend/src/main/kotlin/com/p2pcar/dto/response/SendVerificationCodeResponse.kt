package com.p2pcar.dto.response

data class SendVerificationCodeResponse(
    val message: String,
    val expiresAt: Long
)
