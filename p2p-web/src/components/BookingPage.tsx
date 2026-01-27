'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './BookingPage.module.css';

interface VehicleData {
  id: number;
  name: string;
  image: string;
  images: string[];
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  seats: number;
  transmission: string;
  fuel: string;
  hostName: string;
}

interface InsuranceOption {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

const INSURANCE_OPTIONS: InsuranceOption[] = [
  {
    id: 'basic',
    name: '基础保险',
    description: '满足基本保障需求',
    price: 50,
    features: ['第三者责任险', '车损险（2000元免赔）']
  },
  {
    id: 'standard',
    name: '安心保险',
    description: '提供更全面的保障',
    price: 120,
    features: ['第三者责任险', '车损险（500元免赔）', '盗抢险', '玻璃单独破碎险']
  },
  {
    id: 'premium',
    name: '尊享保险',
    description: '顶级保障，无忧出行',
    price: 200,
    features: ['第三者责任险', '车损险（0元免赔）', '盗抢险', '玻璃单独破碎险', '车上人员险', '道路救援'],
    recommended: true
  }
];

interface AddOnOption {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
}

const ADD_ON_OPTIONS: AddOnOption[] = [
  {
    id: 'full-tank',
    name: '满油还车服务',
    description: '无需自己加油，还车时由我们为您加满油箱',
    price: 200,
    icon: '⛽'
  }
];

export default function BookingPage({ vehicleId }: { vehicleId: number }) {
  const router = useRouter();
  const [vehicle, setVehicle] = useState<VehicleData | null>(null);
  const [loading, setLoading] = useState(true);
  const locationDropdownRef = useRef<HTMLDivElement>(null);

  // Form state - declare all states before effects
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedInsurance, setSelectedInsurance] = useState('premium');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [pickupLocation, setPickupLocation] = useState<string>('');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  // Calculate pricing
  const [days, setDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  // Available pickup locations (will be updated after vehicle loads)
  const PICKUP_LOCATIONS = vehicle?.location
    ? [vehicle.location, '北京市海淀区', '北京市东城区', '北京市西城区']
    : ['北京市朝阳区', '北京市海淀区', '北京市东城区', '北京市西城区'];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (locationDropdownRef.current && !locationDropdownRef.current.contains(event.target as Node)) {
        setShowLocationDropdown(false);
      }
    };

    if (showLocationDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showLocationDropdown]);

  useEffect(() => {
    // Load vehicle data
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
              image: v.image || v.images?.[0] || '',
              images: v.images || [],
              location: v.location,
              price: Number(v.price),
              rating: Number(v.rating),
              reviewCount: v.reviewCount,
              seats: v.seats,
              transmission: v.transmission,
              fuel: v.fuel,
              hostName: v.host?.name || '车主'
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

  // Set default dates
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date(tomorrow);
    dayAfter.setDate(dayAfter.getDate() + 6);

    setStartDate(tomorrow.toISOString().split('T')[0]);
    setEndDate(dayAfter.toISOString().split('T')[0]);
  }, []);

  // Calculate total price
  useEffect(() => {
    if (!vehicle) return;

    // Calculate days
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = end.getTime() - start.getTime();
      const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
      setDays(diffDays);
    }

    // Calculate insurance cost
    const insurance = INSURANCE_OPTIONS.find(opt => opt.id === selectedInsurance);
    const insuranceCost = (insurance?.price || 0) * days;

    // Calculate add-ons cost
    const addOnsCost = selectedAddOns.reduce((sum, addOnId) => {
      const addOn = ADD_ON_OPTIONS.find(opt => opt.id === addOnId);
      return sum + (addOn?.price || 0);
    }, 0);

    // Calculate total
    const rentalCost = vehicle.price * days;
    const total = rentalCost + insuranceCost + addOnsCost;
    setTotalPrice(total);
  }, [vehicle, startDate, endDate, selectedInsurance, selectedAddOns, days]);

  const handleInsuranceChange = (insuranceId: string) => {
    setSelectedInsurance(insuranceId);
  };

  const handleInsuranceClick = (e: React.MouseEvent, insuranceId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedInsurance(insuranceId);
  };

  const handleLocationSelect = (location: string) => {
    setPickupLocation(location);
    setShowLocationDropdown(false);
  };

  const handleAddOnToggle = (addOnId: string) => {
    setSelectedAddOns(prev => {
      if (prev.includes(addOnId)) {
        return prev.filter(id => id !== addOnId);
      } else {
        return [...prev, addOnId];
      }
    });
  };

  const handleConfirmBooking = () => {
    // Navigate to payment page
    router.push(`/payment/${vehicleId}`);
  };

  const handleGoBack = () => {
    router.push('/');
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

  const rentalCost = vehicle.price * days;
  const insurance = INSURANCE_OPTIONS.find(opt => opt.id === selectedInsurance);
  const insuranceCost = (insurance?.price || 0) * days;

  return (
    <div className={styles.page}>
      {/* Navigation Bar */}
      <div className={styles.navBar}>
        <button className={styles.backButton} onClick={handleGoBack}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2.5 10h15M7 5l-5 5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>返回车辆列表</span>
        </button>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>预订车辆</h1>

        <div className={styles.content}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Vehicle Info */}
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>车辆信息</h2>
              <div className={styles.vehicleInfo}>
                <img src={vehicle.image} alt={vehicle.name} className={styles.vehicleImage} />
                <div className={styles.vehicleDetails}>
                  <h3 className={styles.vehicleName}>{vehicle.name}</h3>
                  <div className={styles.vehicleMeta}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4-4z" fill="#6B7280"/>
                    </svg>
                    <span>{vehicle.location}</span>
                  </div>
                  <div className={styles.vehiclePrice}>
                    ¥{vehicle.price}/天
                  </div>
                </div>
              </div>
            </div>

            {/* Rental Dates */}
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>租赁时间</h2>
              <div className={styles.dateFields}>
                <div className={styles.field}>
                  <label className={styles.label}>取车日期 *</label>
                  <div className={styles.inputContainer}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M6 3a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1V4a1 1 0 10-2 0v1H7V4a1 1 0 00-1-1zm0 3h8v2H6V6zm0 4h8v6H6v-6z" fill="#99A1AF"/>
                    </svg>
                    <input
                      type="date"
                      className={styles.dateInput}
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>还车日期 *</label>
                  <div className={styles.inputContainer}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M6 3a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1V4a1 1 0 10-2 0v1H7V4a1 1 0 00-1-1zm0 3h8v2H6V6zm0 4h8v6H6v-6z" fill="#99A1AF"/>
                    </svg>
                    <input
                      type="date"
                      className={styles.dateInput}
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      min={startDate || new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pickup Location */}
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>取车地点</h2>
              <label className={styles.label}>选择取车地点 *</label>
              <div ref={locationDropdownRef} style={{ position: 'relative' }}>
                <button
                  className={styles.locationButton}
                  type="button"
                  onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                >
                  <span>{pickupLocation || '请选择取车地点'}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transition: 'transform 0.2s', transform: showLocationDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {showLocationDropdown && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    marginTop: '4px',
                    background: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    zIndex: 100,
                    maxHeight: '200px',
                    overflowY: 'auto'
                  }}>
                    {PICKUP_LOCATIONS.map((location) => (
                      <div
                        key={location}
                        onClick={() => handleLocationSelect(location)}
                        style={{
                          padding: '10px 16px',
                          cursor: 'pointer',
                          borderBottom: '1px solid #f3f4f6',
                          fontSize: '14px',
                          color: pickupLocation === location ? '#1E88E5' : '#364153',
                          background: pickupLocation === location ? '#f0f7ff' : 'white',
                        }}
                        onMouseEnter={(e) => {
                          if (pickupLocation !== location) {
                            e.currentTarget.style.background = '#f9fafb';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (pickupLocation !== location) {
                            e.currentTarget.style.background = 'white';
                          }
                        }}
                      >
                        {location}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Insurance Options */}
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>选择保险</h2>
              <div className={styles.insuranceOptions}>
                {INSURANCE_OPTIONS.map((insurance) => (
                  <div
                    key={insurance.id}
                    className={`${styles.insuranceOption} ${selectedInsurance === insurance.id ? styles.selected : ''} ${insurance.recommended ? styles.recommended : ''}`}
                    onClick={(e) => handleInsuranceClick(e, insurance.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className={styles.insuranceContent}>
                      <input
                        type="radio"
                        name="insurance"
                        checked={selectedInsurance === insurance.id}
                        onChange={() => {}}
                        onClick={(e) => e.stopPropagation()}
                        className={styles.radioInput}
                      />
                      <div className={styles.insuranceDetails}>
                        <div className={styles.insuranceHeader}>
                          <span className={styles.insuranceName}>{insurance.name}</span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="8" fill="#F3F4F6"/>
                            <circle cx="10" cy="10" r="5" fill={selectedInsurance === insurance.id ? "#1E88E5" : "none"} stroke={selectedInsurance === insurance.id ? "#1E88E5" : "#6B7282"} strokeWidth="1.5"/>
                          </svg>
                        </div>
                        <p className={styles.insuranceDescription}>{insurance.description}</p>
                        <ul className={styles.insuranceFeatures}>
                          {insurance.features.map((feature, index) => (
                            <li key={index}>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="7" cy="7" r="5" stroke="#10B981" strokeWidth="1.5"/>
                                <path d="M6.5 3.5L8 5l3-3" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className={styles.insurancePrice}>
                      <p className={styles.price}>¥{insurance.price}</p>
                      <p className={styles.priceUnit}>每天</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add-on Options */}
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>其他选项</h2>
              {ADD_ON_OPTIONS.map((addOn) => (
                <div
                  key={addOn.id}
                  className={`${styles.addOnOption} ${selectedAddOns.includes(addOn.id) ? styles.addOnSelected : ''}`}
                  onClick={() => handleAddOnToggle(addOn.id)}
                >
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxInner}>
                      {selectedAddOns.includes(addOn.id) && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7l4 4 6-6" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className={styles.addOnDetails}>
                    <div className={styles.addOnName}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="8" fill="#F3F4F6"/>
                        <path d="M10 7v6M10 3v.01" stroke="#6B7282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {addOn.name}
                    </div>
                    <p className={styles.addOnDescription}>{addOn.description}</p>
                  </div>
                  <p className={styles.addOnPrice}>¥{addOn.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Price Summary */}
          <div className={styles.rightColumn}>
            <div className={styles.priceCard}>
              <h2 className={styles.cardTitle}>价格明细</h2>
              <div className={styles.priceDetails}>
                <div className={styles.priceRow}>
                  <span className={styles.priceLabel}>车辆租金</span>
                  <span className={styles.priceValue}>¥{vehicle.price} × {days}天</span>
                </div>
                <div className={styles.priceRow}>
                  <span></span>
                  <span className={styles.priceValue}>¥{rentalCost}</span>
                </div>
                <div className={styles.priceRow}>
                  <span className={styles.priceLabel}>保险费用</span>
                  <span className={styles.priceValue}>¥{insurance?.price || 0} × {days}天</span>
                </div>
                <div className={styles.priceRow}>
                  <span></span>
                  <span className={styles.priceValue}>¥{insuranceCost}</span>
                </div>
              </div>

              <div className={styles.totalSection}>
                <div className={styles.totalRow}>
                  <span className={styles.totalLabel}>总计</span>
                  <span className={styles.totalValue}>¥{totalPrice}</span>
                </div>
              </div>

              <button className={styles.confirmButton} onClick={handleConfirmBooking}>
                确认预订
              </button>

              <div className={styles.tips}>
                <div className={styles.tipIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="#1E88E5" strokeWidth="1.5"/>
                    <path d="M10 6v.01M10 10h.01" stroke="#1E88E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.tipContent}>
                  <p className={styles.tipTitle}>温馨提示：</p>
                  <p className={styles.tipText}>预订时需支付30%定金，取车时支付剩余款项</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
