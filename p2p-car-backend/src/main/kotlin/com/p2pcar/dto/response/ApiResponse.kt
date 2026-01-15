package com.p2pcar.dto.response

import com.fasterxml.jackson.annotation.JsonInclude

@JsonInclude(JsonInclude.Include.NON_NULL)
data class ApiResponse<T>(
    val code: Int = 200,
    val message: String = "success",
    val data: T? = null,
    val timestamp: Long = System.currentTimeMillis()
) {
    companion object {
        fun <T> success(data: T? = null): ApiResponse<T> {
            return ApiResponse(code = 200, message = "success", data = data)
        }

        fun <T> error(code: Int = 500, message: String, data: T? = null): ApiResponse<T> {
            return ApiResponse(code = code, message = message, data = data)
        }

        fun badRequest(message: String): ApiResponse<Nothing> {
            return ApiResponse(code = 400, message = message)
        }

        fun unauthorized(message: String = "unauthorized"): ApiResponse<Nothing> {
            return ApiResponse(code = 401, message = message)
        }

        fun forbidden(message: String = "forbidden"): ApiResponse<Nothing> {
            return ApiResponse(code = 403, message = message)
        }

        fun notFound(message: String = "not found"): ApiResponse<Nothing> {
            return ApiResponse(code = 404, message = message)
        }

        fun conflict(message: String): ApiResponse<Nothing> {
            return ApiResponse(code = 409, message = message)
        }

        fun internalError(message: String = "internal server error"): ApiResponse<Nothing> {
            return ApiResponse(code = 500, message = message)
        }
    }
}
