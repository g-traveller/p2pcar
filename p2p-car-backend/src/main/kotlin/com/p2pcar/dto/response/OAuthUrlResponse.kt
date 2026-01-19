package com.p2pcar.dto.response

/**
 * Response containing OAuth authorization URL
 */
data class OAuthUrlResponse(
    val authorizationUrl: String,
    val state: String
)
