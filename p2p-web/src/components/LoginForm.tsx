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
            onClick={() => handleSocialLogin('wechat')}
            disabled={isLoading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356"/>
              <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0"/>
            </svg>
            <span>使用微信登录</span>
          </button>
          <button
            type="button"
            className={styles.socialButton}
            onClick={() => handleSocialLogin('alipay')}
            disabled={isLoading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2.541 0H13.5a2.55 2.55 0 0 1 2.54 2.563v8.297c-.006 0-.531-.046-2.978-.813-.412-.14-.916-.327-1.479-.536q-.456-.17-.957-.353a13 13 0 0 0 1.325-3.373H8.822V4.649h3.831v-.634h-3.83V2.121H7.26c-.274 0-.274.273-.274.273v1.621H3.11v.634h3.875v1.136h-3.2v.634H9.99c-.227.789-.532 1.53-.894 2.202-2.013-.67-4.161-1.212-5.51-.878-.864.214-1.42.597-1.746.998-1.499 1.84-.424 4.633 2.741 4.633 1.872 0 3.675-1.053 5.072-2.787 2.08 1.008 6.37 2.738 6.387 2.745v.105A2.55 2.55 0 0 1 13.5 16H2.541A2.55 2.55 0 0 1 0 13.437V2.563A2.55 2.55 0 0 1 2.541 0"/>
              <path d="M2.309 9.27c-1.22 1.073-.49 3.034 1.978 3.034 1.434 0 2.868-.925 3.994-2.406-1.602-.789-2.959-1.353-4.425-1.207-.397.04-1.14.217-1.547.58Z"/>
            </svg>
            <span>使用支付宝登录</span>
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
