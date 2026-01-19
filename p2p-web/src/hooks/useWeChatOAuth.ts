'use client';

import { useState, useCallback } from 'react';
import { getWeChatAuthorizeUrl, weChatOAuthCallback } from '@/services/authApi';
import { OAuthUrlResponse, WeChatOAuthRequest, AuthUser } from '@/types/api';

interface UseWeChatOAuthReturn {
  isLoading: boolean;
  error: string | null;
  initiateOAuth: () => Promise<void>;
  handleCallback: (code: string, state: string) => Promise<AuthUser>;
  clearError: () => void;
}

export function useWeChatOAuth(): UseWeChatOAuthReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initiateOAuth = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await getWeChatAuthorizeUrl();

      if (response.code === 200 && response.data) {
        // Redirect to WeChat authorization page
        window.location.href = response.data.authorizationUrl;
      } else {
        setError(response.message || '获取微信授权链接失败');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '获取微信授权链接失败');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleCallback = useCallback(async (code: string, state: string): Promise<AuthUser> => {
    setIsLoading(true);
    setError(null);

    try {
      const request: WeChatOAuthRequest = { code, state };
      const response = await weChatOAuthCallback(request);

      if (response.code === 200 && response.data) {
        const { token, user } = response.data;

        // Store token and user data
        localStorage.setItem('auth_token', token);
        localStorage.setItem('auth_user', JSON.stringify(user));

        return user;
      } else {
        setError(response.message || '微信登录失败');
        throw new Error(response.message || '微信登录失败');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '微信登录失败');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    isLoading,
    error,
    initiateOAuth,
    handleCallback,
    clearError,
  };
}

export default useWeChatOAuth;
