'use client';

import { useState, useCallback, useEffect } from 'react';
import { AuthUser, LoginRequest, RegisterRequest } from '@/types/api';
import AuthApiService from '@/services/authApi';

interface UseAuthReturn {
  user: AuthUser | null;
  isLoading: boolean;
  error: string | null;
  login: (data: LoginRequest) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
      const userData = localStorage.getItem('auth_user') || sessionStorage.getItem('auth_user');

      if (token && userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (err) {
          console.error('Failed to parse user data:', err);
        }
      }
    };

    checkAuth();
  }, []);

  const login = useCallback(async (data: LoginRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await AuthApiService.login(data);

      if (response.code === 200 && response.data) {
        const { token, user } = response.data;

        // Store token and user data
        if (data.rememberMe) {
          localStorage.setItem('auth_token', token);
          localStorage.setItem('auth_user', JSON.stringify(user));
        } else {
          sessionStorage.setItem('auth_token', token);
          sessionStorage.setItem('auth_user', JSON.stringify(user));
        }

        setUser(user);
      } else {
        setError(response.message || '登录失败');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '登录失败，请重试');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(async (data: RegisterRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await AuthApiService.register(data);

      if (response.code === 200 && response.data) {
        const { token, user } = response.data;

        // Store token and user data
        localStorage.setItem('auth_token', token);
        localStorage.setItem('auth_user', JSON.stringify(user));

        setUser(user);
      } else {
        setError(response.message || '注册失败');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '注册失败，请重试');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');

    try {
      if (token) {
        await AuthApiService.logout(token);
      }
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      // Clear storage regardless of API call success
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_user');
      sessionStorage.removeItem('auth_token');
      sessionStorage.removeItem('auth_user');
      setUser(null);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    user,
    isLoading,
    error,
    login,
    register,
    logout,
    clearError,
  };
}

export default useAuth;
