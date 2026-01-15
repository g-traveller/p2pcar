package com.p2pcar.exception

enum class ErrorCode(val code: Int, val message: String) {
    // Authentication & Authorization
    UNAUTHORIZED(401, "unauthorized"),
    FORBIDDEN(403, "forbidden"),
    TOKEN_INVALID(4011, "invalid token"),
    TOKEN_EXPIRED(4012, "token expired"),

    // User
    USER_NOT_FOUND(1001, "user not found"),
    USER_EXISTS(1002, "user already exists"),
    USER_DISABLED(1003, "user account disabled"),
    INVALID_CREDENTIALS(1004, "invalid phone or password"),
    VERIFICATION_CODE_INVALID(1005, "invalid verification code"),

    // Vehicle
    VEHICLE_NOT_FOUND(2001, "vehicle not found"),
    VEHICLE_NOT_AVAILABLE(2002, "vehicle not available"),
    VEHICLE_ALREADY_RENTED(2003, "vehicle already rented"),
    INVALID_VEHICLE_OWNER(2004, "invalid vehicle owner"),

    // Order
    ORDER_NOT_FOUND(3001, "order not found"),
    ORDER_ALREADY_EXISTS(3002, "order already exists"),
    ORDER_CANNOT_CANCEL(3003, "order cannot be cancelled"),
    ORDER_CANNOT_CONFIRM(3004, "order cannot be confirmed"),
    INVALID_DATE_RANGE(3005, "invalid date range"),
    VEHICLE_UNAVAILABLE(3006, "vehicle unavailable for selected dates"),

    // Payment
    PAYMENT_NOT_FOUND(4001, "payment not found"),
    PAYMENT_FAILED(4002, "payment failed"),
    PAYMENT_ALREADY_PROCESSED(4003, "payment already processed"),
    REFUND_FAILED(4004, "refund failed"),

    // Review
    REVIEW_NOT_FOUND(5001, "review not found"),
    REVIEW_ALREADY_EXISTS(5002, "review already exists"),
    INVALID_RATING(5003, "invalid rating"),

    // File
    FILE_UPLOAD_FAILED(6001, "file upload failed"),
    INVALID_FILE_TYPE(6002, "invalid file type"),
    FILE_SIZE_EXCEEDED(6003, "file size exceeded"),

    // General
    BAD_REQUEST(400, "bad request"),
    NOT_FOUND(404, "not found"),
    CONFLICT(409, "conflict"),
    INTERNAL_ERROR(500, "internal server error"),
    VALIDATION_ERROR(422, "validation error")
}
