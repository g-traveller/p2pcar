package com.p2pcar.entity

import jakarta.persistence.*
import java.math.BigDecimal
import java.time.LocalDateTime

@Entity
@Table(name = "vehicles", indexes = [
    Index(name = "idx_vehicles_owner", columnList = "owner_id"),
    Index(name = "idx_vehicles_status", columnList = "status"),
    Index(name = "idx_vehicles_location", columnList = "location"),
    Index(name = "idx_vehicles_price", columnList = "price_per_day"),
    Index(name = "idx_vehicles_rating", columnList = "rating")
])
data class Vehicle(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(name = "owner_id", nullable = false)
    var ownerId: Long,

    @Column(nullable = false, length = 50)
    var brand: String,

    @Column(nullable = false, length = 100)
    var model: String,

    @Column
    var year: Int? = null,

    @Column(length = 30)
    var color: String? = null,

    @Column(name = "license_plate", unique = true, length = 20)
    var licensePlate: String? = null,

    @Column(nullable = false)
    var seats: Int,

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    var transmission: TransmissionType,

    @Enumerated(EnumType.STRING)
    @Column(name = "fuel_type", nullable = false, length = 20)
    var fuelType: FuelType,

    @Column(name = "price_per_day", nullable = false, precision = 10, scale = 2)
    var pricePerDay: BigDecimal,

    @Column(nullable = false, length = 200)
    var location: String,

    @Column(precision = 10, scale = 8)
    var latitude: BigDecimal? = null,

    @Column(precision = 11, scale = 8)
    var longitude: BigDecimal? = null,

    @Column(columnDefinition = "TEXT")
    var description: String? = null,

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    var status: VehicleStatus = VehicleStatus.AVAILABLE,

    @Column(name = "is_super_host")
    var isSuperHost: Boolean = false,

    @Column(name = "instant_book")
    var instantBook: Boolean = false,

    @Column(name = "total_trips")
    var totalTrips: Int = 0,

    @Column(precision = 3, scale = 2)
    var rating: BigDecimal = BigDecimal.ZERO,

    @Column(name = "review_count")
    var reviewCount: Int = 0,

    @Column(name = "created_at")
    var createdAt: LocalDateTime = LocalDateTime.now(),

    @Column(name = "updated_at")
    var updatedAt: LocalDateTime = LocalDateTime.now(),

    @OneToMany(mappedBy = "vehicle", cascade = [CascadeType.ALL], orphanRemoval = true, fetch = FetchType.LAZY)
    var images: MutableList<VehicleImage> = mutableListOf()
)

enum class TransmissionType {
    AUTOMATIC,
    MANUAL
}

enum class FuelType {
    PETROL,
    ELECTRIC,
    HYBRID,
    DIESEL
}

enum class VehicleStatus {
    AVAILABLE,
    RENTED,
    MAINTENANCE,
    DELETED
}
