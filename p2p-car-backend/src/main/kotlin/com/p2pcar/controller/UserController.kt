package com.p2pcar.controller

import com.p2pcar.dto.request.UpdateUserRequest
import com.p2pcar.dto.response.ApiResponse
import com.p2pcar.dto.response.UserResponse
import com.p2pcar.service.UserService
import jakarta.validation.Valid
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/users")
class UserController(
    private val userService: UserService
) {

    @GetMapping("/profile")
    fun getCurrentUser(): ResponseEntity<ApiResponse<UserResponse>> {
        val user = userService.getCurrentUser()
        return ResponseEntity.ok(ApiResponse.success(user))
    }

    @PutMapping("/profile")
    fun updateCurrentUser(@Valid @RequestBody request: UpdateUserRequest): ResponseEntity<ApiResponse<UserResponse>> {
        val user = userService.updateCurrentUser(request)
        return ResponseEntity.ok(ApiResponse.success(user))
    }

    @GetMapping("/{id}")
    fun getUserById(@PathVariable id: Long): ResponseEntity<ApiResponse<UserResponse>> {
        val user = userService.getUserById(id)
        return ResponseEntity.ok(ApiResponse.success(user))
    }
}
