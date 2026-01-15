package com.p2pcar.dto.response

data class PageResponse<T>(
    val total: Long,
    val items: List<T>,
    val page: Int,
    val size: Int,
    val totalPages: Int
) {
    companion object {
        fun <T> of(
            items: List<T>,
            total: Long,
            page: Int,
            size: Int
        ): PageResponse<T> {
            return PageResponse(
                total = total,
                items = items,
                page = page,
                size = size,
                totalPages = if (size > 0) ((total + size - 1) / size).toInt() else 0
            )
        }
    }
}
