package com.p2pcar.repository

import com.p2pcar.entity.Order
import com.p2pcar.entity.Vehicle
import com.p2pcar.entity.VehicleStatus
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import java.math.BigDecimal
import java.time.LocalDateTime
import java.util.*

@Repository
interface VehicleRepository : JpaRepository<Vehicle, Long> {

    fun findByOwnerId(ownerId: Long): List<Vehicle>

    fun findByIdAndStatusNot(id: Long, status: VehicleStatus): Optional<Vehicle>

    fun findByStatus(status: VehicleStatus, pageable: Pageable): Page<Vehicle>

    @Query("""
        SELECT v FROM Vehicle v
        WHERE v.status = :status
        AND (:minPrice IS NULL OR v.pricePerDay >= :minPrice)
        AND (:maxPrice IS NULL OR v.pricePerDay <= :maxPrice)
        AND (:brand IS NULL OR v.brand = :brand)
        AND (:transmission IS NULL OR v.transmission = :transmission)
        AND (:fuelType IS NULL OR v.fuelType IN :fuelType)
        AND (:seats IS NULL OR v.seats IN :seats)
    """)
    fun searchVehicles(
        @Param("status") status: VehicleStatus = VehicleStatus.AVAILABLE,
        @Param("minPrice") minPrice: BigDecimal?,
        @Param("maxPrice") maxPrice: BigDecimal?,
        @Param("brand") brand: String?,
        @Param("transmission") transmission: String?,
        @Param("fuelType") fuelType: List<String>?,
        @Param("seats") seats: List<Int>?,
        pageable: Pageable
    ): Page<Vehicle>

    /**
     * 基于坐标搜索车辆，使用简化的距离计算（Haversine 公式的简化版）
     * 计算两个经纬度点之间的距离，单位：公里
     */
    @Query("""
        SELECT v FROM Vehicle v
        WHERE v.status = :status
        AND v.latitude IS NOT NULL AND v.longitude IS NOT NULL
        AND (:latitude IS NULL OR :longitude IS NULL OR
            (6371 * ACOS(
                SIN(RADIANS(:latitude)) * SIN(RADIANS(v.latitude)) +
                COS(RADIANS(:latitude)) * COS(RADIANS(v.latitude)) *
                COS(RADIANS(v.longitude - :longitude))
            ) <= :radius))
        AND (:minPrice IS NULL OR v.pricePerDay >= :minPrice)
        AND (:maxPrice IS NULL OR v.pricePerDay <= :maxPrice)
        AND (:brand IS NULL OR v.brand = :brand)
        AND (:transmission IS NULL OR v.transmission = :transmission)
        AND (:fuelType IS NULL OR v.fuelType IN :fuelType)
        AND (:seats IS NULL OR v.seats IN :seats)
    """)
    fun searchVehiclesByLocation(
        @Param("status") status: VehicleStatus = VehicleStatus.AVAILABLE,
        @Param("latitude") latitude: Double?,
        @Param("longitude") longitude: Double?,
        @Param("radius") radius: Double?,
        @Param("minPrice") minPrice: BigDecimal?,
        @Param("maxPrice") maxPrice: BigDecimal?,
        @Param("brand") brand: String?,
        @Param("transmission") transmission: String?,
        @Param("fuelType") fuelType: List<String>?,
        @Param("seats") seats: List<Int>?,
        pageable: Pageable
    ): Page<Vehicle>

    @Query("""
        SELECT v FROM Vehicle v
        WHERE v.status = :status
        AND v.id IN (
            SELECT oi.vehicleId FROM Order oi
            WHERE NOT (
                (oi.startDate <= :endDate AND oi.endDate >= :startDate)
                AND oi.status NOT IN ('CANCELLED', 'REFUNDED')
            )
            OR oi.id IS NULL
        )
    """)
    fun findAvailableVehicles(
        @Param("startDate") startDate: LocalDateTime,
        @Param("endDate") endDate: LocalDateTime,
        @Param("status") status: VehicleStatus,
        pageable: Pageable
    ): Page<Vehicle>

    fun findByLocationContainingAndStatus(location: String, status: VehicleStatus): List<Vehicle>

    @Query("SELECT DISTINCT v.location FROM Vehicle v WHERE v.location IS NOT NULL ORDER BY v.location")
    fun findDistinctLocations(): List<String>

    @Query("""
        SELECT COUNT(o) FROM Order o
        WHERE o.vehicleId = :vehicleId
        AND o.status NOT IN ('CANCELLED', 'REFUNDED')
        AND (
            (o.startDate <= :endDate AND o.endDate >= :startDate)
        )
    """)
    fun countConflictingOrders(
        @Param("vehicleId") vehicleId: Long,
        @Param("startDate") startDate: LocalDateTime,
        @Param("endDate") endDate: LocalDateTime
    ): Long
}
