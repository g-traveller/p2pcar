package com.p2pcar.entity

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "messages", indexes = [
    Index(name = "idx_messages_receiver", columnList = "receiver_id, is_read"),
    Index(name = "idx_messages_order", columnList = "order_id")
])
data class Message(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(name = "sender_id", nullable = false)
    var senderId: Long,

    @Column(name = "receiver_id", nullable = false)
    var receiverId: Long,

    @Column(name = "order_id")
    var orderId: Long? = null,

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    var type: MessageType = MessageType.CHAT,

    @Column(nullable = false, columnDefinition = "TEXT")
    var content: String,

    @Column(name = "is_read")
    var isRead: Boolean = false,

    @Column(name = "created_at")
    var createdAt: LocalDateTime = LocalDateTime.now(),

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sender_id", insertable = false, updatable = false)
    var sender: User? = null,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "receiver_id", insertable = false, updatable = false)
    var receiver: User? = null,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", insertable = false, updatable = false)
    var order: Order? = null
)

enum class MessageType {
    CHAT,
    SYSTEM,
    NOTIFICATION
}
