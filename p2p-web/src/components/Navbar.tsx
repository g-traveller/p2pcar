'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useAuthContext } from '@/contexts/AuthContext';
import { getGreeting } from '@/utils/greeting';

export default function Navbar() {
  const { user, logout } = useAuthContext();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutDialog(true);
  };

  const handleLogoutConfirm = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      setShowLogoutDialog(false);
      window.location.href = '/';
    } catch (error) {
      console.error('Logout failed:', error);
      setIsLoggingOut(false);
      setShowLogoutDialog(false);
    }
  };

  const handleLogoutCancel = () => {
    setShowLogoutDialog(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <svg className={styles.logoIcon} width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#1a73e8"/>
            <path d="M6 15L9 9H12L15 15H13L12.5 13.5H9.5L9 15H6ZM9.5 12H12L10.75 9.5L9.5 12Z" fill="white"/>
            <circle cx="17" cy="15" r="1.5" fill="white"/>
          </svg>
          <span className={styles.logoText}>车享出行</span>
        </Link>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          <Link href="/vehicles" className={styles.navLink}>
            浏览车辆
          </Link>
          <Link href="/how-it-works" className={styles.navLink}>
            如何运作
          </Link>
          <Link href="/become-host" className={styles.navLink}>
            成为主
          </Link>
        </div>

        {/* User Actions */}
        <div className={styles.userActions}>
          {user ? (
            /* Logged in state - show greeting and nickname */
            <div className={styles.userGreeting}>
              <span className={styles.greetingText}>
                {getGreeting()}，{user.name}
              </span>
              <div className={styles.userMenu}>
                <button className={styles.menuButton}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 14C6.68629 14 4 16.6863 4 20V21H16V20C16 17.2386 13.3137 14 10 14Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg className={styles.dropdownIcon} width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 4L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div className={styles.dropdownMenu}>
                  <Link href="/profile" className={styles.dropdownItem}>
                    个人中心
                  </Link>
                  <Link href="/my-trips" className={styles.dropdownItem}>
                    我的行程
                  </Link>
                  <Link href="/my-vehicles" className={styles.dropdownItem}>
                    我的车辆
                  </Link>
                  <div className={styles.dropdownDivider}></div>
                  <button onClick={handleLogoutClick} className={styles.dropdownItem}>
                    退出登录
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Not logged in state - show login/register buttons */
            <>
              <Link href="/login" className={styles.loginButton}>
                登录
              </Link>
              <Link href="/register" className={styles.registerButton}>
                注册
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuButton} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Logout Confirmation Dialog */}
      {showLogoutDialog && (
        <div className={styles.dialogOverlay} onClick={handleLogoutCancel}>
          <div className={styles.dialogContainer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.dialogHeader}>
              <h3 className={styles.dialogTitle}>确认退出登录</h3>
            </div>
            <div className={styles.dialogBody}>
              <p className={styles.dialogMessage}>
                您确定要退出登录吗？
              </p>
            </div>
            <div className={styles.dialogFooter}>
              <button
                onClick={handleLogoutCancel}
                disabled={isLoggingOut}
                className={styles.dialogButtonSecondary}
              >
                取消
              </button>
              <button
                onClick={handleLogoutConfirm}
                disabled={isLoggingOut}
                className={styles.dialogButtonPrimary}
              >
                {isLoggingOut ? '退出中...' : '确认退出'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
