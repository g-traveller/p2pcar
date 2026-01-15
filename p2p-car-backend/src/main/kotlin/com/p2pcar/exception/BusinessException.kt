package com.p2pcar.exception

class BusinessException(
    val errorCode: ErrorCode,
    message: String? = null,
    cause: Throwable? = null
) : RuntimeException(message ?: errorCode.message, cause) {

    val code: Int = errorCode.code

    companion object {
        fun of(errorCode: ErrorCode): BusinessException {
            return BusinessException(errorCode)
        }

        fun of(errorCode: ErrorCode, message: String): BusinessException {
            return BusinessException(errorCode, message)
        }

        fun userNotFound(): BusinessException {
            return BusinessException(ErrorCode.USER_NOT_FOUND)
        }

        fun vehicleNotFound(): BusinessException {
            return BusinessException(ErrorCode.VEHICLE_NOT_FOUND)
        }

        fun vehicleNotAvailable(): BusinessException {
            return BusinessException(ErrorCode.VEHICLE_NOT_AVAILABLE)
        }

        fun orderNotFound(): BusinessException {
            return BusinessException(ErrorCode.ORDER_NOT_FOUND)
        }

        fun invalidCredentials(): BusinessException {
            return BusinessException(ErrorCode.INVALID_CREDENTIALS)
        }

        fun unauthorized(): BusinessException {
            return BusinessException(ErrorCode.UNAUTHORIZED)
        }
    }
}
