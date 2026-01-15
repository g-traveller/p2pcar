package com.p2pcar.repository

import com.p2pcar.entity.Payment
import com.p2pcar.entity.PaymentStatus
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface PaymentRepository : JpaRepository<Payment, Long> {

    fun findByPaymentNo(paymentNo: String): Optional<Payment>

    fun findByOrderId(orderId: Long): List<Payment>

    fun findByOrderIdAndStatus(orderId: Long, status: PaymentStatus): Optional<Payment>

    fun findByTransactionId(transactionId: String): Optional<Payment>
}
