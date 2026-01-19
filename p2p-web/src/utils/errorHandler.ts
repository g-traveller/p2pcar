/**
 * Error handling utilities for user-friendly error messages
 */

export interface ApiError {
  code?: number;
  message?: string;
  errors?: Record<string, string[]>;
  field?: string;
}

/**
 * Backend error code mapping to user-friendly messages
 */
const ERROR_CODE_MAP: Record<number, string> = {
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
  503: '服务暂时不可用，请稍后重试',
};

/**
 * Extracts error data from various error formats
 */
const extractErrorData = (error: any): ApiError => {
  // If error is a string, try to parse as JSON
  if (typeof error === 'string') {
    try {
      return JSON.parse(error);
    } catch {
      return { message: error };
    }
  }

  // If error has a message property, try to parse it as JSON
  if (error?.message) {
    try {
      return JSON.parse(error.message);
    } catch {
      return { message: error.message };
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
  return { message: String(error) };
};

/**
 * Maps backend error codes/messages to user-friendly Chinese messages
 */
export const getRegistrationErrorMessage = (error: any): string => {
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
 */
const mapErrorMessage = (message: string): string => {
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

/**
 * Maps send verification code errors to user-friendly messages
 */
export const getVerificationCodeErrorMessage = (error: any): string => {
  const errorData = extractErrorData(error);

  // Check for error code first
  if (errorData.code && ERROR_CODE_MAP[errorData.code]) {
    return ERROR_CODE_MAP[errorData.code];
  }

  // Fall back to general registration error handler
  return getRegistrationErrorMessage(error);
};

/**
 * Maps login errors to user-friendly messages
 */
export const getLoginErrorMessage = (error: any): string => {
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
