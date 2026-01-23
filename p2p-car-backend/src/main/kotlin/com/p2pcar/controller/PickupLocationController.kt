package com.p2pcar.controller

import com.p2pcar.dto.request.CreatePickupLocationRequest
import com.p2pcar.dto.request.UpdatePickupLocationRequest
import com.p2pcar.dto.response.ApiResponse
import com.p2pcar.dto.response.PickupLocationResponse
import com.p2pcar.service.PickupLocationService
import jakarta.validation.Valid
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/locations")
class PickupLocationController(
    private val pickupLocationService: PickupLocationService
) {

    @GetMapping
    fun getAllLocations(): ResponseEntity<ApiResponse<List<PickupLocationResponse>>> {
        val locations = pickupLocationService.getAll()
        return ResponseEntity.ok(ApiResponse.success(locations))
    }

    @GetMapping("/active")
    fun getActiveLocations(): ResponseEntity<ApiResponse<List<PickupLocationResponse>>> {
        val locations = pickupLocationService.getActive()
        return ResponseEntity.ok(ApiResponse.success(locations))
    }

    @GetMapping("/city/{city}")
    fun getLocationsByCity(@PathVariable city: String): ResponseEntity<ApiResponse<List<PickupLocationResponse>>> {
        val locations = pickupLocationService.getByCity(city)
        return ResponseEntity.ok(ApiResponse.success(locations))
    }

    @GetMapping("/{id}")
    fun getLocationById(@PathVariable id: Long): ResponseEntity<ApiResponse<PickupLocationResponse>> {
        val location = pickupLocationService.getById(id)
        return ResponseEntity.ok(ApiResponse.success(location))
    }

    @PostMapping
    fun createLocation(@Valid @RequestBody request: CreatePickupLocationRequest): ResponseEntity<ApiResponse<PickupLocationResponse>> {
        val location = pickupLocationService.create(request)
        return ResponseEntity.ok(ApiResponse.success(location))
    }

    @PutMapping("/{id}")
    fun updateLocation(
        @PathVariable id: Long,
        @Valid @RequestBody request: UpdatePickupLocationRequest
    ): ResponseEntity<ApiResponse<PickupLocationResponse>> {
        val location = pickupLocationService.update(id, request)
        return ResponseEntity.ok(ApiResponse.success(location))
    }

    @DeleteMapping("/{id}")
    fun deleteLocation(@PathVariable id: Long): ResponseEntity<ApiResponse<Void>> {
        pickupLocationService.delete(id)
        return ResponseEntity.ok(ApiResponse.success())
    }
}
