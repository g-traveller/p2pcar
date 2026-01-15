package com.p2pcar.util

import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.concurrent.atomic.AtomicInteger

object OrderNoGenerator {
    private val formatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmss")
    private val counter = AtomicInteger(0)

    fun generate(): String {
        val timestamp = LocalDateTime.now().format(formatter)
        val count = counter.incrementAndGet() % 10000
        return "ORD$timestamp${String.format("%04d", count)}"
    }

    fun generatePaymentNo(): String {
        val timestamp = LocalDateTime.now().format(formatter)
        val count = counter.incrementAndGet() % 10000
        return "PAY$timestamp${String.format("%04d", count)}"
    }
}
