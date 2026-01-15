package com.p2pcar.controller

import com.p2pcar.dto.request.LoginRequest
import com.p2pcar.dto.request.RegisterRequest
import com.p2pcar.dto.response.ApiResponse
import com.p2pcar.dto.response.AuthResponse
import com.p2pcar.dto.response.UserResponse
import com.p2pcar.service.UserService
import jakarta.validation.Valid
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/auth")
class AuthController(
    private val userService: UserService
) {

    @PostMapping("/register")
    fun register(@Valid @RequestBody request: RegisterRequest): ResponseEntity<ApiResponse<AuthResponse>> {
        val (token, user) = userService.register(request)

        val response = AuthResponse(
            token = token,
            refreshToken = "", // TODO: Implement refresh tokens
            user = user
        )

        return ResponseEntity.ok(ApiResponse.success(response))
    }

    @PostMapping("/login")
    fun login(@Valid @RequestBody request: LoginRequest): ResponseEntity<ApiResponse<AuthResponse>> {
        val (token, user) = userService.login(request.phone, request.password)

        val response = AuthResponse(
            token = token,
            refreshToken = "", // TODO: Implement refresh tokens
            user = user
        )

        return ResponseEntity.ok(ApiResponse.success(response))
    }
}
