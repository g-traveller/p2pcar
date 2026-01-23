package com.p2pcar.dto.request

import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.NotNull

data class CreatePickupLocationRequest(
    @field:NotBlank(message = "地点名称不能为空")
    val name: String,

    @field:NotBlank(message = "地址不能为空")
    val address: String,

    val district: String?,

    @field:NotBlank(message = "城市不能为空")
    val city: String,

    val latitude: Double?,

    val longitude: Double?,

    @field:NotNull(message = "显示顺序不能为空")
    val displayOrder: Int
)

data class UpdatePickupLocationRequest(
    @field:NotBlank(message = "地点名称不能为空")
    val name: String,

    @field:NotBlank(message = "地址不能为空")
    val address: String,

    val district: String?,

    @field:NotBlank(message = "城市不能为空")
    val city: String,

    val latitude: Double?,

    val longitude: Double?,

    val isActive: Boolean?,

    val displayOrder: Int?
)
