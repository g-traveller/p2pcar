package com.p2pcar.dto.request

import jakarta.validation.constraints.NotBlank

/**
 * WeChat OAuth login request
 */
data class WeChatOAuthRequest(
    @field:NotBlank(message = "Code is required")
    val code: String,

    @field:NotBlank(message = "State is required")
    val state: String
)
