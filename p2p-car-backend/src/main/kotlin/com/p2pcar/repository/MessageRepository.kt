package com.p2pcar.repository

import com.p2pcar.entity.Message
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface MessageRepository : JpaRepository<Message, Long> {

    fun findByReceiverIdOrderByCreatedAtDesc(
        receiverId: Long,
        pageable: Pageable
    ): Page<Message>

    fun findByReceiverIdAndIsReadOrderByCreatedAtDesc(
        receiverId: Long,
        isRead: Boolean,
        pageable: Pageable
    ): Page<Message>

    fun findBySenderIdAndReceiverIdOrderByCreatedAtDesc(
        senderId: Long,
        receiverId: Long,
        pageable: Pageable
    ): Page<Message>

    fun findByOrderId(orderId: Long): List<Message>

    @Query("SELECT COUNT(m) FROM Message m WHERE m.receiverId = :receiverId AND m.isRead = false")
    fun countUnreadMessages(@Param("receiverId") receiverId: Long): Long

    @Query("""
        SELECT m FROM Message m
        WHERE (m.senderId = :userId1 OR m.senderId = :userId2)
        AND (m.receiverId = :userId1 OR m.receiverId = :userId2)
        ORDER BY m.createdAt DESC
    """)
    fun findConversation(
        @Param("userId1") userId1: Long,
        @Param("userId2") userId2: Long,
        pageable: Pageable
    ): Page<Message>
}
