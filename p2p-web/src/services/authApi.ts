import { LoginRequest, LoginResponse, RegisterRequest, ApiResponse, SendVerificationCodeRequest, SendVerificationCodeResponse } from '@/types/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export class AuthApiService {
  private static baseUrl = `${API_BASE_URL}/api/v1/auth`;

  /**
   * Login with email and password
   */
  static async login(data: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    const response = await fetch(`${this.baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await this.extractErrorData(response);
      throw errorData;
    }

    return response.json();
  }

  /**
   * Register a new user
   */
  static async register(data: RegisterRequest): Promise<ApiResponse<LoginResponse>> {
    const response = await fetch(`${this.baseUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await this.extractErrorData(response);
      throw errorData;
    }

    return response.json();
  }

  /**
   * Logout user
   */
  static async logout(token: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await this.extractErrorData(response);
      throw errorData;
    }
  }

  /**
   * Request password reset
   */
  static async forgotPassword(email: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await this.extractErrorData(response);
      throw errorData;
    }
  }

  /**
   * Reset password with token
   */
  static async resetPassword(token: string, password: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, password }),
    });

    if (!response.ok) {
      const errorData = await this.extractErrorData(response);
      throw errorData;
    }
  }

  /**
   * Verify email with token
   */
  static async verifyEmail(token: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/verify-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      const errorData = await this.extractErrorData(response);
      throw errorData;
    }
  }

  /**
   * Send verification code
   */
  static async sendVerificationCode(data: SendVerificationCodeRequest): Promise<ApiResponse<SendVerificationCodeResponse>> {
    const response = await fetch(`${this.baseUrl}/send-verification-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await this.extractErrorData(response);
      throw errorData;
    }

    return response.json();
  }

  /**
   * Extract error data from failed response
   */
  private static async extractErrorData(response: Response): Promise<never> {
    let errorData: any = {
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

    const error = new Error(errorData.message || 'Request failed') as any;
    error.response = errorData.response;
    error.code = errorData.code;
    throw error;
  }
}

// Convenience functions
export const login = (data: LoginRequest) => AuthApiService.login(data);
export const register = (data: RegisterRequest) => AuthApiService.register(data);
export const logout = (token: string) => AuthApiService.logout(token);
export const forgotPassword = (email: string) => AuthApiService.forgotPassword(email);
export const resetPassword = (token: string, password: string) => AuthApiService.resetPassword(token, password);
export const verifyEmail = (token: string) => AuthApiService.verifyEmail(token);
export const sendVerificationCode = (data: SendVerificationCodeRequest) => AuthApiService.sendVerificationCode(data);

export default AuthApiService;
