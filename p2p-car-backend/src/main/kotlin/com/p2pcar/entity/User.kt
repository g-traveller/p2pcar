package com.p2pcar.entity

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "users", indexes = [
    Index(name = "idx_users_phone", columnList = "phone"),
    Index(name = "idx_users_email", columnList = "email"),
    Index(name = "idx_users_status", columnList = "status"),
    Index(name = "idx_users_name", columnList = "name", unique = true)
])
data class User(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(unique = true, length = 20)
    var phone: String? = null,

    @Column(unique = true, length = 100)
    var email: String? = null,

    @Column(name = "password_hash", nullable = false)
    var passwordHash: String,

    @Column(nullable = false, length = 50, unique = true)
    var name: String,

    @Column(length = 500)
    var avatar: String? = null,

    @Column(name = "id_card_verified")
    var idCardVerified: Boolean = false,

    @Column(name = "driver_license_verified")
    var driverLicenseVerified: Boolean = false,

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    var role: UserRole = UserRole.RENTER,

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    var status: UserStatus = UserStatus.ACTIVE,

    @Column(name = "created_at")
    var createdAt: LocalDateTime = LocalDateTime.now(),

    @Column(name = "updated_at")
    var updatedAt: LocalDateTime = LocalDateTime.now()
)

enum class UserRole {
    OWNER,
    RENTER,
    ADMIN
}

enum class UserStatus {
    ACTIVE,
    SUSPENDED,
    DELETED
}
