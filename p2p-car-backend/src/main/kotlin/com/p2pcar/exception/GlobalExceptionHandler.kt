package com.p2pcar.exception

import com.p2pcar.dto.response.ApiResponse
import jakarta.servlet.http.HttpServletRequest
import jakarta.validation.ConstraintViolation
import jakarta.validation.ConstraintViolationException
import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.access.AccessDeniedException
import org.springframework.security.authentication.BadCredentialsException
import org.springframework.validation.FieldError
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException

@RestControllerAdvice
class GlobalExceptionHandler {

    private val logger = LoggerFactory.getLogger(GlobalExceptionHandler::class.java)

    @ExceptionHandler(BusinessException::class)
    fun handleBusinessException(
        ex: BusinessException,
        request: HttpServletRequest
    ): ResponseEntity<ApiResponse<Nothing>> {
        logger.warn("Business exception: ${ex.message} at ${request.requestURI}")
        // Use HTTP status from ErrorCode enum
        val httpStatus = HttpStatus.valueOf(ex.errorCode.httpStatus)
        return ResponseEntity(
            ApiResponse.error(ex.code, ex.message ?: ex.errorCode.message),
            httpStatus
        )
    }

    @ExceptionHandler(BadCredentialsException::class)
    fun handleBadCredentialsException(
        ex: BadCredentialsException,
        request: HttpServletRequest
    ): ResponseEntity<ApiResponse<Nothing>> {
        logger.warn("Bad credentials at ${request.requestURI}")
        return ResponseEntity(
            ApiResponse.unauthorized("Invalid phone or password"),
            HttpStatus.UNAUTHORIZED
        )
    }

    @ExceptionHandler(AccessDeniedException::class)
    fun handleAccessDeniedException(
        ex: AccessDeniedException,
        request: HttpServletRequest
    ): ResponseEntity<ApiResponse<Nothing>> {
        logger.warn("Access denied at ${request.requestURI}")
        return ResponseEntity(
            ApiResponse.forbidden(),
            HttpStatus.FORBIDDEN
        )
    }

    @ExceptionHandler(MethodArgumentNotValidException::class)
    fun handleValidationException(
        ex: MethodArgumentNotValidException,
        request: HttpServletRequest
    ): ResponseEntity<ApiResponse<Map<String, String>>> {
        val errors = ex.bindingResult.allErrors.associate {
            (it as FieldError).field to (it.defaultMessage ?: "Validation error")
        }
        logger.warn("Validation error at ${request.requestURI}: $errors")
        return ResponseEntity(
            ApiResponse.error(422, "validation error", errors),
            HttpStatus.UNPROCESSABLE_ENTITY
        )
    }

    @ExceptionHandler(ConstraintViolationException::class)
    fun handleConstraintViolationException(
        ex: ConstraintViolationException,
        request: HttpServletRequest
    ): ResponseEntity<ApiResponse<Map<String, String>>> {
        val errors = ex.constraintViolations.associate {
            it.propertyPath.toString() to it.message
        }
        logger.warn("Constraint violation at ${request.requestURI}: $errors")
        return ResponseEntity(
            ApiResponse.error(422, "validation error", errors),
            HttpStatus.UNPROCESSABLE_ENTITY
        )
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException::class)
    fun handleTypeMismatchException(
        ex: MethodArgumentTypeMismatchException,
        request: HttpServletRequest
    ): ResponseEntity<ApiResponse<Nothing>> {
        val message = "Invalid parameter '${ex.name}' with value '${ex.value}'"
        logger.warn("Type mismatch at ${request.requestURI}: $message")
        return ResponseEntity(
            ApiResponse.badRequest(message),
            HttpStatus.BAD_REQUEST
        )
    }

    @ExceptionHandler(IllegalArgumentException::class)
    fun handleIllegalArgumentException(
        ex: IllegalArgumentException,
        request: HttpServletRequest
    ): ResponseEntity<ApiResponse<Nothing>> {
        logger.warn("Illegal argument at ${request.requestURI}: ${ex.message}")
        return ResponseEntity(
            ApiResponse.badRequest(ex.message ?: "Invalid argument"),
            HttpStatus.BAD_REQUEST
        )
    }

    @ExceptionHandler(Exception::class)
    fun handleException(
        ex: Exception,
        request: HttpServletRequest
    ): ResponseEntity<ApiResponse<Nothing>> {
        logger.error("Unexpected error at ${request.requestURI}", ex)
        return ResponseEntity(
            ApiResponse.internalError(),
            HttpStatus.INTERNAL_SERVER_ERROR
        )
    }
}
