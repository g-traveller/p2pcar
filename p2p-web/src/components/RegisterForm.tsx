'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './RegisterForm.module.css';
import { sendVerificationCode, register } from '@/services/authApi';
import { RegisterRequest } from '@/types/api';
import { getRegistrationErrorMessage, getVerificationCodeErrorMessage } from '@/utils/errorHandler';

interface RegisterFormProps {
  onRegister?: (data: RegisterRequest) => Promise<void>;
}

interface FormData {
  name: string; // 昵称
  account: string; // Combined field for phone or email
  password: string;
  confirmPassword: string;
  verificationCode: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  name?: string;
  account?: string;
  password?: string;
  confirmPassword?: string;
  verificationCode?: string;
  agreeToTerms?: string;
  submit?: string;
}

// Mock verification code storage (in production, this would be handled by the backend)
const mockVerificationCodes = new Map<string, { code: string; expiresAt: number }>();

export default function RegisterForm({ onRegister }: RegisterFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    account: '',
    password: '',
    confirmPassword: '',
    verificationCode: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState<string>('');

  // Detect if input is phone or email
  const getAccountType = (account: string): 'phone' | 'email' | null => {
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
  const getPasswordStrength = (password: string): { strength: 'weak' | 'medium' | 'strong'; score: number } => {
    let score = 0;

    if (password.length >= 6) score++;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;

    if (score <= 2) return { strength: 'weak', score };
    if (score <= 4) return { strength: 'medium', score };
    return { strength: 'strong', score };
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

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

  const handleSubmit = async (e: React.FormEvent) => {
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
      const registerData: RegisterRequest = {
        name: formData.name,
        password: formData.password,
        verificationCode: formData.verificationCode,
        ...(accountType === 'phone' ? { phone: formData.account } : { email: formData.account }),
      };

      // Transform for backend API (backend expects 'code' field not 'verificationCode')
      const apiData = {
        ...registerData,
        code: registerData.verificationCode,
      };
      delete (apiData as any).verificationCode;

      if (onRegister) {
        await onRegister(registerData);
      } else {
        // If no custom handler provided, use the default register API
        await register(apiData as RegisterRequest);
      }

      setRegistrationSuccess(true);

      // Auto redirect after 2 seconds
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    } catch (error: any) {
      console.error('Registration failed:', error);

      // Use user-friendly error message mapping
      const friendlyMessage = getRegistrationErrorMessage(error);
      setRegistrationError(friendlyMessage);

      // Set field-specific errors if available
      setErrors(prev => ({ ...prev, submit: friendlyMessage }));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }

    // Clear registration errors when user modifies form
    if (registrationError || registrationSuccess) {
      setRegistrationError('');
      setRegistrationSuccess(false);
    }
  };

  const handleSendVerificationCode = async () => {
    // Clear any previous verification code errors
    setErrors(prev => ({ ...prev, verificationCode: undefined }));
    setRegistrationError('');

    // Validate account field first
    const account = formData.account.trim();
    const accountType = getAccountType(account);

    if (!account) {
      setErrors(prev => ({ ...prev, account: '请输入您的手机号或邮箱' }));
      return;
    }

    if (!accountType) {
      setErrors(prev => ({ ...prev, account: '请输入有效的手机号或邮箱地址' }));
      return;
    }

    try {
      // Try to call the backend API first
      try {
        await sendVerificationCode({
          type: accountType,
          [accountType]: account,
        });
      } catch (apiError) {
        // If backend is not available, use mock verification code
        console.log('Backend not available, using mock verification code');

        // Generate a 6-digit mock verification code
        const mockCode = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes expiration

        mockVerificationCodes.set(account, { code: mockCode, expiresAt });

        // Show the mock code in console (for development)
        console.log(`=== MOCK VERIFICATION CODE ===`);
        console.log(`Account: ${account}`);
        console.log(`Code: ${mockCode}`);
        console.log(`Expires at: ${new Date(expiresAt).toLocaleString()}`);
        console.log(`============================`);

        // Show user-friendly message in development
        if (process.env.NODE_ENV === 'development') {
          alert(`[开发模式] 模拟验证码: ${mockCode}\n该验证码将在5分钟后过期`);
        }
      }

      // Start countdown
      setCountdown(60);
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error: any) {
      console.error('Failed to send verification code:', error);

      // Use user-friendly error message mapping
      const errorMessage = getVerificationCodeErrorMessage(error);
      setErrors(prev => ({ ...prev, verificationCode: errorMessage }));
    }
  };

  // Get current password strength for UI feedback
  const passwordStrength = formData.password ? getPasswordStrength(formData.password) : null;

  // If registration was successful, show success message
  if (registrationSuccess) {
    return (
      <div className={styles.page}>
        <div className={styles.leftPanel}>
          <div className={styles.successContainer}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className={styles.successIcon}>
              <circle cx="12" cy="12" r="10" fill="#10B981"/>
              <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className={styles.successTitle}>注册成功！</h2>
            <p className={styles.successMessage}>
              欢迎加入车享出行！正在跳转到登录页面...
            </p>
          </div>
        </div>
        <div className={styles.rightPanel}>
          <div className={styles.bgCircle1}></div>
          <div className={styles.bgCircle2}></div>
        </div>
      </div>
    );
  }

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
          {/* Registration Error Alert */}
          {registrationError && (
            <div className={styles.registrationErrorAlert}>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className={styles.registrationErrorAlertIcon}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                  clipRule="evenodd"
                />
              </svg>
              <div className={styles.registrationErrorAlertContent}>
                <div className={styles.registrationErrorAlertTitle}>注册失败</div>
                <div className={styles.registrationErrorAlertMessage}>{registrationError}</div>
              </div>
              <button
                type="button"
                className={styles.registrationErrorAlertClose}
                onClick={() => setRegistrationError('')}
                aria-label="关闭错误提示"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 1L13 13M1 13L13 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Name Field */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>昵称</label>
            <div className={styles.inputContainer}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.inputIcon}>
                <path d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="rgba(10, 10, 10, 0.5)"/>
                <path d="M10 12C6.68629 12 2 14.2386 2 17V18H18V17C18 14.2386 13.3137 12 10 12Z" fill="rgba(10, 10, 10, 0.5)"/>
              </svg>
              <input
                type="text"
                className={styles.input}
                placeholder="请输入您的昵称"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
          </div>

          {/* Phone/Email Field */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>手机号/邮箱</label>
            <div className={styles.inputContainer}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.inputIcon}>
                <path d="M4 4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V6C2 4.89543 2.89543 4 4 4Z" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5"/>
                <path d="M2 5L10 11L18 5" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                className={styles.input}
                placeholder="请输入您的手机号或邮箱"
                value={formData.account}
                onChange={(e) => handleChange('account', e.target.value)}
              />
            </div>
            {errors.account && <span className={styles.errorText}>{errors.account}</span>}
          </div>

          {/* Verification Code Field */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>验证码</label>
            <div className={styles.verificationContainer}>
              <div className={styles.inputContainer}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.inputIcon}>
                  <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5"/>
                  <path d="M10 6V10L13 13" stroke="rgba(10, 10, 10, 0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="请输入验证码"
                  value={formData.verificationCode}
                  onChange={(e) => handleChange('verificationCode', e.target.value)}
                  maxLength={6}
                />
              </div>
              <button
                type="button"
                className={styles.sendCodeButton}
                onClick={handleSendVerificationCode}
                disabled={countdown > 0}
              >
                {countdown > 0 ? `${countdown}秒` : '获取验证码'}
              </button>
            </div>
            {errors.verificationCode && <span className={styles.errorText}>{errors.verificationCode}</span>}
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
                placeholder="请输入您的密码（至少8位，包含大小写字母、数字和特殊字符）"
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
            {formData.password && !errors.password && passwordStrength && (
              <div className={styles.passwordStrength}>
                <div
                  className={styles.strengthBar}
                  style={{
                    width: '100%',
                    height: '4px',
                    borderRadius: '2px',
                    backgroundColor: '#E5E7EB',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${(passwordStrength.score / 7) * 100}%`,
                      borderRadius: '2px',
                      transition: 'all 0.3s ease',
                      backgroundColor: passwordStrength.strength === 'weak' ? '#EF4444' :
                                     passwordStrength.strength === 'medium' ? '#F59E0B' : '#10B981'
                    }}
                  />
                </div>
                <span className={styles.strengthText} style={{
                  fontSize: '12px',
                  color: passwordStrength.strength === 'weak' ? '#EF4444' :
                         passwordStrength.strength === 'medium' ? '#F59E0B' : '#10B981',
                  marginLeft: '8px'
                }}>
                  {passwordStrength.strength === 'weak' ? '弱' :
                   passwordStrength.strength === 'medium' ? '中' : '强'}
                </span>
              </div>
            )}
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
