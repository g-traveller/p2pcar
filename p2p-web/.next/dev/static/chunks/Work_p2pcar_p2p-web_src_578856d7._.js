(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backButton": "RegisterForm-module__OFX9Fq__backButton",
  "backIcon": "RegisterForm-module__OFX9Fq__backIcon",
  "bgCircle1": "RegisterForm-module__OFX9Fq__bgCircle1",
  "bgCircle2": "RegisterForm-module__OFX9Fq__bgCircle2",
  "checkbox": "RegisterForm-module__OFX9Fq__checkbox",
  "dividerContainer": "RegisterForm-module__OFX9Fq__dividerContainer",
  "dividerLine": "RegisterForm-module__OFX9Fq__dividerLine",
  "dividerText": "RegisterForm-module__OFX9Fq__dividerText",
  "errorIconSmall": "RegisterForm-module__OFX9Fq__errorIconSmall",
  "errorText": "RegisterForm-module__OFX9Fq__errorText",
  "featureDesc": "RegisterForm-module__OFX9Fq__featureDesc",
  "featureIcon": "RegisterForm-module__OFX9Fq__featureIcon",
  "featureItem": "RegisterForm-module__OFX9Fq__featureItem",
  "featureText": "RegisterForm-module__OFX9Fq__featureText",
  "featureTitle": "RegisterForm-module__OFX9Fq__featureTitle",
  "features": "RegisterForm-module__OFX9Fq__features",
  "fieldGroup": "RegisterForm-module__OFX9Fq__fieldGroup",
  "form": "RegisterForm-module__OFX9Fq__form",
  "globalError": "RegisterForm-module__OFX9Fq__globalError",
  "header": "RegisterForm-module__OFX9Fq__header",
  "heroContent": "RegisterForm-module__OFX9Fq__heroContent",
  "heroDescription": "RegisterForm-module__OFX9Fq__heroDescription",
  "heroTitle": "RegisterForm-module__OFX9Fq__heroTitle",
  "input": "RegisterForm-module__OFX9Fq__input",
  "inputContainer": "RegisterForm-module__OFX9Fq__inputContainer",
  "inputIcon": "RegisterForm-module__OFX9Fq__inputIcon",
  "label": "RegisterForm-module__OFX9Fq__label",
  "leftPanel": "RegisterForm-module__OFX9Fq__leftPanel",
  "loginLink": "RegisterForm-module__OFX9Fq__loginLink",
  "loginText": "RegisterForm-module__OFX9Fq__loginText",
  "logoContainer": "RegisterForm-module__OFX9Fq__logoContainer",
  "logoIcon": "RegisterForm-module__OFX9Fq__logoIcon",
  "logoText": "RegisterForm-module__OFX9Fq__logoText",
  "page": "RegisterForm-module__OFX9Fq__page",
  "passwordStrength": "RegisterForm-module__OFX9Fq__passwordStrength",
  "registrationErrorAlert": "RegisterForm-module__OFX9Fq__registrationErrorAlert",
  "registrationErrorAlertClose": "RegisterForm-module__OFX9Fq__registrationErrorAlertClose",
  "registrationErrorAlertContent": "RegisterForm-module__OFX9Fq__registrationErrorAlertContent",
  "registrationErrorAlertIcon": "RegisterForm-module__OFX9Fq__registrationErrorAlertIcon",
  "registrationErrorAlertMessage": "RegisterForm-module__OFX9Fq__registrationErrorAlertMessage",
  "registrationErrorAlertTitle": "RegisterForm-module__OFX9Fq__registrationErrorAlertTitle",
  "rightPanel": "RegisterForm-module__OFX9Fq__rightPanel",
  "sendCodeButton": "RegisterForm-module__OFX9Fq__sendCodeButton",
  "slideIn": "RegisterForm-module__OFX9Fq__slideIn",
  "socialButton": "RegisterForm-module__OFX9Fq__socialButton",
  "statItem": "RegisterForm-module__OFX9Fq__statItem",
  "statLabel": "RegisterForm-module__OFX9Fq__statLabel",
  "statValue": "RegisterForm-module__OFX9Fq__statValue",
  "stats": "RegisterForm-module__OFX9Fq__stats",
  "strengthBar": "RegisterForm-module__OFX9Fq__strengthBar",
  "strengthFill": "RegisterForm-module__OFX9Fq__strengthFill",
  "strengthText": "RegisterForm-module__OFX9Fq__strengthText",
  "submitButton": "RegisterForm-module__OFX9Fq__submitButton",
  "subtitle": "RegisterForm-module__OFX9Fq__subtitle",
  "successContainer": "RegisterForm-module__OFX9Fq__successContainer",
  "successIcon": "RegisterForm-module__OFX9Fq__successIcon",
  "successMessage": "RegisterForm-module__OFX9Fq__successMessage",
  "successTitle": "RegisterForm-module__OFX9Fq__successTitle",
  "termsGroup": "RegisterForm-module__OFX9Fq__termsGroup",
  "termsLabel": "RegisterForm-module__OFX9Fq__termsLabel",
  "title": "RegisterForm-module__OFX9Fq__title",
  "togglePassword": "RegisterForm-module__OFX9Fq__togglePassword",
  "verificationContainer": "RegisterForm-module__OFX9Fq__verificationContainer",
});
}),
"[project]/Work/p2pcar/p2p-web/src/services/authApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthApiService",
    ()=>AuthApiService,
    "default",
    ()=>__TURBOPACK__default__export__,
    "forgotPassword",
    ()=>forgotPassword,
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "register",
    ()=>register,
    "resetPassword",
    ()=>resetPassword,
    "sendVerificationCode",
    ()=>sendVerificationCode,
    "verifyEmail",
    ()=>verifyEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
class AuthApiService {
    static baseUrl = `${API_BASE_URL}/api/v1/auth`;
    /**
   * Login with email and password
   */ static async login(data) {
        const response = await fetch(`${this.baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const errorData = await this.extractErrorData(response);
            throw errorData;
        }
        return response.json();
    }
    /**
   * Register a new user
   */ static async register(data) {
        const response = await fetch(`${this.baseUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const errorData = await this.extractErrorData(response);
            throw errorData;
        }
        return response.json();
    }
    /**
   * Logout user
   */ static async logout(token) {
        const response = await fetch(`${this.baseUrl}/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            const errorData = await this.extractErrorData(response);
            throw errorData;
        }
    }
    /**
   * Request password reset
   */ static async forgotPassword(email) {
        const response = await fetch(`${this.baseUrl}/forgot-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        });
        if (!response.ok) {
            const errorData = await this.extractErrorData(response);
            throw errorData;
        }
    }
    /**
   * Reset password with token
   */ static async resetPassword(token, password) {
        const response = await fetch(`${this.baseUrl}/reset-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token,
                password
            })
        });
        if (!response.ok) {
            const errorData = await this.extractErrorData(response);
            throw errorData;
        }
    }
    /**
   * Verify email with token
   */ static async verifyEmail(token) {
        const response = await fetch(`${this.baseUrl}/verify-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token
            })
        });
        if (!response.ok) {
            const errorData = await this.extractErrorData(response);
            throw errorData;
        }
    }
    /**
   * Send verification code
   */ static async sendVerificationCode(data) {
        const response = await fetch(`${this.baseUrl}/send-verification-code`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const errorData = await this.extractErrorData(response);
            throw errorData;
        }
        return response.json();
    }
    /**
   * Extract error data from failed response
   */ static async extractErrorData(response) {
        let errorData = {
            code: response.status,
            message: `HTTP error! status: ${response.status}`,
            response: {
                status: response.status,
                data: null
            }
        };
        try {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const json = await response.json();
                errorData = {
                    ...errorData,
                    ...json,
                    response: {
                        ...errorData.response,
                        data: json
                    }
                };
            } else {
                const text = await response.text();
                errorData.message = text || errorData.message;
            }
        } catch (e) {
        // If parsing fails, use default error data
        }
        const error = new Error(errorData.message || 'Request failed');
        error.response = errorData.response;
        error.code = errorData.code;
        throw error;
    }
}
const login = (data)=>AuthApiService.login(data);
const register = (data)=>AuthApiService.register(data);
const logout = (token)=>AuthApiService.logout(token);
const forgotPassword = (email)=>AuthApiService.forgotPassword(email);
const resetPassword = (token, password)=>AuthApiService.resetPassword(token, password);
const verifyEmail = (token)=>AuthApiService.verifyEmail(token);
const sendVerificationCode = (data)=>AuthApiService.sendVerificationCode(data);
const __TURBOPACK__default__export__ = AuthApiService;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/p2pcar/p2p-web/src/utils/errorHandler.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Error handling utilities for user-friendly error messages
 */ __turbopack_context__.s([
    "getLoginErrorMessage",
    ()=>getLoginErrorMessage,
    "getRegistrationErrorMessage",
    ()=>getRegistrationErrorMessage,
    "getVerificationCodeErrorMessage",
    ()=>getVerificationCodeErrorMessage
]);
/**
 * Backend error code mapping to user-friendly messages
 */ const ERROR_CODE_MAP = {
    // Verification codes (1005-1009)
    1005: '验证码错误或已过期',
    1006: '验证码已过期，请重新获取',
    1007: '请先获取验证码',
    1008: '验证码已发送，请稍后再试',
    1009: '验证码尝试次数过多，请1小时后再试',
    // Phone/Email errors (1010-1013)
    1010: '该手机号已被注册，请使用其他手机号或直接登录',
    1011: '该邮箱已被注册，请使用其他邮箱或直接登录',
    1012: '手机号格式不正确',
    1013: '邮箱格式不正确',
    // Password errors (1020-1023)
    1020: '密码长度至少需要8位',
    1021: '密码强度不足，请包含大小写字母、数字和特殊字符',
    1022: '密码错误',
    1023: '两次输入的密码不一致',
    // Nickname errors (1030-1033)
    1030: '昵称至少需要2个字符',
    1031: '昵称不能超过50个字符',
    1032: '昵称只能包含中文、英文、数字、下划线和空格',
    1033: '该昵称已被使用，请更换其他昵称',
    // General errors (400-500)
    400: '请求参数错误，请检查输入',
    401: '未授权，请先登录',
    403: '没有权限访问此资源',
    404: '请求的资源不存在',
    409: '资源冲突，该数据已存在',
    422: '数据验证失败',
    429: '操作过于频繁，请稍后再试',
    500: '服务器出现错误，请稍后重试',
    503: '服务暂时不可用，请稍后重试'
};
/**
 * Extracts error data from various error formats
 */ const extractErrorData = (error)=>{
    // If error is a string, try to parse as JSON
    if (typeof error === 'string') {
        try {
            return JSON.parse(error);
        } catch  {
            return {
                message: error
            };
        }
    }
    // If error has a message property, try to parse it as JSON
    if (error?.message) {
        try {
            return JSON.parse(error.message);
        } catch  {
            return {
                message: error.message
            };
        }
    }
    // If error has response data (axios-like error structure)
    if (error?.response?.data) {
        return error.response.data;
    }
    // If error is already an object with expected structure
    if (error?.code || error?.message) {
        return error;
    }
    // Fallback
    return {
        message: String(error)
    };
};
const getRegistrationErrorMessage = (error)=>{
    const errorData = extractErrorData(error);
    // Check for field-specific validation errors
    if (errorData.errors) {
        const firstField = Object.keys(errorData.errors)[0];
        const firstError = errorData.errors[firstField]?.[0];
        if (firstError) {
            return firstError; // Backend now sends Chinese messages
        }
    }
    // Check if backend sent an error code
    if (errorData.code && ERROR_CODE_MAP[errorData.code]) {
        return ERROR_CODE_MAP[errorData.code];
    }
    // Check for error message
    if (errorData.message) {
        // If it's already Chinese, return it directly
        if (/[\u4e00-\u9fa5]/.test(errorData.message)) {
            return errorData.message;
        }
        // Otherwise try to map it
        const mapped = mapErrorMessage(errorData.message);
        if (mapped !== errorData.message) {
            return mapped;
        }
    }
    // Check HTTP status from response
    if (error?.response?.status) {
        const status = error.response.status;
        if (ERROR_CODE_MAP[status]) {
            return ERROR_CODE_MAP[status];
        }
    }
    // Default error message
    return '注册失败，请稍后重试';
};
/**
 * Maps specific error messages to user-friendly Chinese messages
 * This is a fallback for any error messages not directly mapped
 */ const mapErrorMessage = (message)=>{
    const lowerMessage = message.toLowerCase();
    // Verification code errors
    if (lowerMessage.includes('verification code') || lowerMessage.includes('验证码')) {
        if (lowerMessage.includes('expired') || lowerMessage.includes('过期')) {
            return '验证码已过期，请重新获取';
        }
        if (lowerMessage.includes('invalid') || lowerMessage.includes('错误') || lowerMessage.includes('不匹配')) {
            return '验证码错误，请检查后重新输入';
        }
        if (lowerMessage.includes('not found') || lowerMessage.includes('未找到')) {
            return '验证码不存在，请先获取验证码';
        }
        return '验证码验证失败，请重新获取';
    }
    // Email errors
    if (lowerMessage.includes('email')) {
        if (lowerMessage.includes('already exists') || lowerMessage.includes('已存在') || lowerMessage.includes('已注册')) {
            return '该邮箱已被注册，请使用其他邮箱或直接登录';
        }
        if (lowerMessage.includes('invalid') || lowerMessage.includes('格式')) {
            return '邮箱格式不正确';
        }
        if (lowerMessage.includes('not verified')) {
            return '邮箱未验证，请先验证邮箱';
        }
    }
    // Phone errors
    if (lowerMessage.includes('phone') || lowerMessage.includes('手机')) {
        if (lowerMessage.includes('already exists') || lowerMessage.includes('已存在') || lowerMessage.includes('已注册')) {
            return '该手机号已被注册，请使用其他手机号或直接登录';
        }
        if (lowerMessage.includes('invalid') || lowerMessage.includes('格式')) {
            return '手机号格式不正确';
        }
    }
    // Password errors
    if (lowerMessage.includes('password') || lowerMessage.includes('密码')) {
        if (lowerMessage.includes('weak') || lowerMessage.includes('弱')) {
            return '密码强度不足，请使用更复杂的密码';
        }
        if (lowerMessage.includes('too short') || lowerMessage.includes('太短')) {
            return '密码长度不足，至少需要8个字符';
        }
    }
    // Nickname errors
    if (lowerMessage.includes('name') || lowerMessage.includes('昵称')) {
        if (lowerMessage.includes('already exists') || lowerMessage.includes('已被使用') || lowerMessage.includes('已存在') || lowerMessage.includes('被占用')) {
            return '该昵称已被使用，请更换其他昵称';
        }
        if (lowerMessage.includes('too short') || lowerMessage.includes('太短')) {
            return '昵称至少需要2个字符';
        }
        if (lowerMessage.includes('too long') || lowerMessage.includes('太长')) {
            return '昵称不能超过50个字符';
        }
        if (lowerMessage.includes('invalid') || lowerMessage.includes('格式')) {
            return '昵称格式不正确，只能包含中文、英文、数字、下划线和空格';
        }
    }
    // Rate limiting errors
    if (lowerMessage.includes('too many') || lowerMessage.includes('rate limit') || lowerMessage.includes('频繁')) {
        return '操作过于频繁，请稍后再试';
    }
    // Network errors
    if (lowerMessage.includes('network') || lowerMessage.includes('fetch') || lowerMessage.includes('网络')) {
        return '网络连接失败，请检查网络后重试';
    }
    // Timeout errors
    if (lowerMessage.includes('timeout') || lowerMessage.includes('超时')) {
        return '请求超时，请检查网络后重试';
    }
    // Server errors
    if (lowerMessage.includes('server error') || lowerMessage.includes('500') || lowerMessage.includes('内部错误')) {
        return '服务器出现错误，请稍后重试';
    }
    // Return original message if nothing matched
    return message;
};
const getVerificationCodeErrorMessage = (error)=>{
    const errorData = extractErrorData(error);
    // Check for error code first
    if (errorData.code && ERROR_CODE_MAP[errorData.code]) {
        return ERROR_CODE_MAP[errorData.code];
    }
    // Fall back to general registration error handler
    return getRegistrationErrorMessage(error);
};
const getLoginErrorMessage = (error)=>{
    const errorData = extractErrorData(error);
    // Check for field-specific validation errors
    if (errorData.errors) {
        const firstField = Object.keys(errorData.errors)[0];
        const firstError = errorData.errors[firstField]?.[0];
        if (firstError) {
            return firstError;
        }
    }
    // Check if backend sent an error code
    if (errorData.code && ERROR_CODE_MAP[errorData.code]) {
        return ERROR_CODE_MAP[errorData.code];
    }
    // Check for error message
    if (errorData.message) {
        // If it's already Chinese, return it directly
        if (/[\u4e00-\u9fa5]/.test(errorData.message)) {
            return errorData.message;
        }
        // Map common login errors
        const lowerMessage = errorData.message.toLowerCase();
        if (lowerMessage.includes('bad credentials') || lowerMessage.includes('密码') || lowerMessage.includes('凭证')) {
            return '用户名或密码错误';
        }
        if (lowerMessage.includes('user not found') || lowerMessage.includes('用户不存在') || lowerMessage.includes('未找到')) {
            return '用户不存在，请检查输入或注册新账户';
        }
        if (lowerMessage.includes('account disabled') || lowerMessage.includes('账户已禁用')) {
            return '账户已被禁用，请联系客服';
        }
        if (lowerMessage.includes('account locked') || lowerMessage.includes('账户已锁定')) {
            return '账户已被锁定，请稍后再试或联系客服';
        }
    }
    // Check HTTP status from response
    if (error?.response?.status) {
        const status = error.response.status;
        if (ERROR_CODE_MAP[status]) {
            return ERROR_CODE_MAP[status];
        }
    }
    // Default error message
    return '登录失败，请稍后重试';
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/src/services/authApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/src/utils/errorHandler.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Mock verification code storage (in production, this would be handled by the backend)
const mockVerificationCodes = new Map();
function RegisterForm({ onRegister }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        account: '',
        password: '',
        confirmPassword: '',
        verificationCode: '',
        agreeToTerms: false
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmPassword, setShowConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [registrationSuccess, setRegistrationSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [registrationError, setRegistrationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Detect if input is phone or email
    const getAccountType = (account)=>{
        if (!account.trim()) return null;
        // Check if it's a phone number (starts with 1 and 11 digits)
        if (/^1[3-9]\d{9}$/.test(account.trim())) {
            return 'phone';
        }
        // Check if it's an email
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(account.trim())) {
            return 'email';
        }
        return null;
    };
    // Password strength validator
    const getPasswordStrength = (password)=>{
        let score = 0;
        if (password.length >= 6) score++;
        if (password.length >= 8) score++;
        if (password.length >= 12) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^a-zA-Z0-9]/.test(password)) score++;
        if (score <= 2) return {
            strength: 'weak',
            score
        };
        if (score <= 4) return {
            strength: 'medium',
            score
        };
        return {
            strength: 'strong',
            score
        };
    };
    const validateForm = ()=>{
        const newErrors = {};
        // Nickname validation
        if (!formData.name.trim()) {
            newErrors.name = '请输入您的昵称';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = '昵称至少需要2个字符';
        } else if (formData.name.trim().length > 50) {
            newErrors.name = '昵称不能超过50个字符';
        } else if (!/^[\u4e00-\u9fa5a-zA-Z0-9_\s]+$/.test(formData.name.trim())) {
            newErrors.name = '昵称只能包含中文、英文、数字、下划线和空格';
        }
        // Account validation
        if (!formData.account.trim()) {
            newErrors.account = '请输入您的手机号或邮箱';
        } else {
            const accountType = getAccountType(formData.account);
            if (!accountType) {
                newErrors.account = '请输入有效的手机号或邮箱地址';
            }
        }
        // Verification code validation
        if (!formData.verificationCode.trim()) {
            newErrors.verificationCode = '请输入验证码';
        } else if (formData.verificationCode.length !== 6) {
            newErrors.verificationCode = '请输入6位验证码';
        } else if (!/^\d{6}$/.test(formData.verificationCode)) {
            newErrors.verificationCode = '验证码必须为6位数字';
        }
        // Password validation
        if (!formData.password) {
            newErrors.password = '请输入您的密码';
        } else if (formData.password.length < 8) {
            newErrors.password = '密码至少需要8个字符';
        } else if (formData.password.length > 128) {
            newErrors.password = '密码不能超过128个字符';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(formData.password)) {
            // Check for at least one lowercase, one uppercase, one digit, and one special character
            const { strength } = getPasswordStrength(formData.password);
            if (strength === 'weak') {
                newErrors.password = '密码强度较弱，建议包含大小写字母、数字和特殊字符';
            }
        }
        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = '请再次输入密码';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = '两次输入的密码不一致';
        }
        // Terms validation
        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = '请阅读并同意服务条款和隐私政策';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Clear previous registration errors
        setRegistrationError('');
        setRegistrationSuccess(false);
        if (!validateForm()) {
            return;
        }
        setLoading(true);
        try {
            const accountType = getAccountType(formData.account);
            // Convert to API format
            const registerData = {
                name: formData.name,
                password: formData.password,
                verificationCode: formData.verificationCode,
                ...accountType === 'phone' ? {
                    phone: formData.account
                } : {
                    email: formData.account
                }
            };
            // Transform for backend API (backend expects 'code' field not 'verificationCode')
            const apiData = {
                ...registerData,
                code: registerData.verificationCode
            };
            delete apiData.verificationCode;
            if (onRegister) {
                await onRegister(registerData);
            } else {
                // If no custom handler provided, use the default register API
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["register"])(apiData);
            }
            setRegistrationSuccess(true);
            // Auto redirect after 2 seconds
            setTimeout(()=>{
                window.location.href = '/login';
            }, 2000);
        } catch (error) {
            debugger;
            console.error('Registration failed:', error);
            // Use user-friendly error message mapping
            const friendlyMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegistrationErrorMessage"])(error);
            setRegistrationError(friendlyMessage);
            // Set field-specific errors if available
            setErrors((prev)=>({
                    ...prev,
                    submit: friendlyMessage
                }));
        } finally{
            setLoading(false);
        }
    };
    const handleChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev)=>({
                    ...prev,
                    [field]: undefined
                }));
        }
        // Clear registration errors when user modifies form
        if (registrationError || registrationSuccess) {
            setRegistrationError('');
            setRegistrationSuccess(false);
        }
    };
    const handleSendVerificationCode = async ()=>{
        // Clear any previous verification code errors
        setErrors((prev)=>({
                ...prev,
                verificationCode: undefined
            }));
        setRegistrationError('');
        // Validate account field first
        const account = formData.account.trim();
        const accountType = getAccountType(account);
        if (!account) {
            setErrors((prev)=>({
                    ...prev,
                    account: '请输入您的手机号或邮箱'
                }));
            return;
        }
        if (!accountType) {
            setErrors((prev)=>({
                    ...prev,
                    account: '请输入有效的手机号或邮箱地址'
                }));
            return;
        }
        try {
            // Try to call the backend API first
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendVerificationCode"])({
                    type: accountType,
                    [accountType]: account
                });
            } catch (apiError) {
                // If backend is not available, use mock verification code
                console.log('Backend not available, using mock verification code');
                // Generate a 6-digit mock verification code
                const mockCode = Math.floor(100000 + Math.random() * 900000).toString();
                const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes expiration
                mockVerificationCodes.set(account, {
                    code: mockCode,
                    expiresAt
                });
                // Show the mock code in console (for development)
                console.log(`=== MOCK VERIFICATION CODE ===`);
                console.log(`Account: ${account}`);
                console.log(`Code: ${mockCode}`);
                console.log(`Expires at: ${new Date(expiresAt).toLocaleString()}`);
                console.log(`============================`);
                // Show user-friendly message in development
                if ("TURBOPACK compile-time truthy", 1) {
                    alert(`[开发模式] 模拟验证码: ${mockCode}\n该验证码将在5分钟后过期`);
                }
            }
            // Start countdown
            setCountdown(60);
            const timer = setInterval(()=>{
                setCountdown((prev)=>{
                    if (prev <= 1) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } catch (error) {
            console.error('Failed to send verification code:', error);
            // Use user-friendly error message mapping
            const errorMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVerificationCodeErrorMessage"])(error);
            setErrors((prev)=>({
                    ...prev,
                    verificationCode: errorMessage
                }));
        }
    };
    // Get current password strength for UI feedback
    const passwordStrength = formData.password ? getPasswordStrength(formData.password) : null;
    // If registration was successful, show success message
    if (registrationSuccess) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftPanel,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "64",
                                height: "64",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successIcon,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        fill: "#10B981"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 300,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8 12L11 15L16 9",
                                        stroke: "white",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successTitle,
                                children: "注册成功！"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successMessage,
                                children: "欢迎加入车享出行！正在跳转到登录页面..."
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                    lineNumber: 297,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightPanel,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bgCircle1
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bgCircle2
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                    lineNumber: 309,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
            lineNumber: 296,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftPanel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backButton,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backIcon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 10H5M5 10L10 15M5 10L10 5",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this),
                            "返回首页"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: "创建账户"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                                children: "注册成为会员，开启便捷租车体验"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                        onSubmit: handleSubmit,
                        children: [
                            registrationError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].registrationErrorAlert,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].registrationErrorAlertIcon,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].registrationErrorAlertContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].registrationErrorAlertTitle,
                                                children: "注册失败"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 352,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].registrationErrorAlertMessage,
                                                children: registrationError
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].registrationErrorAlertClose,
                                        onClick: ()=>setRegistrationError(''),
                                        "aria-label": "关闭错误提示",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 14 14",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M1 1L13 13M1 13L13 1",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 362,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "昵称"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputContainer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 20 20",
                                                fill: "none",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputIcon,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z",
                                                        fill: "rgba(10, 10, 10, 0.5)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M10 12C6.68629 12 2 14.2386 2 17V18H18V17C18 14.2386 13.3137 12 10 12Z",
                                                        fill: "rgba(10, 10, 10, 0.5)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 377,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                placeholder: "请输入您的昵称",
                                                value: formData.name,
                                                onChange: (e)=>handleChange('name', e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 381,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 376,
                                        columnNumber: 13
                                    }, this),
                                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
                                        children: errors.name
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 389,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "手机号/邮箱"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 394,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputContainer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 20 20",
                                                fill: "none",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputIcon,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M4 4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V6C2 4.89543 2.89543 4 4 4Z",
                                                        stroke: "rgba(10, 10, 10, 0.5)",
                                                        strokeWidth: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M2 5L10 11L18 5",
                                                        stroke: "rgba(10, 10, 10, 0.5)",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 396,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                placeholder: "请输入您的手机号或邮箱",
                                                value: formData.account,
                                                onChange: (e)=>handleChange('account', e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 400,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 395,
                                        columnNumber: 13
                                    }, this),
                                    errors.account && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
                                        children: errors.account
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 408,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "验证码"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 413,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].verificationContainer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputContainer,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 20 20",
                                                        fill: "none",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputIcon,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z",
                                                                stroke: "rgba(10, 10, 10, 0.5)",
                                                                strokeWidth: "1.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                                lineNumber: 417,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M10 6V10L13 13",
                                                                stroke: "rgba(10, 10, 10, 0.5)",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                                lineNumber: 418,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                        placeholder: "请输入验证码",
                                                        value: formData.verificationCode,
                                                        onChange: (e)=>handleChange('verificationCode', e.target.value),
                                                        maxLength: 6
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 415,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sendCodeButton,
                                                onClick: handleSendVerificationCode,
                                                disabled: countdown > 0,
                                                children: countdown > 0 ? `${countdown}秒` : '获取验证码'
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 429,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 414,
                                        columnNumber: 13
                                    }, this),
                                    errors.verificationCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
                                        children: errors.verificationCode
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 438,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 412,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "密码"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 443,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputContainer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 20 20",
                                                fill: "none",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputIcon,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "3",
                                                        y: "8",
                                                        width: "14",
                                                        height: "10",
                                                        rx: "2",
                                                        stroke: "rgba(10, 10, 10, 0.5)",
                                                        strokeWidth: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6 8V5C6 2.79086 7.79086 1 10 1C12.2091 1 14 2.79086 14 5V8",
                                                        stroke: "rgba(10, 10, 10, 0.5)",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 445,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: showPassword ? 'text' : 'password',
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                placeholder: "请输入您的密码（至少8位，包含大小写字母、数字和特殊字符）",
                                                value: formData.password,
                                                onChange: (e)=>handleChange('password', e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 449,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].togglePassword,
                                                onClick: ()=>setShowPassword(!showPassword),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    fill: "none",
                                                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a10.07 10.07 0 01-5.94-2.06",
                                                                stroke: "rgba(10, 10, 10, 0.5)",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a10.07 10.07 0 01-5.94 2.06",
                                                                stroke: "rgba(10, 10, 10, 0.5)",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                                lineNumber: 465,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "2",
                                                                y1: "2",
                                                                x2: "22",
                                                                y2: "22",
                                                                stroke: "rgba(10, 10, 10, 0.5)",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                                lineNumber: 466,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M1 12s4-8 11-8 11 8 11 8-4-8-11-8z",
                                                                stroke: "rgba(10, 10, 10, 0.5)",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                                lineNumber: 470,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "3",
                                                                stroke: "rgba(10, 10, 10, 0.5)",
                                                                strokeWidth: "1.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                                lineNumber: 471,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                    lineNumber: 461,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 456,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 444,
                                        columnNumber: 13
                                    }, this),
                                    errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
                                        children: errors.password
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 477,
                                        columnNumber: 33
                                    }, this),
                                    formData.password && !errors.password && passwordStrength && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].passwordStrength,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].strengthBar,
                                                style: {
                                                    width: '100%',
                                                    height: '4px',
                                                    borderRadius: '2px',
                                                    backgroundColor: '#E5E7EB',
                                                    position: 'relative',
                                                    overflow: 'hidden'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        height: '100%',
                                                        width: `${passwordStrength.score / 7 * 100}%`,
                                                        borderRadius: '2px',
                                                        transition: 'all 0.3s ease',
                                                        backgroundColor: passwordStrength.strength === 'weak' ? '#EF4444' : passwordStrength.strength === 'medium' ? '#F59E0B' : '#10B981'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 480,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].strengthText,
                                                style: {
                                                    fontSize: '12px',
                                                    color: passwordStrength.strength === 'weak' ? '#EF4444' : passwordStrength.strength === 'medium' ? '#F59E0B' : '#10B981',
                                                    marginLeft: '8px'
                                                },
                                                children: passwordStrength.strength === 'weak' ? '弱' : passwordStrength.strength === 'medium' ? '中' : '强'
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 502,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 479,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 442,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "确认密码"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 517,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputContainer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 20 20",
                                                fill: "none",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputIcon,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "3",
                                                        y: "8",
                                                        width: "14",
                                                        height: "10",
                                                        rx: "2",
                                                        stroke: "rgba(10, 10, 10, 0.5)",
                                                        strokeWidth: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                        lineNumber: 520,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6 8V5C6 2.79086 7.79086 1 10 1C12.2091 1 14 2.79086 14 5V8",
                                                        stroke: "rgba(10, 10, 10, 0.5)",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                        lineNumber: 521,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 519,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: showConfirmPassword ? 'text' : 'password',
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                placeholder: "请再次输入密码",
                                                value: formData.confirmPassword,
                                                onChange: (e)=>handleChange('confirmPassword', e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 523,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].togglePassword,
                                                onClick: ()=>setShowConfirmPassword(!showConfirmPassword),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    fill: "none",
                                                    children: showConfirmPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a10.07 10.07 0 01-5.94-2.06",
                                                                stroke: "rgba(10, 10, 10, 0.5)",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a10.07 10.07 0 01-5.94 2.06",
                                                                stroke: "rgba(10, 10, 10, 0.5)",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "2",
                                                                y1: "2",
                                                                x2: "22",
                                                                y2: "22",
                                                                stroke: "rgba(10, 10, 10, 0.5)",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                                lineNumber: 540,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M1 12s4-8 11-8 11 8 11 8-4-8-11-8z",
                                                                stroke: "rgba(10, 10, 10, 0.5)",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                                lineNumber: 544,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "3",
                                                                stroke: "rgba(10, 10, 10, 0.5)",
                                                                strokeWidth: "1.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                                lineNumber: 545,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                    lineNumber: 535,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 530,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 518,
                                        columnNumber: 13
                                    }, this),
                                    errors.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
                                        children: errors.confirmPassword
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 551,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 516,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].termsGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        id: "terms",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkbox,
                                        checked: formData.agreeToTerms,
                                        onChange: (e)=>handleChange('agreeToTerms', e.target.checked)
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 556,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "terms",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].termsLabel,
                                        children: [
                                            "我已阅读并同意",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/terms",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                                                children: "服务条款"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 565,
                                                columnNumber: 15
                                            }, this),
                                            "和",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/privacy",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                                                children: "隐私政策"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 567,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 563,
                                        columnNumber: 13
                                    }, this),
                                    errors.agreeToTerms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
                                        children: errors.agreeToTerms
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 569,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 555,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                disabled: loading,
                                children: loading ? '注册中...' : '注册'
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 573,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dividerContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dividerLine
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 579,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dividerText,
                                        children: "或者"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 580,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dividerLine
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 581,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 578,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialButton,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "20",
                                        fill: "currentColor",
                                        viewBox: "0 0 16 16",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 587,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 588,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 586,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "使用微信继续"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 590,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 585,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialButton,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "20",
                                        fill: "currentColor",
                                        viewBox: "0 0 16 16",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2.541 0H13.5a2.55 2.55 0 0 1 2.54 2.563v8.297c-.006 0-.531-.046-2.978-.813-.412-.14-.916-.327-1.479-.536q-.456-.17-.957-.353a13 13 0 0 0 1.325-3.373H8.822V4.649h3.831v-.634h-3.83V2.121H7.26c-.274 0-.274.273-.274.273v1.621H3.11v.634h3.875v1.136h-3.2v.634H9.99c-.227.789-.532 1.53-.894 2.202-2.013-.67-4.161-1.212-5.51-.878-.864.214-1.42.597-1.746.998-1.499 1.84-.424 4.633 2.741 4.633 1.872 0 3.675-1.053 5.072-2.787 2.08 1.008 6.37 2.738 6.387 2.745v.105A2.55 2.55 0 0 1 13.5 16H2.541A2.55 2.55 0 0 1 0 13.437V2.563A2.55 2.55 0 0 1 2.541 0"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 595,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2.309 9.27c-1.22 1.073-.49 3.034 1.978 3.034 1.434 0 2.868-.925 3.994-2.406-1.602-.789-2.959-1.353-4.425-1.207-.397.04-1.14.217-1.547.58Z"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 596,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 594,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "使用支付宝继续"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 598,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 593,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginLink,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "已有账户？"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 603,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginText,
                                        children: "立即登录"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 604,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 602,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightPanel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bgCircle1
                    }, void 0, false, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                        lineNumber: 612,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bgCircle2
                    }, void 0, false, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                        lineNumber: 613,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroTitle,
                                children: "加入我们的社区"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 617,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroDescription,
                                children: "成为车享出行的一员，体验最便捷的P2P租车平台，或者出租您的爱车赚取收益。"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 618,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].features,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z",
                                                            stroke: "white",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                            lineNumber: 627,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M3 10L12 14L21 10",
                                                            stroke: "white",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                            lineNumber: 628,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                    lineNumber: 626,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 625,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureText,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureTitle,
                                                        children: "海量优质车源"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureDesc,
                                                        children: "覆盖全国主要城市，各类车型应有尽有"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                        lineNumber: 633,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 631,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 624,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z",
                                                            stroke: "white",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                            lineNumber: 640,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M3 10L12 14L21 10",
                                                            stroke: "white",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                            lineNumber: 641,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                    lineNumber: 639,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 638,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureText,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureTitle,
                                                        children: "安全保障"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                        lineNumber: 645,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureDesc,
                                                        children: "完善的保险体系，让每次出行都安心无忧"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                        lineNumber: 646,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 644,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 637,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z",
                                                            stroke: "white",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                            lineNumber: 653,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M3 10L12 14L21 10",
                                                            stroke: "white",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                            lineNumber: 654,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 651,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureText,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureTitle,
                                                        children: "灵活实惠"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                        lineNumber: 658,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureDesc,
                                                        children: "按需租车，价格透明，无隐藏费用"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                        lineNumber: 659,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 657,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 650,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 623,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stats,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                                children: "50K+"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 667,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                                children: "注册用户"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 668,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 666,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                                children: "10K+"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 671,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                                children: "可租车辆"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 672,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 670,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                                children: "4.8"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 675,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                                children: "平均评分"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                                lineNumber: 676,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                        lineNumber: 674,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                                lineNumber: 665,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                        lineNumber: 616,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
                lineNumber: 610,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx",
        lineNumber: 318,
        columnNumber: 5
    }, this);
}
_s(RegisterForm, "J776TTox0EACznLd9dCvv9oZZaU=");
_c = RegisterForm;
var _c;
__turbopack_context__.k.register(_c, "RegisterForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/p2pcar/p2p-web/src/app/register/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/src/components/RegisterForm.tsx [app-client] (ecmascript)");
'use client';
;
;
function RegisterPage() {
    // The RegisterForm component now handles all validation and registration logic internally
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$RegisterForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Work/p2pcar/p2p-web/src/app/register/page.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = RegisterPage;
var _c;
__turbopack_context__.k.register(_c, "RegisterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Work_p2pcar_p2p-web_src_578856d7._.js.map