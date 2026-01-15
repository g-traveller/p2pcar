'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './RegisterForm.module.css';

interface RegisterFormProps {
  onRegister?: (data: RegisterData) => Promise<void>;
}

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export default function RegisterForm({ onRegister }: RegisterFormProps) {
  const [formData, setFormData] = useState<RegisterData>({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegisterData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof RegisterData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = '请输入您的姓名';
    }

    if (!formData.email.trim()) {
      newErrors.email = '请输入您的邮箱';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '请输入您的手机号';
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入有效的手机号码';
    }

    if (!formData.password) {
      newErrors.password = '请输入您的密码';
    } else if (formData.password.length < 6) {
      newErrors.password = '密码至少需要6个字符';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = '请再次输入密码';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '两次输入的密码不一致';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = '请阅读并同意服务条款和隐私政策';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      if (onRegister) {
        await onRegister(formData);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof RegisterData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className={styles.page}>
      {/* Left Panel - Registration Form */}
      <div className={styles.leftPanel}>
        {/* Back Button */}
        <Link href="/" className={styles.backButton}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.backIcon}>
            <path d="M15 10H5M5 10L10 15M5 10L10 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          返回首页
        </Link>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>创建账户</h1>
          <p className={styles.subtitle}>注册成为会员，开启便捷租车体验</p>
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>姓名</label>
            <div className={styles.inputContainer}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.inputIcon}>
                <path d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="rgba(10, 10, 10, 0.5)"/>
                <path d="M10 12C6.68629 12 2 14.2386 2 17V18H18V17C18 14.2386 13.3137 12 10 12Z" fill="rgba(10, 10, 10, 0.5)"/>
              </svg>
              <input
                type="text"
                className={styles.input}
                placeholder="请输入您的姓名"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
          </div>

          {/* Email Field */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>邮箱地址</label>
            <div className={styles.inputContainer}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.inputIcon}>
                <path d="M2 5L10 11L18 5" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="1" y="3" width="18" height="14" rx="2" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5"/>
              </svg>
              <input
                type="email"
                className={styles.input}
                placeholder="请输入您的邮箱"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>

          {/* Phone Field */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>手机号码</label>
            <div className={styles.inputContainer}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.inputIcon}>
                <path d="M4 4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V6C2 4.89543 2.89543 4 4 4Z" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5"/>
                <path d="M2 7L10 12L18 7" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="tel"
                className={styles.input}
                placeholder="请输入您的手机号"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            </div>
            {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
          </div>

          {/* Password Field */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>密码</label>
            <div className={styles.inputContainer}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.inputIcon}>
                <rect x="3" y="8" width="14" height="10" rx="2" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5"/>
                <path d="M6 8V5C6 2.79086 7.79086 1 10 1C12.2091 1 14 2.79086 14 5V8" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                type={showPassword ? 'text' : 'password'}
                className={styles.input}
                placeholder="请输入您的密码"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
              />
              <button
                type="button"
                className={styles.togglePassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  {showPassword ? (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a10.07 10.07 0 01-5.94-2.06" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a10.07 10.07 0 01-5.94 2.06" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="2" y1="2" x2="22" y2="22" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5" strokeLinecap="round"/>
                    </>
                  ) : (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4-8-11-8z" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5"/>
                    </>
                  )}
                </svg>
              </button>
            </div>
            {errors.password && <span className={styles.errorText}>{errors.password}</span>}
          </div>

          {/* Confirm Password Field */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>确认密码</label>
            <div className={styles.inputContainer}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.inputIcon}>
                <rect x="3" y="8" width="14" height="10" rx="2" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5"/>
                <path d="M6 8V5C6 2.79086 7.79086 1 10 1C12.2091 1 14 2.79086 14 5V8" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className={styles.input}
                placeholder="请再次输入密码"
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
              />
              <button
                type="button"
                className={styles.togglePassword}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  {showConfirmPassword ? (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a10.07 10.07 0 01-5.94-2.06" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a10.07 10.07 0 01-5.94 2.06" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="2" y1="2" x2="22" y2="22" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5" strokeLinecap="round"/>
                    </>
                  ) : (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4-8-11-8z" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5"/>
                    </>
                  )}
                </svg>
              </button>
            </div>
            {errors.confirmPassword && <span className={styles.errorText}>{errors.confirmPassword}</span>}
          </div>

          {/* Terms Checkbox */}
          <div className={styles.termsGroup}>
            <input
              type="checkbox"
              id="terms"
              className={styles.checkbox}
              checked={formData.agreeToTerms}
              onChange={(e) => handleChange('agreeToTerms', e.target.checked)}
            />
            <label htmlFor="terms" className={styles.termsLabel}>
              我已阅读并同意
              <Link href="/terms" className={styles.link}>服务条款</Link>
              和
              <Link href="/privacy" className={styles.link}>隐私政策</Link>
            </label>
            {errors.agreeToTerms && <span className={styles.errorText}>{errors.agreeToTerms}</span>}
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? '注册中...' : '注册'}
          </button>

          {/* Divider */}
          <div className={styles.dividerContainer}>
            <div className={styles.dividerLine}></div>
            <span className={styles.dividerText}>或者</span>
            <div className={styles.dividerLine}></div>
          </div>

          {/* Social Login Buttons */}
          <button type="button" className={styles.socialButton}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M19.6 10.23c0-3.22-1.17-5.88-3.13-7.55l.02-.03C14.52 1.1 12.46 0 10 0 7.54 0 5.48 1.1 3.51 2.65l.02.03C1.57 4.35.4 7.01.4 10.23c0 3.22 1.17 5.88 3.13 7.55l-.02.03C5.48 19.65 7.54 20.8 10 20.8c2.46 0 4.52-1.15 6.49-2.72l-.02-.03c1.96-1.67 3.13-4.33 3.13-7.55v-.27z" fill="#EA4335"/>
              <path d="M10 20.8c2.46 0 4.52-1.15 6.49-2.72v-4.2H10v3.12h3.87c-.24 1.39-.81 2.49-1.72 3.23v2.52h2.77c1.6-1.48 2.53-3.64 2.53-6.15v-.8h-8.45z" fill="#4285F4"/>
              <path d="M10 20.8c2.46 0 4.52-1.15 6.49-2.72v-4.2H10v3.12h3.87c-.24 1.39-.81 2.49-1.72 3.23v2.52h2.77c1.6-1.48 2.53-3.64 2.53-6.15v-.8h-8.45z" fill="#34A853"/>
              <path d="M10 20.8v-4.2h6.49c1.6-1.48 2.53-3.64 2.53-6.15 0-2.51-.93-4.67-2.53-6.15H10v16.5z" fill="#FBBC05"/>
              <path d="M10 20.8v-4.2h6.49c1.6-1.48 2.53-3.64 2.53-6.15 0-2.51-.93-4.67-2.53-6.15H10v16.5z" fill="#EA4335"/>
            </svg>
            <span>使用 Google 继续</span>
          </button>

          <button type="button" className={styles.socialButton}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M20 10.038C20 4.493 15.522 0 10 0S0 4.493 0 10.038C0 15.07 3.705 19.195 8.438 20v-7.03H5.898v-2.932h2.54V7.45c0-2.51 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.47h-1.26c-.98 0-1.285.61-1.285 1.24v1.51h2.77l-.443 2.932h-2.327V20C15.295 19.195 20 15.07 20 10.038z" fill="#1877F2"/>
            </svg>
            <span>使用 Facebook 继续</span>
          </button>

          {/* Login Link */}
          <div className={styles.loginLink}>
            <span>已有账户？</span>
            <Link href="/login" className={styles.loginText}>立即登录</Link>
          </div>
        </form>
      </div>

      {/* Right Panel - Hero Content */}
      <div className={styles.rightPanel}>
        {/* Background Circles */}
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>

        {/* Content */}
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>加入我们的社区</h2>
          <p className={styles.heroDescription}>
            成为车享出行的一员，体验最便捷的P2P租车平台，或者出租您的爱车赚取收益。
          </p>

          {/* Features */}
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 10L12 14L21 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>海量优质车源</h3>
                <p className={styles.featureDesc}>覆盖全国主要城市，各类车型应有尽有</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 10L12 14L21 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>安全保障</h3>
                <p className={styles.featureDesc}>完善的保险体系，让每次出行都安心无忧</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 10L12 14L21 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>灵活实惠</h3>
                <p className={styles.featureDesc}>按需租车，价格透明，无隐藏费用</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>50K+</div>
              <div className={styles.statLabel}>注册用户</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>10K+</div>
              <div className={styles.statLabel}>可租车辆</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>4.8</div>
              <div className={styles.statLabel}>平均评分</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
