package com.p2pcar.exception

enum class ErrorCode(val code: Int, val message: String, val httpStatus: Int = 400) {
    // Authentication & Authorization
    UNAUTHORIZED(401, "未授权，请先登录", 401),
    FORBIDDEN(403, "没有权限访问此资源", 403),
    TOKEN_INVALID(4011, "无效的访问令牌", 401),
    TOKEN_EXPIRED(4012, "访问令牌已过期，请重新登录", 401),

    // User - Registration & Authentication
    USER_NOT_FOUND(1001, "用户不存在", 404),
    USER_EXISTS(1002, "该账号已被注册", 409),
    USER_DISABLED(1003, "账号已被禁用，请联系客服", 403),
    INVALID_CREDENTIALS(1004, "手机号或密码错误", 401),

    // Verification Code Errors
    VERIFICATION_CODE_INVALID(1005, "验证码错误或已过期", 400),
    VERIFICATION_CODE_EXPIRED(1006, "验证码已过期，请重新获取", 400),
    VERIFICATION_CODE_NOT_FOUND(1007, "请先获取验证码", 400),
    VERIFICATION_CODE_RESEND_TOO_SOON(1008, "验证码已发送，请稍后再试", 429),
    VERIFICATION_CODE_TOO_MANY_ATTEMPTS(1009, "验证码尝试次数过多，请1小时后再试", 429),

    // Phone/Email Specific Errors
    PHONE_ALREADY_REGISTERED(1010, "该手机号已被注册，请使用其他手机号或直接登录", 409),
    EMAIL_ALREADY_REGISTERED(1011, "该邮箱已被注册，请使用其他邮箱或直接登录", 409),
    PHONE_FORMAT_INVALID(1012, "手机号格式不正确", 400),
    EMAIL_FORMAT_INVALID(1013, "邮箱格式不正确", 400),

    // Password Errors
    PASSWORD_TOO_SHORT(1020, "密码长度至少需要8位", 400),
    PASSWORD_TOO_WEAK(1021, "密码强度不足，请包含大小写字母、数字和特殊字符", 400),
    PASSWORD_INCORRECT(1022, "密码错误", 401),
    PASSWORDS_DO_NOT_MATCH(1023, "两次输入的密码不一致", 400),

    // Nickname Errors
    NAME_TOO_SHORT(1030, "昵称至少需要2个字符", 400),
    NAME_TOO_LONG(1031, "昵称不能超过50个字符", 400),
    NAME_FORMAT_INVALID(1032, "昵称只能包含中文、英文、数字、下划线和空格", 400),
    NAME_ALREADY_EXISTS(1033, "该昵称已被使用，请更换其他昵称", 409),

    // OAuth Errors
    OAUTH_TOKEN_FAILED(1040, "获取微信授权令牌失败", 400),
    OAUTH_USER_INFO_FAILED(1041, "获取微信用户信息失败", 400),
    OAUTH_STATE_INVALID(1042, "授权状态无效", 400),
    OAUTH_CODE_INVALID(1043, "授权码无效或已过期", 400),

    // Vehicle
    VEHICLE_NOT_FOUND(2001, "车辆不存在", 404),
    VEHICLE_NOT_AVAILABLE(2002, "该车辆暂不可用", 400),
    VEHICLE_ALREADY_RENTED(2003, "该车辆已被租用", 400),
    INVALID_VEHICLE_OWNER(2004, "无效的车主信息", 400),

    // Order
    ORDER_NOT_FOUND(3001, "订单不存在", 404),
    ORDER_ALREADY_EXISTS(3002, "订单已存在", 409),
    ORDER_CANNOT_CANCEL(3003, "订单无法取消", 400),
    ORDER_CANNOT_CONFIRM(3004, "订单无法确认", 400),
    INVALID_DATE_RANGE(3005, "无效的日期范围", 400),
    VEHICLE_UNAVAILABLE(3006, "所选日期车辆不可用", 400),

    // Payment
    PAYMENT_NOT_FOUND(4001, "支付记录不存在", 404),
    PAYMENT_FAILED(4002, "支付失败，请稍后重试", 400),
    PAYMENT_ALREADY_PROCESSED(4003, "该支付已处理", 400),
    REFUND_FAILED(4004, "退款失败，请稍后重试", 400),

    // Review
    REVIEW_NOT_FOUND(5001, "评价不存在", 404),
    REVIEW_ALREADY_EXISTS(5002, "评价已存在", 409),
    INVALID_RATING(5003, "评分无效", 400),

    // File
    FILE_UPLOAD_FAILED(6001, "文件上传失败", 400),
    INVALID_FILE_TYPE(6002, "不支持的文件类型", 400),
    FILE_SIZE_EXCEEDED(6003, "文件大小超过限制", 400),

    // General
    BAD_REQUEST(400, "请求参数错误", 400),
    NOT_FOUND(404, "请求的资源不存在", 404),
    CONFLICT(409, "资源冲突", 409),
    INTERNAL_ERROR(500, "服务器出现错误，请稍后重试", 500),
    VALIDATION_ERROR(422, "数据验证失败", 422),
    NETWORK_ERROR(503, "网络连接失败，请检查网络后重试", 503),
    SERVICE_UNAVAILABLE(503, "服务暂时不可用，请稍后重试", 503)
}
