'use client';

import { useState } from 'react';
import styles from './LoginForm.module.css';
import { LoginRequest } from '@/types/api';

interface LoginFormProps {
  onLogin?: (data: LoginRequest) => Promise<void>;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!email) {
      setError('请输入邮箱地址');
      return;
    }

    if (!validateEmail(email)) {
      setError('请输入有效的邮箱地址');
      return;
    }

    if (!password) {
      setError('请输入密码');
      return;
    }

    if (!validatePassword(password)) {
      setError('密码长度至少为6位');
      return;
    }

    setIsLoading(true);

    try {
      if (onLogin) {
        await onLogin({ email, password, rememberMe });
      } else {
        // Default API call
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.code === 200) {
          // Store token and user data
          const storage = rememberMe ? localStorage : sessionStorage;
          storage.setItem('auth_token', data.data.token);
          storage.setItem('auth_user', JSON.stringify(data.data.user));

          // Redirect to home page
          window.location.href = '/';
        } else {
          setError(data.message || '登录失败，请重试');
        }
      }
    } catch (err) {
      setError('登录失败，请检查网络连接');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: 'google' | 'facebook') => {
    // TODO: Implement social login
    console.log(`Social login with ${provider}`);
  };

  return (
    <div className={styles.container}>
      {/* Left Panel - Form */}
      <div className={styles.leftPanel}>
        {/* Back to Home Button */}
        <a href="/" className={styles.backButton}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 4L4 10M4 10L10 16M4 10H16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>返回首页</span>
        </a>

        {/* Logo */}
        <div className={styles.logo}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" fill="#155dfc" />
            <path
              d="M10 16h12M16 10v12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className={styles.logoText}>车享出行</span>
        </div>

        {/* Title */}
        <div className={styles.titleSection}>
          <h1 className={styles.title}>欢迎回来</h1>
          <p className={styles.subtitle}>登录您的账户以继续租车之旅</p>
        </div>

        {/* Login Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>邮箱地址</label>
            <div className={styles.inputWrapper}>
              <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3 4a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4z"
                  stroke="#6a7282"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M3 4l8 6 8-6"
                  stroke="#6a7282"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <input
                type="email"
                className={styles.input}
                placeholder="请输入邮箱地址"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>密码</label>
            <div className={styles.inputWrapper}>
              <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 10V7a5 5 0 0110 0v3M5 10h10a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2z"
                  stroke="#6a7282"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle cx="10" cy="14" r="1" fill="#6a7282" />
              </svg>
              <input
                type={showPassword ? 'text' : 'password'}
                className={styles.input}
                placeholder="请输入密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="button"
                className={styles.togglePassword}
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 4C6 4 2.5 6 1 9c1.5 3 5 5 9 5s7.5-2 9-5c-1.5-3-5-5-9-5z"
                      stroke="#6a7282"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <circle cx="10" cy="9" r="2.5" stroke="#6a7282" strokeWidth="1.5" fill="none" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 4C6 4 2.5 6 1 9c1.5 3 5 5 9 5s7.5-2 9-5c-1.5-3-5-5-9-5z"
                      stroke="#6a7282"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <circle cx="10" cy="9" r="2.5" stroke="#6a7282" strokeWidth="1.5" fill="none" />
                    <path
                      d="M2 18L18 2"
                      stroke="#6a7282"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className={styles.formActions}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={isLoading}
              />
              <span>记住我</span>
            </label>
            <a href="/forgot-password" className={styles.forgotLink}>
              忘记密码？
            </a>
          </div>

          {/* Error Message */}
          {error && <div className={styles.error}>{error}</div>}

          {/* Submit Button */}
          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? '登录中...' : '登录'}
          </button>
        </form>

        {/* Divider */}
        <div className={styles.divider}>
          <span>或者</span>
        </div>

        {/* Social Login */}
        <div className={styles.socialButtons}>
          <button
            type="button"
            className={styles.socialButton}
            onClick={() => handleSocialLogin('google')}
            disabled={isLoading}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M17.64 9.2c0-.637-.057-1.252-.164-1.84H10v3.481h4.192a3.582 3.582 0 011.56 2.352h-2.483v2.156h4.056c-.392 1.277-1.548 2.696-3.815 2.696-2.769 0-5.023-2.244-5.023-5.014 0-2.77 2.254-5.014 5.023-5.014 1.586 0 2.664.626 3.284 1.236l2.348-2.348C17.468 2.742 14.986 2 12.21 2c-4.425 0-8 3.576-8 8s3.575 8 8 8c4.615 0 7.667-3.247 7.667-7.822 0-.664-.072-1.31-.189-1.942l-1.048-.036z"
                fill="#4285F4"
              />
            </svg>
            <span>使用 Google 登录</span>
          </button>
          <button
            type="button"
            className={styles.socialButton}
            onClick={() => handleSocialLogin('facebook')}
            disabled={isLoading}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M18.896 10H16.5V18h-3.5v-8H10.5V7h2.5V5.062C13 2.742 14.188 2 16.375 2H18.5v3h-1.375c-.956 0-1.125.375-1.125 1.125V7h2.5l-.5 3h-.104z"
                fill="#1877F2"
              />
            </svg>
            <span>使用 Facebook 登录</span>
          </button>
        </div>

        {/* Register Link */}
        <div className={styles.registerLink}>
          还没有账户？<a href="/register">立即注册</a>
        </div>
      </div>

      {/* Right Panel - Hero */}
      <div className={styles.rightPanel}>
        <div className={styles.decorativeCircle1}></div>
        <div className={styles.decorativeCircle2}></div>
        <div className={styles.decorativeCircle3}></div>

        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>开启您的租车之旅</h2>
          <p className={styles.heroSubtitle}>
            加入我们，体验便捷、安全、实惠的P2P租车服务
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>海量优质车源</h3>
                <p className={styles.featureDescription}>
                  超过10,000辆优质车辆，满足各种出行需求
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>安全保障</h3>
                <p className={styles.featureDescription}>
                  全面的保险覆盖和24小时道路救援服务
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>灵活实惠</h3>
                <p className={styles.featureDescription}>
                  比传统租车优惠30%，灵活租期无压力
                </p>
              </div>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>50K+</div>
              <div className={styles.statLabel}>活跃用户</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>10K+</div>
              <div className={styles.statLabel}>优质车辆</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>4.8</div>
              <div className={styles.statLabel}>用户评分</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
