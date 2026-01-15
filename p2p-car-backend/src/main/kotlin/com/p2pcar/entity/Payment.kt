package com.p2pcar.entity

import jakarta.persistence.*
import java.math.BigDecimal
import java.time.LocalDateTime

@Entity
@Table(name = "payments", indexes = [
    Index(name = "idx_payments_order", columnList = "order_id"),
    Index(name = "idx_payments_status", columnList = "status")
])
data class Payment(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(name = "order_id", nullable = false)
    var orderId: Long,

    @Column(name = "payment_no", nullable = false, unique = true, length = 32)
    var paymentNo: String,

    @Column(nullable = false, precision = 10, scale = 2)
    var amount: BigDecimal,

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    var type: PaymentType,

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    var method: PaymentMethod? = null,

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    var status: PaymentStatus = PaymentStatus.PENDING,

    @Column(name = "transaction_id", length = 100)
    var transactionId: String? = null,

    @Column(name = "paid_at")
    var paidAt: LocalDateTime? = null,

    @Column(name = "created_at")
    var createdAt: LocalDateTime = LocalDateTime.now(),

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", insertable = false, updatable = false)
    var order: Order? = null
)

enum class PaymentType {
    RENT,
    DEPOSIT,
    REFUND
}

enum class PaymentMethod {
    ALIPAY,
    WECHAT,
    CARD,
    CASH
}

enum class PaymentStatus {
    PENDING,
    SUCCESS,
    FAILED,
    REFUNDED
}
