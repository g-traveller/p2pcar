'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ContactPage.module.css';

// Contact info cards data
const CONTACT_INFO = [
  {
    id: 'hotline',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 1.68 5 2.51 6.5-1.5 1.5-.5 3-2 4.5-2.5-.75-1.41-2.09-2.51-3.5H7.5c-1.41 0-2.77.84-3.3 1.41-.59 2.5-.96 5.5 2.51 6.5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v11a2 2 0 0 0 2 2zm-6 0h.01M9 12h.01" stroke="#155dfc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconBg: '#dbeafe',
    title: '客服热线',
    description: '我们的客服团队随时为您服务',
    value: '400-888-6688',
    extra: '工作日 9:00 - 21:00',
    valueColor: '#155dfc'
  },
  {
    id: 'email',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 4-4v4c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8m8 4v4" stroke="#00a63e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconBg: '#dcfce7',
    title: '电子邮箱',
    description: '发送邮件给我们',
    values: ['support@carshare.com', 'business@carshare.com'],
    valueColor: '#155dfc'
  },
  {
    id: 'address',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 10a3 3 0 1 0 6 0 3 3 0 0 0-6 0" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconBg: '#f3e8ff',
    title: '公司地址',
    description: '欢迎来访（请提前预约）',
    address: ['北京市朝阳区建国路88号', 'SOHO现代城A座15层', '邮编：100022']
  },
  {
    id: 'social',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10 5 10 5v13l-2-1v-8l-8 5-5-5V7z" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconBg: '#ffedd4',
    title: '社交媒体',
    description: '关注我们获取最新动态',
    socials: [
      { name: '官方微信公众号', bg: '#00c950', label: '微' },
      { name: '官方微博', bg: '#fb2c36', label: '微' },
      { name: '官方抖音', bg: '#2b7fff', label: '抖' }
    ]
  }
];

// Office locations
const OFFICES = [
  {
    city: '北京总部',
    borderColor: '#155dfc',
    address: '北京市朝阳区建国路88号SOHO现代城A座15层',
    phone: '010-8888-6688'
  },
  {
    city: '上海分公司',
    borderColor: '#00a63e',
    address: '上海市浦东新区陆家嘴环路1000号恒生银行大厦28层',
    phone: '021-6888-6688'
  },
  {
    city: '深圳分公司',
    borderColor: '#9810fa',
    address: '深圳市南山区科技园科苑路15号科兴科学园B座18层',
    phone: '0755-8888-6688'
  }
];

// FAQ data
const FAQS = [
  {
    question: '如何联系车主？',
    answer: '预订成功后，您可以在订单详情页面找到车主的联系方式，包括电话和站内消息功能。'
  },
  {
    question: '客服工作时间是什么时候？',
    answer: '我们的客服团队工作时间为工作日9:00-21:00。非工作时间您可以通过在线留言或发送邮件，我们会在工作时间内第一时间回复。'
  },
  {
    question: '如何投诉或提供反馈？',
    answer: '您可以通过客服热线、电子邮箱或在线留言的方式向我们反馈问题。我们非常重视每一位用户的意见，并会认真处理每一条反馈。'
  }
];

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    topic: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    alert('留言已提交！我们会尽快回复您。');
    setFormData({ name: '', phone: '', email: '', topic: '', message: '' });
  };

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>联系我们</h1>
        <p className={styles.heroSubtitle}>
          我们随时准备为您提供帮助。无论是咨询、建议还是合作，都欢迎与我们取得联系。
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
        {/* Left Column - Contact Info */}
        <div className={styles.contactSidebar}>
          {CONTACT_INFO.map((info) => (
            <div key={info.id} className={styles.contactCard}>
              <div
                className={styles.contactIcon}
                style={{ backgroundColor: info.iconBg }}
              >
                {info.icon}
              </div>
              <h3 className={styles.contactTitle}>{info.title}</h3>
              <p className={styles.contactDescription}>{info.description}</p>

              {info.value && (
                <p className={styles.contactValue} style={{ color: info.valueColor }}>
                  {info.value}
                </p>
              )}

              {info.values && (
                <div className={styles.contactValues}>
                  {info.values.map((val, idx) => (
                    <p key={idx} className={styles.contactValue} style={{ color: info.valueColor }}>
                      {val}
                    </p>
                  ))}
                </div>
              )}

              {info.address && (
                <div className={styles.contactAddress}>
                  {info.address.map((line, idx) => (
                    <p key={idx} className={styles.addressLine}>{line}</p>
                  ))}
                </div>
              )}

              {info.extra && (
                <div className={styles.contactExtra}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 4v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>{info.extra}</span>
                </div>
              )}

              {info.socials && (
                <div className={styles.socialLinks}>
                  {info.socials.map((social, idx) => (
                    <div key={idx} className={styles.socialLink}>
                      <div
                        className={styles.socialIcon}
                        style={{ backgroundColor: social.bg }}
                      >
                        {social.label}
                      </div>
                      <span className={styles.socialName}>{social.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column - Contact Form */}
        <div className={styles.contactFormCard}>
          <h2 className={styles.sectionTitle}>在线留言</h2>
          <p className={styles.formDescription}>请填写以下表单，我们会在24小时内回复您的咨询</p>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel}>您的姓名 *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="请输入您的姓名"
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>联系电话 *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="请输入您的手机号"
                  className={styles.formInput}
                  required
                />
              </div>
            </div>

            <div className={styles.formField}>
              <label className={styles.formLabel}>电子邮箱 *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formField}>
              <label className={styles.formLabel}>咨询主题 *</label>
              <div className={styles.formSelect}>
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  className={styles.formSelectInput}
                  required
                >
                  <option value="">请选择咨询主题</option>
                  <option value="booking">预订咨询</option>
                  <option value="payment">支付问题</option>
                  <option value="cooperation">商务合作</option>
                  <option value="complaint">投诉建议</option>
                  <option value="other">其他问题</option>
                </select>
                <svg className={styles.selectArrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className={styles.formField}>
              <label className={styles.formLabel}>留言内容 *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="请详细描述您的问题或建议..."
                className={styles.formTextarea}
                rows={4}
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2l2 8h6l-9 6 1-7-9 6 9-2z" fill="white"/>
              </svg>
              提交留言
            </button>
          </form>
        </div>
      </div>

      {/* Office Locations */}
      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>全国办公地点</h2>
        <div className={styles.officesGrid}>
          {OFFICES.map((office, index) => (
            <div
              key={index}
              className={styles.officeItem}
              style={{ borderLeftColor: office.borderColor }}
            >
              <h4 className={styles.officeCity}>{office.city}</h4>
              <p className={styles.officeAddress}>{office.address}</p>
              <p className={styles.officePhone}>电话: {office.phone}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqCard}>
        <h2 className={styles.sectionTitle}>常见问题</h2>
        <div className={styles.faqList}>
          {FAQS.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h4 className={styles.faqQuestion}>{faq.question}</h4>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
