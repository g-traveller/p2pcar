'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './VehicleDetailPage.module.css';

interface VehicleData {
  id: number;
  name: string;
  brand: string;
  model: string;
  price: number;
  rating: number;
  reviewCount: number;
  location: string;
  images: string[];
  instantBook: boolean;
  badges: string[];
  seats: number;
  transmission: string;
  fuel: string;
  trips: number;
  host: {
    name: string;
    initial: string;
    rating: number;
    isSuperHost: boolean;
    joinDate: string;
    trips: number;
  };
  description: string;
  features: string[];
}

interface Review {
  id: string;
  userName: string;
  userInitial: string;
  date: string;
  duration: string;
  rating: number;
  comment: string;
  helpfulCount: number;
}

const VEHICLE_FEATURES = [
  '蓝牙音响', '倒车影像', '导航系统', '定速巡航', '座椅加热', '天窗',
  'USB充电口', '行车记录仪', '儿童座椅接口'
];

const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    userName: '王小明',
    userInitial: '王',
    date: '2026/01/15',
    duration: '租用3天',
    rating: 5,
    comment: '车况非常好，车主人也很nice，提供了很多当地的游玩建议。强烈推荐！',
    helpfulCount: 12
  },
  {
    id: '2',
    userName: '李晓红',
    userInitial: '李',
    date: '2026/01/10',
    duration: '租用5天',
    rating: 4.8,
    comment: '整体体验很棒，车很干净，交接流程也很顺利。唯一小建议是希望能提供更多的车载充电器。',
    helpfulCount: 8
  },
  {
    id: '3',
    userName: '张伟',
    userInitial: '张',
    date: '2026/01/05',
    duration: '租用2天',
    rating: 5,
    comment: '完美的租车体验！车辆性能优秀，油耗也很经济。车主响应很快，沟通顺畅。',
    helpfulCount: 15
  },
  {
    id: '4',
    userName: '陈静',
    userInitial: '陈',
    date: '2025/12/28',
    duration: '租用4天',
    rating: 4.5,
    comment: '车子很新，开起来很舒适。取车和还车都很方便，车主提前到达等候。',
    helpfulCount: 6
  },
  {
    id: '5',
    userName: '刘强',
    userInitial: '刘',
    date: '2025/12/20',
    duration: '租用7天',
    rating: 4.9,
    comment: '非常满意的一次租车，车主专业负责，车辆保养得很好。下次还会选择！',
    helpfulCount: 10
  }
];

export default function VehicleDetailPage({ vehicleId }: { vehicleId: number }) {
  const router = useRouter();
  const [vehicle, setVehicle] = useState<VehicleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'reviews' | 'rating'>('reviews');

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/vehicles/${vehicleId}`);
        if (response.ok) {
          const data = await response.json();
          if (data.code === 200 && data.data) {
            const v = data.data;
            setVehicle({
              id: v.id,
              name: v.name,
              brand: v.brand,
              model: v.model,
              price: Number(v.price),
              rating: Number(v.rating),
              reviewCount: v.reviewCount,
              location: v.location,
              images: v.images || [v.image],
              instantBook: v.instantBook || false,
              badges: [],
              seats: v.seats,
              transmission: v.transmission,
              fuel: v.fuel,
              trips: v.trips || 0,
              host: {
                name: v.host?.name || '李先生',
                initial: (v.host?.name || '李先生')[0],
                rating: v.host?.rating || 4.9,
                isSuperHost: true,
                joinDate: '2年',
                trips: v.host?.trips || 256
              },
              description: '这是一辆保养良好的豪华轿车，适合商务出行、家庭旅游或自驾游。车辆配置齐全，驾驶舒适，燃油经济性好。车主非常注重车辆维护，定期进行专业保养。车内整洁干净，配备儿童安全座椅接口、蓝牙音响、导航系统等便利设施。',
              features: VEHICLE_FEATURES
            });
          }
        }
      } catch (error) {
        console.error('Failed to fetch vehicle:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [vehicleId]);

  const handleGoBack = () => {
    router.push('/');
  };

  const handleImageNav = (direction: 'prev' | 'next') => {
    if (!vehicle?.images.length) return;
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => prev === 0 ? vehicle.images.length - 1 : prev - 1);
    } else {
      setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
    }
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.loading}>加载中...</div>
        </div>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.error}>车辆信息加载失败</div>
        </div>
      </div>
    );
  }

  const currentImage = vehicle.images[currentImageIndex] || vehicle.images[0];

  return (
    <div className={styles.page}>
      {/* Navigation Bar */}
      <div className={styles.navBar}>
        <button className={styles.backButton} onClick={handleGoBack}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2.5 10h15M7 5l-5 5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>返回列表</span>
        </button>
      </div>

      <div className={styles.container}>
        {/* Left Column - Main Content */}
        <div className={styles.leftColumn}>
          {/* Image Gallery */}
          <div className={styles.galleryCard}>
            <div className={styles.mainImageContainer}>
              <img src={currentImage} alt={vehicle.name} className={styles.mainImage} />

              {/* Navigation buttons */}
              <button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={() => handleImageNav('prev')}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L3 8l7 5M3 8h10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={() => handleImageNav('next')}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l7 5-7 5M13 8H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Favorite button */}
              <button className={`${styles.navButton} ${styles.favoriteButton}`}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2.5c-2.5-3-7-2.5-7 2 0 3.5 7 9.5 7 9.5s7-6 7-9.5c0-4.5-4.5-5-7-2z" stroke="white" strokeWidth="1.5" fill="none"/>
                </svg>
              </button>

              {/* Share button */}
              <button className={`${styles.navButton} ${styles.shareButton}`}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12v4M4 8V4M12 12v4M12 8V4M8 4v12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Image counter */}
              <div className={styles.imageCounter}>
                {currentImageIndex + 1} / {vehicle.images.length}
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className={styles.thumbnailStrip}>
              {vehicle.images.map((image, index) => (
                <button
                  key={index}
                  className={`${styles.thumbnail} ${index === currentImageIndex ? styles.activeThumbnail : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img src={image} alt={`${vehicle.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle Info Card */}
          <div className={styles.infoCard}>
            <h1 className={styles.vehicleTitle}>{vehicle.name}</h1>

            {/* Badges */}
            <div className={styles.badges}>
              <span className={styles.badge}>超级车主</span>
              {vehicle.instantBook && <span className={styles.badge}>即时预订</span>}
            </div>

            {/* Rating & Location */}
            <div className={styles.ratingSection}>
              <div className={styles.rating}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2l2.5 6 6.5.5-1 4.5-3.5 2.5 1 1 4.5-1 4.5-6.5L10 2z" fill="#F59E0B"/>
                </svg>
                <span className={styles.ratingValue}>{vehicle.rating}</span>
                <span className={styles.reviewCount}>({vehicle.reviewCount}条评价)</span>
              </div>
              <div className={styles.location}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2.5c-2.5-3-7-2.5-7 2 0 3.5 7 9.5 7 9.5s7-6 7-9.5c0-4.5-4.5-5-7-2z" stroke="#4A5565" strokeWidth="1.5" fill="none"/>
                </svg>
                <span>{vehicle.location}</span>
              </div>
            </div>

            {/* Specs */}
            <div className={styles.specsGrid}>
              <div className={styles.specItem}>
                <div className={styles.specIcon}>💺</div>
                <div className={styles.specLabel}>座位数</div>
                <div className={styles.specValue}>{vehicle.seats}座</div>
              </div>
              <div className={styles.specItem}>
                <div className={styles.specIcon}>⚙️</div>
                <div className={styles.specLabel}>变速箱</div>
                <div className={styles.specValue}>{vehicle.transmission}</div>
              </div>
              <div className={styles.specItem}>
                <div className={styles.specIcon}>⛽</div>
                <div className={styles.specLabel}>燃料类型</div>
                <div className={styles.specValue}>{vehicle.fuel}</div>
              </div>
              <div className={styles.specItem}>
                <div className={styles.specIcon}>🚗</div>
                <div className={styles.specLabel}>出租次数</div>
                <div className={styles.specValue}>{vehicle.trips}次</div>
              </div>
            </div>

            {/* Host Info */}
            <div className={styles.hostSection}>
              <h3 className={styles.sectionTitle}>车主信息</h3>
              <div className={styles.hostInfo}>
                <div className={styles.hostAvatar}>{vehicle.host.initial}</div>
                <div className={styles.hostDetails}>
                  <div className={styles.hostName}>{vehicle.host.name}</div>
                  <div className={styles.hostStats}>
                    <span>{vehicle.host.trips}次出租</span>
                    <span>•</span>
                    <span>加入{vehicle.host.joinDate}</span>
                    <span>•</span>
                    <div className={styles.hostRating}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2l2.5 6 6.5.5-1 4.5-3.5 2.5 1 1 4.5-1 4.5-6.5L8 2z" fill="#F59E0B"/>
                      </svg>
                      {vehicle.host.rating}
                    </div>
                  </div>
                </div>
                {vehicle.host.isSuperHost && (
                  <div className={styles.superHostBadge}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 2L3 7v11l7 3 7-3V7l-7-5z" fill="#F59E0B"/>
                    </svg>
                    <span>超级车主</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>车辆描述</h3>
            <p className={styles.description}>{vehicle.description}</p>
          </div>

          {/* Vehicle Features */}
          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>车辆配置</h3>
            <div className={styles.featuresGrid}>
              {vehicle.features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className={styles.reviewsCard}>
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${activeTab === 'reviews' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                用户评价
              </button>
              <button
                className={`${styles.tab} ${activeTab === 'rating' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('rating')}
              >
                评分详情
              </button>
            </div>

            {activeTab === 'reviews' && (
              <div className={styles.reviewsList}>
                {MOCK_REVIEWS.map((review) => (
                  <div key={review.id} className={styles.reviewItem}>
                    <div className={styles.reviewHeader}>
                      <div className={styles.reviewer}>
                        <div className={styles.reviewerAvatar}>{review.userInitial}</div>
                        <div className={styles.reviewerInfo}>
                          <div className={styles.reviewerName}>{review.userName}</div>
                          <div className={styles.reviewMeta}>
                            {review.date} · {review.duration}
                          </div>
                        </div>
                      </div>
                      {review.rating >= 4.8 && (
                        <div className={styles.reviewRatingBadge}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 2l2.5 6 6.5.5-1 4.5-3.5 2.5 1 1 4.5-1 4.5-6.5L8 2z" fill="#F59E0B"/>
                          </svg>
                          <span>{review.rating}</span>
                        </div>
                      )}
                    </div>
                    <p className={styles.reviewComment}>{review.comment}</p>
                    <button className={styles.helpfulButton}>
                      👍 有帮助 ({review.helpfulCount})
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'rating' && (
              <div className={styles.ratingDetails}>
                <p className={styles.ratingPlaceholder}>评分详情暂未开放</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar - Sticky */}
        <div className={styles.sidebar}>
          <div className={styles.bookingCard}>
            {/* Price */}
            <div className={styles.priceSection}>
              <span className={styles.price}>¥{vehicle.price}</span>
              <span className={styles.priceUnit}>/天</span>
            </div>

            {/* Book Button */}
            <button
              className={styles.bookButton}
              onClick={() => router.push(`/book/${vehicleId}`)}
            >
              立即预订
            </button>

            {/* Features */}
            <div className={styles.bookingFeatures}>
              <div className={styles.feature}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L3 7v11l7 3 7-3V7l-7-5z" fill="#4A5565"/>
                </svg>
                <span>免费取消（提前24小时）</span>
              </div>
              <div className={styles.feature}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L3 7v11l7 3 7-3V7l-7-5z" fill="#4A5565"/>
                </svg>
                <span>即时确认</span>
              </div>
              <div className={styles.feature}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L3 7v11l7 3 7-3V7l-7-5z" fill="#4A5565"/>
                </svg>
                <span>全面保险保障</span>
              </div>
              <div className={styles.feature}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L3 7v11l7 3 7-3V7l-7-5z" fill="#4A5565"/>
                </svg>
                <span>24小时客服支持</span>
              </div>
            </div>

            {/* Booking Info */}
            <div className={styles.bookingInfo}>
              <p className={styles.bookingInfoTitle}>预订前您需要知道：</p>
              <ul className={styles.bookingInfoList}>
                <li>需提供有效驾驶证（驾龄1年以上）</li>
                <li>需支付30%定金</li>
                <li>取车时需验证身份证件</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
