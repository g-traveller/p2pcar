'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './PaymentPage.module.css';

// Types
interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface OrderData {
  vehicle: {
    id: number;
    name: string;
    image: string;
  };
  pickupDate: string;
  returnDate: string;
  duration: number;
  pickupLocation: string;
  rentalFee: number;
  insuranceFee: number;
  totalAmount: number;
  depositAmount: number;
  balanceAmount: number;
}

// Payment methods
const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'wechat',
    name: '微信支付',
    description: '使用微信扫码支付',
    icon: '💬'
  },
  {
    id: 'alipay',
    name: '支付宝',
    description: '使用支付宝扫码支付',
    icon: '💳'
  },
  {
    id: 'bankcard',
    name: '银行卡支付',
    description: '支持储蓄卡和信用卡',
    icon: '🏦'
  }
];

export default function PaymentPage({ bookingId }: { bookingId: number }) {
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState('wechat');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch order data (mock for now)
    const mockOrder: OrderData = {
      vehicle: {
        id: 5,
        name: '奔驰 S级豪华轿车',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80'
      },
      pickupDate: '2026/01/27',
      returnDate: '2026/01/29',
      duration: 2,
      pickupLocation: '上海市浦东新区 - 陆家嘴',
      rentalFee: 1776,
      insuranceFee: 400,
      totalAmount: 2176,
      depositAmount: 653,
      balanceAmount: 1523
    };
    setOrderData(mockOrder);
    setLoading(false);
  }, [bookingId]);

  const handlePaymentMethodChange = (methodId: string) => {
    setSelectedPayment(methodId);
  };

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreedToTerms(e.target.checked);
  };

  const handleBackToBooking = () => {
    router.back();
  };

  const handlePayment = () => {
    if (!agreedToTerms) {
      alert('请先阅读并同意服务条款、租赁协议和取消政策');
      return;
    }
    // Process payment logic here
    alert('支付功能开发中...');
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

  if (!orderData) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.error}>订单信息加载失败</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Navigation Bar */}
      <div className={styles.navBar}>
        <button className={styles.backButton} onClick={handleBackToBooking}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2.5 10h15M7 5l-5 5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>返回预订</span>
        </button>
      </div>

      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          {/* Page Title */}
          <h1 className={styles.pageTitle}>确认支付</h1>

          {/* Payment Method Selection */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>选择支付方式</h2>
            <div className={styles.paymentMethods}>
              {PAYMENT_METHODS.map((method) => (
                <div
                  key={method.id}
                  className={`${styles.paymentMethod} ${selectedPayment === method.id ? styles.selected : ''}`}
                  onClick={() => handlePaymentMethodChange(method.id)}
                >
                  <div className={styles.radioIndicator}>
                    {selectedPayment === method.id && <div className={styles.radioDot} />}
                  </div>
                  <div className={styles.paymentIcon}>{method.icon}</div>
                  <div className={styles.paymentInfo}>
                    <div className={styles.paymentName}>{method.name}</div>
                    <div className={styles.paymentDesc}>{method.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QR Code Section */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              {selectedPayment === 'wechat' && '微信扫码支付'}
              {selectedPayment === 'alipay' && '支付宝扫码支付'}
              {selectedPayment === 'bankcard' && '银行卡支付'}
            </h2>
            <div className={styles.qrCodeSection}>
              {(selectedPayment === 'wechat' || selectedPayment === 'alipay') ? (
                <>
                  <div className={styles.qrCodePlaceholder}>
                    <div className={styles.qrCodeIcon}>📱</div>
                    <div className={styles.qrCodeText}>二维码将在支付时显示</div>
                  </div>
                  <div className={styles.qrCodeInstruction}>
                    请使用{selectedPayment === 'wechat' ? '微信' : '支付宝'}扫描二维码完成支付
                  </div>
                </>
              ) : (
                <div className={styles.bankCardPlaceholder}>
                  <p>银行卡支付功能开发中...</p>
                </div>
              )}
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className={styles.card}>
            <div className={styles.termsSection}>
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={handleTermsChange}
                className={styles.checkbox}
              />
              <label htmlFor="terms" className={styles.termsLabel}>
                我已阅读并同意
                <a href="#" className={styles.link}>服务条款</a>
                、
                <a href="#" className={styles.link}>租赁协议</a>
                和
                <a href="#" className={styles.link}>取消政策</a>
              </label>
            </div>
          </div>

          {/* Security Notice */}
          <div className={styles.securityNotice}>
            <div className={styles.securityIcon}>🔒</div>
            <div className={styles.securityContent}>
              <h3 className={styles.securityTitle}>安全保障</h3>
              <p className={styles.securityText}>
                您的支付信息经过加密保护，我们不会存储您的完整银行卡信息。
                所有交易均通过安全支付网关处理。
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Order Summary */}
        <div className={styles.sidebar}>
          <div className={styles.orderSummary}>
            <h2 className={styles.cardTitle}>订单摘要</h2>

            {/* Vehicle Info */}
            <div className={styles.vehicleSection}>
              <div className={styles.vehicleImage}>
                <img src={orderData.vehicle.image} alt={orderData.vehicle.name} />
              </div>
              <h3 className={styles.vehicleName}>{orderData.vehicle.name}</h3>
            </div>

            {/* Order Details */}
            <div className={styles.orderDetails}>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>取车日期</span>
                <span className={styles.detailValue}>{orderData.pickupDate}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>还车日期</span>
                <span className={styles.detailValue}>{orderData.returnDate}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>租期</span>
                <span className={styles.detailValue}>{orderData.duration}天</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>取车地点</span>
                <span className={styles.detailValue}>{orderData.pickupLocation}</span>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className={styles.priceBreakdown}>
              <div className={styles.priceRow}>
                <span className={styles.priceLabel}>车辆租金</span>
                <span className={styles.priceValue}>¥{orderData.rentalFee}</span>
              </div>
              <div className={styles.priceRow}>
                <span className={styles.priceLabel}>保险费用</span>
                <span className={styles.priceValue}>¥{orderData.insuranceFee}</span>
              </div>
            </div>

            {/* Total & Deposit */}
            <div className={styles.totalSection}>
              <div className={styles.totalRow}>
                <span className={styles.totalLabel}>订单总额</span>
                <span className={styles.totalValue}>¥{orderData.totalAmount}</span>
              </div>

              <div className={styles.depositBox}>
                <div className={styles.depositRow}>
                  <span className={styles.depositLabel}>预付定金 (30%)</span>
                  <span className={styles.depositValue}>¥{orderData.depositAmount}</span>
                </div>
                <div className={styles.depositRow}>
                  <span className={styles.depositLabel}>取车时支付</span>
                  <span className={styles.depositValue}>¥{orderData.balanceAmount}</span>
                </div>
              </div>
            </div>

            {/* Pay Button */}
            <button
              className={`${styles.payButton} ${agreedToTerms ? styles.payButtonActive : styles.payButtonDisabled}`}
              onClick={handlePayment}
              disabled={!agreedToTerms}
            >
              支付定金 ¥{orderData.depositAmount}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
