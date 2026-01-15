import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Footer Columns */}
        <div className={styles.columns}>
          {/* About Us */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>关于我们</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about" className={styles.link}>
                  公司介绍
                </Link>
              </li>
              <li>
                <Link href="/careers" className={styles.link}>
                  加入我们
                </Link>
              </li>
              <li>
                <Link href="/press" className={styles.link}>
                  媒体报道
                </Link>
              </li>
              <li>
                <Link href="/blog" className={styles.link}>
                  博客
                </Link>
              </li>
            </ul>
          </div>

          {/* Rental Services */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>租车服务</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/vehicles" className={styles.link}>
                  浏览车辆
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className={styles.link}>
                  如何预订
                </Link>
              </li>
              <li>
                <Link href="/insurance" className={styles.link}>
                  保险保障
                </Link>
              </li>
              <li>
                <Link href="/support" className={styles.link}>
                  客户支持
                </Link>
              </li>
            </ul>
          </div>

          {/* Host Services */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>车主服务</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/become-host" className={styles.link}>
                  成为主
                </Link>
              </li>
              <li>
                <Link href="/host-guide" className={styles.link}>
                  车主指南
                </Link>
              </li>
              <li>
                <Link href="/earnings" className={styles.link}>
                  收益计算
                </Link>
              </li>
              <li>
                <Link href="/host-protection" className={styles.link}>
                  车主保障
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>法律条款</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/terms" className={styles.link}>
                  服务条款
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={styles.link}>
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/cookie" className={styles.link}>
                  Cookie 政策
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className={styles.link}>
                  免责声明
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © 2024 车享出行. 保留所有权利.
          </div>
        </div>
      </div>
    </footer>
  );
}
