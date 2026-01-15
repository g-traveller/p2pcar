package com.p2pcar.repository

import com.p2pcar.entity.Review
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface ReviewRepository : JpaRepository<Review, Long> {

    fun findByOrderId(orderId: Long): Optional<Review>

    fun findByTargetId(targetId: Long, pageable: Pageable): Page<Review>

    fun existsByOrderId(orderId: Long): Boolean

    @Query("SELECT AVG(r.rating) FROM Review r WHERE r.targetId = :targetId")
    fun calculateAverageRating(@Param("targetId") targetId: Long): Double?

    @Query("SELECT COUNT(r) FROM Review r WHERE r.targetId = :targetId")
    fun countReviews(@Param("targetId") targetId: Long): Long
}
