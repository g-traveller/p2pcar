'use client';

import { useRouter } from 'next/navigation';
import styles from './AboutPage.module.css';

// Timeline data
const TIMELINE_EVENTS = [
  {
    year: '2020年',
    title: '公司成立',
    description: '车享出行正式成立，在北京、上海两地启动试运营',
    align: 'left'
  },
  {
    year: '2021年',
    title: '快速扩张',
    description: '业务覆盖15个城市，注册用户突破10万，完成A轮融资',
    align: 'right'
  },
  {
    year: '2022年',
    title: '技术升级',
    description: '推出智能匹配系统和信用体系，用户满意度达95%',
    align: 'left'
  },
  {
    year: '2023年',
    title: '行业领先',
    description: '成为国内TOP3的P2P租车平台，服务用户超50万',
    align: 'right'
  },
  {
    year: '2024年',
    title: '生态建设',
    description: '打造完整的汽车共享生态，推出车主学院和保险定制服务',
    align: 'left'
  },
  {
    year: '2026年',
    title: '持续创新',
    description: '引入AI智能调度，探索新能源车辆共享新模式',
    align: 'right'
  }
];

// Core values
const CORE_VALUES = [
  {
    icon: '🛡️',
    title: '安全第一',
    description: '建立完善的安全保障体系，为每一次出行保驾护航',
    color: '#dbeafe'
  },
  {
    icon: '❤️',
    title: '用户至上',
    description: '倾听用户声音，持续优化服务体验',
    color: '#dcfce7'
  },
  {
    icon: '💡',
    title: '创新驱动',
    description: '拥抱新技术，不断创新商业模式和服务方式',
    color: '#f3e8ff'
  },
  {
    icon: '🤝',
    title: '共赢共享',
    description: '与车主、租客、合作伙伴共同成长，创造价值',
    color: '#fef9c2'
  }
];

// Honors
const HONORS = [
  {
    icon: '🏆',
    title: '2023年度最佳共享出行平台',
    issuer: '中国互联网协会颁发'
  },
  {
    icon: '🏅',
    title: '用户信赖品牌奖',
    issuer: '消费者协会认证'
  },
  {
    icon: '🌱',
    title: '绿色出行贡献奖',
    issuer: '环保部门表彰'
  }
];

export default function AboutPage() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>关于车享出行</h1>
        <p className={styles.heroSubtitle}>
          我们致力于打造中国领先的P2P汽车共享平台，让每一辆闲置车辆都能创造价值，
          让每一次出行都更加便捷和经济。
        </p>
      </div>

      {/* Navigation Bar */}
      <div className={styles.navBar}>
        <button className={styles.backButton} onClick={handleBackToHome}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2.5 10h15M7 5l-5 5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>返回首页</span>
        </button>
      </div>

      {/* Content Container */}
      <div className={styles.container}>
        {/* Our Story */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>我们的故事</h2>
          <div className={styles.storyContent}>
            <p className={styles.storyParagraph}>
              车享出行成立于2020年，源于创始团队对共享经济的深刻理解和对绿色出行的执着追求。
              我们观察到城市中大量私家车处于闲置状态，而另一方面，人们对灵活、经济的短期用车需求日益增长。
            </p>
            <p className={styles.storyParagraph}>
              通过创新的P2P模式，我们搭建起车主和租客之间的信任桥梁。
              经过三年的发展，车享出行已经服务超过50万用户，覆盖全国30多个主要城市，平台注册车辆超过10万辆。
            </p>
            <p className={styles.storyParagraph}>
              我们不仅仅是一个租车平台，更是一个充满温度的社区。每一次成功的交易背后，
              都是车主与租客之间的信任和理解。我们相信，通过共享，让资源得到更高效的利用，让城市出行更加美好。
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className={styles.missionVisionGrid}>
          <div className={`${styles.missionCard} ${styles.mission}`}>
            <div className={styles.missionIcon}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2"/>
                <path d="M16 8v8l4 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className={styles.missionTitle}>我们的使命</h3>
            <p className={styles.missionDescription}>
              通过科技创新和共享经济模式，让每个人都能享受到便捷、经济、环保的出行服务，
              同时帮助车主盘活闲置资产，创造额外收益。
            </p>
          </div>

          <div className={`${styles.missionCard} ${styles.vision}`}>
            <div className={styles.visionIcon}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.visionTitle}>我们的愿景</h3>
            <p className={styles.visionDescription}>
              成为中国最值得信赖的汽车共享平台，推动共享出行成为城市生活的常态，
              为建设绿色、智慧、可持续的城市交通体系贡献力量。
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>核心价值观</h2>
          <div className={styles.valuesGrid}>
            {CORE_VALUES.map((value, index) => (
              <div key={index} className={styles.valueItem}>
                <div
                  className={styles.valueIcon}
                  style={{ backgroundColor: value.color }}
                >
                  {value.icon}
                </div>
                <h4 className={styles.valueTitle}>{value.title}</h4>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>发展历程</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            {TIMELINE_EVENTS.map((event, index) => (
              <div
                key={index}
                className={`${styles.timelineItem} ${styles[event.align]}`}
              >
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{event.year}</div>
                  <h4 className={styles.timelineTitle}>{event.title}</h4>
                  <p className={styles.timelineDescription}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Statistics */}
        <div className={styles.statsSection}>
          <h2 className={styles.statsTitle}>平台数据</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>50万+</div>
              <div className={styles.statLabel}>注册用户</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>10万+</div>
              <div className={styles.statLabel}>平台车辆</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>30+</div>
              <div className={styles.statLabel}>覆盖城市</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>95%</div>
              <div className={styles.statLabel}>用户满意度</div>
            </div>
          </div>
        </div>

        {/* Honors & Awards */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>荣誉资质</h2>
          <div className={styles.honorsGrid}>
            {HONORS.map((honor, index) => (
              <div key={index} className={styles.honorItem}>
                <div className={styles.honorIcon}>{honor.icon}</div>
                <div className={styles.honorContent}>
                  <h4 className={styles.honorTitle}>{honor.title}</h4>
                  <p className={styles.honorIssuer}>{honor.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
