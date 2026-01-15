package com.p2pcar.repository

import com.p2pcar.entity.VehicleImage
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface VehicleImageRepository : JpaRepository<VehicleImage, Long> {

    fun findByVehicleIdOrderByDisplayOrderAsc(vehicleId: Long): List<VehicleImage>

    fun findByVehicleIdAndIsPrimary(vehicleId: Long, isPrimary: Boolean): Optional<VehicleImage>

    fun deleteByVehicleId(vehicleId: Long)
}
