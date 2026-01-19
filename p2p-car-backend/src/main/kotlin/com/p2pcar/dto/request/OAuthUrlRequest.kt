package com.p2pcar.dto.request

import jakarta.validation.constraints.NotBlank

/**
 * Request to get OAuth authorization URL
 */
data class OAuthUrlRequest(
    @field:NotBlank(message = "Redirect URI is required")
    val redirectUri: String? = null
)
