package com.p2pcar.repository

import com.p2pcar.entity.PickupLocation
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PickupLocationRepository : JpaRepository<PickupLocation, Long> {
    fun findByIsActiveTrueOrderByDisplayOrderAscCityAsc(): List<PickupLocation>
    fun findByCity(city: String): List<PickupLocation>
    fun findByIsActiveTrue(): List<PickupLocation>
}
