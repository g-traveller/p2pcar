package com.p2pcar.repository

import com.p2pcar.entity.Order
import com.p2pcar.entity.OrderStatus
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import java.time.LocalDateTime
import java.util.*

@Repository
interface OrderRepository : JpaRepository<Order, Long> {

    fun findByOrderNo(orderNo: String): Optional<Order>

    fun findByRenterId(renterId: Long, pageable: Pageable): Page<Order>

    fun findByOwnerId(ownerId: Long, pageable: Pageable): Page<Order>

    fun findByVehicleId(vehicleId: Long): List<Order>

    fun findByVehicleIdAndStatusNotIn(
        vehicleId: Long,
        statuses: List<OrderStatus>
    ): List<Order>

    fun findByRenterIdAndStatus(
        renterId: Long,
        status: OrderStatus
    ): List<Order>

    @Query("""
        SELECT o FROM Order o
        WHERE o.vehicleId = :vehicleId
        AND o.status NOT IN ('CANCELLED', 'REFUNDED', 'COMPLETED')
        AND (
            (o.startDate <= :endDate AND o.endDate >= :startDate)
        )
    """)
    fun findConflictingOrders(
        @Param("vehicleId") vehicleId: Long,
        @Param("startDate") startDate: LocalDateTime,
        @Param("endDate") endDate: LocalDateTime
    ): List<Order>

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

    fun existsByVehicleIdAndStartDateBeforeAndEndDateAfterAndStatusNotIn(
        vehicleId: Long,
        endDate: LocalDateTime,
        startDate: LocalDateTime,
        statuses: List<OrderStatus>
    ): Boolean
}
