package com.p2pcar.entity

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "reviews", indexes = [
    Index(name = "idx_reviews_order", columnList = "order_id", unique = true),
    Index(name = "idx_reviews_target", columnList = "target_id")
])
data class Review(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(name = "order_id", nullable = false, unique = true)
    var orderId: Long,

    @Column(name = "reviewer_id", nullable = false)
    var reviewerId: Long,

    @Column(name = "target_id", nullable = false)
    var targetId: Long,

    @Column(nullable = false)
    var rating: Int,

    @Column(columnDefinition = "TEXT")
    var comment: String? = null,

    @Column(name = "vehicle_rating")
    var vehicleRating: Int? = null,

    @Column(name = "owner_rating")
    var ownerRating: Int? = null,

    @Column(name = "renter_rating")
    var renterRating: Int? = null,

    @Column(name = "created_at")
    var createdAt: LocalDateTime = LocalDateTime.now(),

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", insertable = false, updatable = false)
    var order: Order? = null,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "reviewer_id", insertable = false, updatable = false)
    var reviewer: User? = null,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "target_id", insertable = false, updatable = false)
    var target: User? = null
)
