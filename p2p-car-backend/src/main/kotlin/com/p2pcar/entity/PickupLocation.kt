package com.p2pcar.entity

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "pickup_locations")
data class PickupLocation(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(nullable = false, length = 100)
    var name: String,

    @Column(nullable = false, length = 200)
    var address: String,

    @Column(length = 100)
    var district: String? = null,

    @Column(nullable = false, length = 50)
    var city: String,

    var latitude: Double? = null,

    var longitude: Double? = null,

    @Column(nullable = false)
    var isActive: Boolean = true,

    @Column(name = "display_order")
    var displayOrder: Int = 0,

    @Column(name = "created_at")
    var createdAt: LocalDateTime = LocalDateTime.now(),

    @Column(name = "updated_at")
    var updatedAt: LocalDateTime = LocalDateTime.now()
)
