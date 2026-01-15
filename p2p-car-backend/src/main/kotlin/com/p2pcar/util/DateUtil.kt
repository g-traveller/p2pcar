package com.p2pcar.util

import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.time.temporal.ChronoUnit

object DateUtil {
    private val DEFAULT_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
    private val DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd")

    fun formatDateTime(dateTime: LocalDateTime): String {
        return dateTime.format(DEFAULT_FORMATTER)
    }

    fun formatDate(dateTime: LocalDateTime): String {
        return dateTime.format(DATE_FORMATTER)
    }

    fun parseDateTime(dateStr: String): LocalDateTime {
        return LocalDateTime.parse(dateStr, DEFAULT_FORMATTER)
    }

    fun calculateDays(start: LocalDateTime, end: LocalDateTime): Long {
        return ChronoUnit.DAYS.between(start, end)
    }

    fun isValidRange(start: LocalDateTime, end: LocalDateTime): Boolean {
        return end.isAfter(start) && start.isAfter(LocalDateTime.now())
    }
}
