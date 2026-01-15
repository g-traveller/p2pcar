package com.p2pcar.service

import com.p2pcar.dto.request.CreateVehicleRequest
import com.p2pcar.dto.request.UpdateVehicleRequest
import com.p2pcar.dto.request.VehicleSearchRequest
import com.p2pcar.dto.response.HostInfo
import com.p2pcar.dto.response.PageResponse
import com.p2pcar.dto.response.VehicleResponse
import com.p2pcar.entity.FuelType
import com.p2pcar.entity.TransmissionType
import com.p2pcar.entity.UserStatus
import com.p2pcar.entity.Vehicle
import com.p2pcar.entity.VehicleImage
import com.p2pcar.entity.VehicleStatus
import com.p2pcar.exception.BusinessException
import com.p2pcar.exception.ErrorCode
import com.p2pcar.repository.UserRepository
import com.p2pcar.repository.VehicleImageRepository
import com.p2pcar.repository.VehicleRepository
import com.p2pcar.security.UserPrincipal
import com.p2pcar.util.DateUtil
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional
class VehicleService(
    private val vehicleRepository: VehicleRepository,
    private val vehicleImageRepository: VehicleImageRepository,
    private val userRepository: UserRepository
) {

    @Transactional(readOnly = true)
    fun searchVehicles(request: VehicleSearchRequest): PageResponse<VehicleResponse> {
        val sort = when (request.sortBy) {
            "price_asc" -> Sort.by("pricePerDay").ascending()
            "price_desc" -> Sort.by("pricePerDay").descending()
            "rating_desc" -> Sort.by("rating").descending()
            "created_desc" -> Sort.by("createdAt").descending()
            else -> Sort.by("rating").descending()
        }

        val page = PageRequest.of(request.page, request.size, sort)

        val vehiclesPage = if (request.startDate != null && request.endDate != null) {
            if (!DateUtil.isValidRange(request.startDate, request.endDate)) {
                throw BusinessException(ErrorCode.INVALID_DATE_RANGE)
            }
            vehicleRepository.findAvailableVehicles(
                request.startDate,
                request.endDate,
                VehicleStatus.AVAILABLE,
                page
            )
        } else {
            vehicleRepository.searchVehicles(
                status = VehicleStatus.AVAILABLE,
                location = request.location,
                minPrice = request.minPrice,
                maxPrice = request.maxPrice,
                seats = request.seats,
                transmission = request.transmission,
                fuelType = request.fuelType,
                brand = request.brand,
                pageable = page
            )
        }

        val responses = vehiclesPage.content.map { toResponse(it) }

        return PageResponse.of(
            items = responses,
            total = vehiclesPage.totalElements,
            page = vehiclesPage.number,
            size = vehiclesPage.size
        )
    }

    @Transactional(readOnly = true)
    fun getVehicleById(id: Long): VehicleResponse {
        val vehicle = vehicleRepository.findById(id)
            .orElseThrow { BusinessException(ErrorCode.VEHICLE_NOT_FOUND) }

        if (vehicle.status == VehicleStatus.DELETED) {
            throw BusinessException(ErrorCode.VEHICLE_NOT_FOUND)
        }

        return toResponse(vehicle)
    }

    fun createVehicle(request: CreateVehicleRequest): VehicleResponse {
        val userPrincipal = SecurityContextHolder.getContext().authentication.principal as UserPrincipal
        val owner = userRepository.findById(userPrincipal.id)
            .orElseThrow { BusinessException(ErrorCode.USER_NOT_FOUND) }

        if (owner.status != UserStatus.ACTIVE) {
            throw BusinessException(ErrorCode.BAD_REQUEST, "User account is not active")
        }

        val vehicle = Vehicle(
            ownerId = owner.id!!,
            brand = request.brand,
            model = request.model,
            year = request.year,
            color = request.color,
            licensePlate = request.licensePlate,
            seats = request.seats,
            transmission = try { TransmissionType.valueOf(request.transmission.uppercase()) }
                catch (e: Exception) { TransmissionType.AUTOMATIC },
            fuelType = try { FuelType.valueOf(request.fuelType.uppercase()) }
                catch (e: Exception) { FuelType.PETROL },
            pricePerDay = request.pricePerDay,
            location = request.location,
            latitude = request.latitude,
            longitude = request.longitude,
            description = request.description,
            instantBook = request.instantBook,
            status = VehicleStatus.AVAILABLE
        )

        val savedVehicle = vehicleRepository.save(vehicle)

        // Save images
        request.images.forEachIndexed { index, imageUrl ->
            val image = VehicleImage(
                vehicleId = savedVehicle.id!!,
                url = imageUrl,
                isPrimary = index == 0,
                displayOrder = index
            )
            vehicleImageRepository.save(image)
        }

        return toResponse(savedVehicle)
    }

    fun updateVehicle(id: Long, request: UpdateVehicleRequest): VehicleResponse {
        val userPrincipal = SecurityContextHolder.getContext().authentication.principal as UserPrincipal
        val vehicle = vehicleRepository.findById(id)
            .orElseThrow { BusinessException(ErrorCode.VEHICLE_NOT_FOUND) }

        if (vehicle.ownerId != userPrincipal.id) {
            throw BusinessException(ErrorCode.FORBIDDEN, "You are not the owner of this vehicle")
        }

        request.brand?.let { vehicle.brand = it }
        request.model?.let { vehicle.model = it }
        request.year?.let { vehicle.year = it }
        request.color?.let { vehicle.color = it }
        request.licensePlate?.let { vehicle.licensePlate = it }
        request.seats?.let { vehicle.seats = it }
        request.transmission?.let {
            vehicle.transmission = try { TransmissionType.valueOf(it.uppercase()) }
            catch (e: Exception) { TransmissionType.AUTOMATIC }
        }
        request.fuelType?.let {
            vehicle.fuelType = try { FuelType.valueOf(it.uppercase()) }
            catch (e: Exception) { FuelType.PETROL }
        }
        request.pricePerDay?.let { vehicle.pricePerDay = it }
        request.location?.let { vehicle.location = it }
        request.latitude?.let { vehicle.latitude = it }
        request.longitude?.let { vehicle.longitude = it }
        request.description?.let { vehicle.description = it }
        request.instantBook?.let { vehicle.instantBook = it }

        vehicle.updatedAt = java.time.LocalDateTime.now()

        val updatedVehicle = vehicleRepository.save(vehicle)

        return toResponse(updatedVehicle)
    }

    fun deleteVehicle(id: Long) {
        val userPrincipal = SecurityContextHolder.getContext().authentication.principal as UserPrincipal
        val vehicle = vehicleRepository.findById(id)
            .orElseThrow { BusinessException(ErrorCode.VEHICLE_NOT_FOUND) }

        if (vehicle.ownerId != userPrincipal.id) {
            throw BusinessException(ErrorCode.FORBIDDEN, "You are not the owner of this vehicle")
        }

        if (vehicle.status == VehicleStatus.RENTED) {
            throw BusinessException(ErrorCode.VEHICLE_NOT_AVAILABLE, "Cannot delete rented vehicle")
        }

        vehicle.status = VehicleStatus.DELETED
        vehicle.updatedAt = java.time.LocalDateTime.now()
        vehicleRepository.save(vehicle)
    }

    @Transactional(readOnly = true)
    fun getMyVehicles(): List<VehicleResponse> {
        val userPrincipal = SecurityContextHolder.getContext().authentication.principal as UserPrincipal
        val vehicles = vehicleRepository.findByOwnerId(userPrincipal.id)

        return vehicles
            .filter { it.status != VehicleStatus.DELETED }
            .map { toResponse(it) }
    }

    @Transactional(readOnly = true)
    fun getDistinctLocations(): List<String> {
        return vehicleRepository.findDistinctLocations()
    }

    @Transactional(readOnly = true)
    fun checkAvailability(vehicleId: Long, startDate: java.time.LocalDateTime, endDate: java.time.LocalDateTime): Boolean {
        val vehicle = vehicleRepository.findById(vehicleId)
            .orElseThrow { BusinessException(ErrorCode.VEHICLE_NOT_FOUND) }

        if (vehicle.status != VehicleStatus.AVAILABLE) {
            return false
        }

        val conflictCount = vehicleRepository.countConflictingOrders(vehicleId, startDate, endDate)
        return conflictCount == 0L
    }

    private fun toResponse(vehicle: Vehicle): VehicleResponse {
        val images = vehicleImageRepository.findByVehicleIdOrderByDisplayOrderAsc(vehicle.id!!)
        val primaryImage = images.firstOrNull { it.isPrimary }?.url ?: images.firstOrNull()?.url

        val owner = userRepository.findById(vehicle.ownerId).orElse(null)

        return VehicleResponse(
            id = vehicle.id!!,
            name = "${vehicle.brand} ${vehicle.model}",
            brand = vehicle.brand,
            model = vehicle.model,
            year = vehicle.year,
            color = vehicle.color,
            image = primaryImage,
            images = images.map { it.url },
            price = vehicle.pricePerDay,
            rating = vehicle.rating,
            reviewCount = vehicle.reviewCount,
            location = vehicle.location,
            seats = vehicle.seats,
            transmission = if (vehicle.transmission == TransmissionType.AUTOMATIC) "自动" else "手动",
            fuel = when (vehicle.fuelType) {
                FuelType.PETROL -> "汽油"
                FuelType.ELECTRIC -> "电动"
                FuelType.HYBRID -> "混动"
                FuelType.DIESEL -> "柴油"
            },
            description = vehicle.description,
            instantBook = vehicle.instantBook,
            host = owner?.let {
                HostInfo(
                    id = it.id!!,
                    name = it.name,
                    avatar = it.avatar,
                    trips = vehicle.totalTrips,
                    rating = vehicle.rating,
                    isSuperHost = vehicle.isSuperHost
                )
            },
            badges = buildList {
                if (vehicle.isSuperHost) add("超级车主")
                if (vehicle.instantBook) add("即时预订")
            },
            status = vehicle.status.name,
            createdAt = vehicle.createdAt
        )
    }
}
