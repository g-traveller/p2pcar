package com.p2pcar.entity

import jakarta.persistence.*
import java.math.BigDecimal
import java.time.LocalDateTime

@Entity
@Table(name = "orders", indexes = [
    Index(name = "idx_orders_renter", columnList = "renter_id"),
    Index(name = "idx_orders_owner", columnList = "owner_id"),
    Index(name = "idx_orders_vehicle", columnList = "vehicle_id"),
    Index(name = "idx_orders_status", columnList = "status"),
    Index(name = "idx_orders_dates", columnList = "start_date, end_date")
])
data class Order(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(name = "order_no", nullable = false, unique = true, length = 32)
    var orderNo: String,

    @Column(name = "renter_id", nullable = false)
    var renterId: Long,

    @Column(name = "vehicle_id", nullable = false)
    var vehicleId: Long,

    @Column(name = "owner_id", nullable = false)
    var ownerId: Long,

    @Column(name = "start_date", nullable = false)
    var startDate: LocalDateTime,

    @Column(name = "end_date", nullable = false)
    var endDate: LocalDateTime,

    @Column(nullable = false)
    var days: Int,

    @Column(name = "total_price", nullable = false, precision = 10, scale = 2)
    var totalPrice: BigDecimal,

    @Column(precision = 10, scale = 2)
    var deposit: BigDecimal = BigDecimal.ZERO,

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    var status: OrderStatus = OrderStatus.PENDING,

    @Column(name = "cancel_reason", length = 500)
    var cancelReason: String? = null,

    @Column(name = "checked_in_at")
    var checkedInAt: LocalDateTime? = null,

    @Column(name = "checked_out_at")
    var checkedOutAt: LocalDateTime? = null,

    @Column(name = "created_at")
    var createdAt: LocalDateTime = LocalDateTime.now(),

    @Column(name = "updated_at")
    var updatedAt: LocalDateTime = LocalDateTime.now(),

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "renter_id", insertable = false, updatable = false)
    var renter: User? = null,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id", insertable = false, updatable = false)
    var owner: User? = null,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vehicle_id", insertable = false, updatable = false)
    var vehicle: Vehicle? = null
)

enum class OrderStatus {
    PENDING,
    CONFIRMED,
    IN_PROGRESS,
    COMPLETED,
    CANCELLED,
    REFUNDED
}
