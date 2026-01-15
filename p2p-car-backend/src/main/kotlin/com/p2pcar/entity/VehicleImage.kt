package com.p2pcar.entity

import jakarta.persistence.*

@Entity
@Table(name = "vehicle_images", indexes = [
    Index(name = "idx_vehicle_images_vehicle", columnList = "vehicle_id")
])
data class VehicleImage(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(name = "vehicle_id", nullable = false)
    var vehicleId: Long,

    @Column(nullable = false, length = 500)
    var url: String,

    @Column(name = "is_primary")
    var isPrimary: Boolean = false,

    @Column(name = "display_order")
    var displayOrder: Int = 0,

    @Column(name = "created_at")
    var createdAt: java.time.LocalDateTime = java.time.LocalDateTime.now(),

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vehicle_id", insertable = false, updatable = false)
    var vehicle: Vehicle? = null
)
