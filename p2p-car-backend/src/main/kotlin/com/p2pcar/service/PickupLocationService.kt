package com.p2pcar.service

import com.p2pcar.dto.request.CreatePickupLocationRequest
import com.p2pcar.dto.request.UpdatePickupLocationRequest
import com.p2pcar.dto.response.PickupLocationResponse
import com.p2pcar.entity.PickupLocation
import com.p2pcar.repository.PickupLocationRepository
import org.springframework.data.domain.Sort
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional
class PickupLocationService(
    private val pickupLocationRepository: PickupLocationRepository
) {

    fun getAll(): List<PickupLocationResponse> {
        return pickupLocationRepository.findAll(Sort.by(Sort.Order.asc("displayOrder"), Sort.Order.asc("city")))
            .map { toResponse(it) }
    }

    fun getActive(): List<PickupLocationResponse> {
        return pickupLocationRepository.findByIsActiveTrueOrderByDisplayOrderAscCityAsc()
            .map { toResponse(it) }
    }

    fun getByCity(city: String): List<PickupLocationResponse> {
        return pickupLocationRepository.findByCity(city)
            .map { toResponse(it) }
    }

    fun getById(id: Long): PickupLocationResponse {
        val location = pickupLocationRepository.findByIdOrNull(id)
            ?: throw IllegalArgumentException("取车地点不存在: $id")
        return toResponse(location)
    }

    fun create(request: CreatePickupLocationRequest): PickupLocationResponse {
        val location = PickupLocation(
            name = request.name,
            address = request.address,
            district = request.district,
            city = request.city,
            latitude = request.latitude,
            longitude = request.longitude,
            isActive = true,
            displayOrder = request.displayOrder
        )
        val saved = pickupLocationRepository.save(location)
        return toResponse(saved)
    }

    fun update(id: Long, request: UpdatePickupLocationRequest): PickupLocationResponse {
        val location = pickupLocationRepository.findByIdOrNull(id)
            ?: throw IllegalArgumentException("取车地点不存在: $id")

        location.name = request.name
        location.address = request.address
        location.district = request.district
        location.city = request.city
        location.latitude = request.latitude
        location.longitude = request.longitude
        request.isActive?.let { location.isActive = it }
        request.displayOrder?.let { location.displayOrder = it }
        location.updatedAt = java.time.LocalDateTime.now()

        val saved = pickupLocationRepository.save(location)
        return toResponse(saved)
    }

    fun delete(id: Long) {
        if (!pickupLocationRepository.existsById(id)) {
            throw IllegalArgumentException("取车地点不存在: $id")
        }
        pickupLocationRepository.deleteById(id)
    }

    private fun toResponse(location: PickupLocation): PickupLocationResponse {
        return PickupLocationResponse(
            id = location.id!!,
            name = location.name,
            address = location.address,
            district = location.district,
            city = location.city,
            latitude = location.latitude,
            longitude = location.longitude,
            isActive = location.isActive,
            displayOrder = location.displayOrder,
            createdAt = location.createdAt
        )
    }
}
