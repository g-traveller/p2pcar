package com.p2pcar.dto.request

import jakarta.validation.constraints.Size

data class UpdateUserRequest(
    @field:Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
    val name: String? = null,

    val email: String? = null
)
