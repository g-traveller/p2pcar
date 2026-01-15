package com.p2pcar.controller

import com.p2pcar.dto.request.CreateOrderRequest
import com.p2pcar.dto.response.ApiResponse
import com.p2pcar.dto.response.OrderResponse
import com.p2pcar.entity.OrderStatus
import com.p2pcar.service.OrderService
import jakarta.validation.Valid
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/orders")
class OrderController(
    private val orderService: OrderService
) {

    @PostMapping
    fun createOrder(@Valid @RequestBody request: CreateOrderRequest): ResponseEntity<ApiResponse<OrderResponse>> {
        val order = orderService.createOrder(request)
        return ResponseEntity.ok(ApiResponse.success(order))
    }

    @GetMapping("/{id}")
    fun getOrderById(@PathVariable id: Long): ResponseEntity<ApiResponse<OrderResponse>> {
        val order = orderService.getOrderById(id)
        return ResponseEntity.ok(ApiResponse.success(order))
    }

    @GetMapping
    fun getMyOrders(
        @RequestParam status: String? = null,
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): ResponseEntity<ApiResponse<Page<OrderResponse>>> {
        val orderStatus = status?.let { try { OrderStatus.valueOf(it.uppercase()) } catch (e: Exception) { null } }
        val pageable = PageRequest.of(page, size, Sort.by("createdAt").descending())
        val orders = orderService.getMyOrders(orderStatus, pageable)
        return ResponseEntity.ok(ApiResponse.success(orders))
    }

    @PutMapping("/{id}/cancel")
    fun cancelOrder(
        @PathVariable id: Long,
        @RequestParam reason: String? = null
    ): ResponseEntity<ApiResponse<Nothing>> {
        orderService.cancelOrder(id, reason)
        return ResponseEntity.ok(ApiResponse.success())
    }

    @PutMapping("/{id}/confirm")
    fun confirmOrder(@PathVariable id: Long): ResponseEntity<ApiResponse<Nothing>> {
        orderService.confirmOrder(id)
        return ResponseEntity.ok(ApiResponse.success())
    }

    @PutMapping("/{id}/check-in")
    fun checkIn(@PathVariable id: Long): ResponseEntity<ApiResponse<Nothing>> {
        orderService.checkIn(id)
        return ResponseEntity.ok(ApiResponse.success())
    }

    @PutMapping("/{id}/check-out")
    fun checkOut(@PathVariable id: Long): ResponseEntity<ApiResponse<Nothing>> {
        orderService.checkOut(id)
        return ResponseEntity.ok(ApiResponse.success())
    }
}
