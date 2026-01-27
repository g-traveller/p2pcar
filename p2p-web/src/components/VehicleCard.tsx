'use client';

import { useRouter } from 'next/navigation';
import styles from './VehicleCard.module.css';
import { Vehicle } from '@/types/api';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const router = useRouter();

  const handleBookClick = () => {
    router.push(`/book/${vehicle.id}`);
  };

  const handleCardClick = () => {
    router.push(`/vehicle/${vehicle.id}`);
  };

  return (
    <div className={styles.card} onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className={styles.imageContainer}>
        <img src={vehicle.image} alt={vehicle.name} className={styles.image} />
        <button className={styles.favoriteButton} aria-label="收藏">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 3.5c-2.5-3-7-2.5-7 2 0 3.5 7 9.5 7 9.5s7-6 7-9.5c0-4.5-4.5-5-7-2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </button>
        <div className={styles.badges}>
          {vehicle.badges.map((badge) => (
            <span key={badge} className={styles.badge}>{badge}</span>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.name}>{vehicle.name}</h3>
          <div className={styles.rating}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6L8 2z" fill="#F59E0B"/>
            </svg>
            <span className={styles.ratingValue}>{vehicle.rating}</span>
            <span className={styles.reviewCount}>({vehicle.reviewCount})</span>
          </div>
        </div>
        <div className={styles.location}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2C5.24 2 3 4.24 3 7c0 2.4 5 9 5 9s5-6.6 5-9c0-2.76-2.24-5-5-5zm0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#6B7280"/>
          </svg>
          <span>{vehicle.location}</span>
        </div>
        <div className={styles.specs}>
          <div className={styles.spec}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 6h12v8H2zM3 3h2v3H3zm8 0h2v3h-2zM4 9h1v2H4zm3 0h1v2H7zm3 0h1v2h-1z" fill="#6B7280"/>
            </svg>
            <span>{vehicle.seats}座</span>
          </div>
          <div className={styles.spec}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="5" cy="10" r="2" fill="#6B7280"/>
              <circle cx="11" cy="10" r="2" fill="#6B7280"/>
              <path d="M2 6h12v4H2z" fill="#6B7280"/>
            </svg>
            <span>{vehicle.transmission}</span>
          </div>
          <div className={styles.spec}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2l1 4h4l-3 3 1 4-3-2-3 2 1-4-3-3h4z" fill="#6B7280"/>
            </svg>
            <span>{vehicle.fuel}</span>
          </div>
        </div>
        <div className={styles.host}>
          <div className={styles.hostAvatar}>{vehicle.hostInitial}</div>
          <div className={styles.hostInfo}>
            <div className={styles.hostName}>{vehicle.hostName}</div>
            <div className={styles.hostTrips}>{vehicle.trips}次行程</div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.price}>
            <div className={styles.priceValue}>¥{vehicle.price}</div>
            <div className={styles.priceUnit}>每天</div>
          </div>
          <button className={styles.bookButton} onClick={handleBookClick}>立即预订</button>
        </div>
      </div>
    </div>
  );
}
