package com.p2pcar.controller

import com.p2pcar.dto.request.CreateVehicleRequest
import com.p2pcar.dto.request.UpdateVehicleRequest
import com.p2pcar.dto.request.VehicleSearchRequest
import com.p2pcar.dto.response.ApiResponse
import com.p2pcar.dto.response.PageResponse
import com.p2pcar.dto.response.VehicleResponse
import com.p2pcar.service.VehicleService
import jakarta.validation.Valid
import org.springframework.format.annotation.DateTimeFormat
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.time.LocalDate
import java.time.LocalDateTime

@RestController
@RequestMapping("/vehicles")
class VehicleController(
    private val vehicleService: VehicleService
) {

    @GetMapping
    fun searchVehicles(
        @RequestParam location: String? = null,
        @RequestParam latitude: Double? = null,
        @RequestParam longitude: Double? = null,
        @RequestParam radius: Double? = null,
        @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) startDate: LocalDate? = null,
        @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) endDate: LocalDate? = null,
        @RequestParam minPrice: java.math.BigDecimal? = null,
        @RequestParam maxPrice: java.math.BigDecimal? = null,
        @RequestParam seats: List<Int>? = null,
        @RequestParam transmission: String? = null,
        @RequestParam fuelType: List<String>? = null,
        @RequestParam brand: String? = null,
        @RequestParam sortBy: String = "rating_desc",
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): ResponseEntity<ApiResponse<PageResponse<VehicleResponse>>> {
        // Convert LocalDate to LocalDateTime (start of day for startDate, end of day for endDate)
        val startDateTime = startDate?.atStartOfDay()
        val endDateTime = endDate?.atTime(23, 59, 59)

        val request = VehicleSearchRequest(
            location = location,
            latitude = latitude,
            longitude = longitude,
            radius = radius ?: 50.0, // 默认50公里
            startDate = startDateTime,
            endDate = endDateTime,
            minPrice = minPrice,
            maxPrice = maxPrice,
            seats = seats,
            transmission = transmission,
            fuelType = fuelType,
            brand = brand,
            sortBy = sortBy,
            page = page,
            size = size
        )

        val result = vehicleService.searchVehicles(request)
        return ResponseEntity.ok(ApiResponse.success(result))
    }

    @GetMapping("/{id}")
    fun getVehicleById(@PathVariable id: Long): ResponseEntity<ApiResponse<VehicleResponse>> {
        val vehicle = vehicleService.getVehicleById(id)
        return ResponseEntity.ok(ApiResponse.success(vehicle))
    }

    @PostMapping
    fun createVehicle(@Valid @RequestBody request: CreateVehicleRequest): ResponseEntity<ApiResponse<VehicleResponse>> {
        val vehicle = vehicleService.createVehicle(request)
        return ResponseEntity.ok(ApiResponse.success(vehicle))
    }

    @PutMapping("/{id}")
    fun updateVehicle(
        @PathVariable id: Long,
        @Valid @RequestBody request: UpdateVehicleRequest
    ): ResponseEntity<ApiResponse<VehicleResponse>> {
        val vehicle = vehicleService.updateVehicle(id, request)
        return ResponseEntity.ok(ApiResponse.success(vehicle))
    }

    @DeleteMapping("/{id}")
    fun deleteVehicle(@PathVariable id: Long): ResponseEntity<ApiResponse<Nothing>> {
        vehicleService.deleteVehicle(id)
        return ResponseEntity.ok(ApiResponse.success())
    }

    @GetMapping("/my")
    fun getMyVehicles(): ResponseEntity<ApiResponse<List<VehicleResponse>>> {
        val vehicles = vehicleService.getMyVehicles()
        return ResponseEntity.ok(ApiResponse.success(vehicles))
    }

    @GetMapping("/search/locations")
    fun getDistinctLocations(): ResponseEntity<ApiResponse<List<String>>> {
        val locations = vehicleService.getDistinctLocations()
        return ResponseEntity.ok(ApiResponse.success(locations))
    }

    @GetMapping("/{id}/availability")
    fun checkAvailability(
        @PathVariable id: Long,
        @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) startDate: LocalDateTime,
        @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) endDate: LocalDateTime
    ): ResponseEntity<ApiResponse<Map<String, Boolean>>> {
        val available = vehicleService.checkAvailability(id, startDate, endDate)
        return ResponseEntity.ok(ApiResponse.success(mapOf("available" to available)))
    }
}
