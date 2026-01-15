import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
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
          <Link href="/login" className={styles.loginButton}>
            登录
          </Link>
          <Link href="/register" className={styles.registerButton}>
            注册
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuButton} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}
