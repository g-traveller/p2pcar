package com.p2pcar.service

import com.p2pcar.dto.request.RegisterRequest
import com.p2pcar.dto.request.UpdateUserRequest
import com.p2pcar.dto.response.UserResponse
import com.p2pcar.entity.User
import com.p2pcar.entity.UserRole
import com.p2pcar.entity.UserStatus
import com.p2pcar.exception.BusinessException
import com.p2pcar.exception.ErrorCode
import com.p2pcar.repository.UserRepository
import com.p2pcar.security.JwtTokenProvider
import com.p2pcar.security.UserPrincipal
import com.p2pcar.util.ValidationUtil
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional
class UserService(
    private val userRepository: UserRepository,
    private val passwordEncoder: PasswordEncoder,
    private val jwtTokenProvider: JwtTokenProvider,
    private val authenticationManager: AuthenticationManager
) {

    fun register(request: RegisterRequest): Pair<String, UserResponse> {
        ValidationUtil.checkPhoneNumber(request.phone)
        ValidationUtil.checkPassword(request.password)

        if (userRepository.existsByPhone(request.phone)) {
            throw BusinessException(ErrorCode.USER_EXISTS)
        }

        // TODO: Verify verification code from Redis
        // verifyCode(request.phone, request.code)

        val user = User(
            phone = request.phone,
            passwordHash = passwordEncoder.encode(request.password),
            name = request.name,
            role = try { UserRole.valueOf(request.role.uppercase()) } catch (e: Exception) { UserRole.RENTER },
            status = UserStatus.ACTIVE
        )

        val savedUser = userRepository.save(user)
        val token = jwtTokenProvider.generateTokenFromUserId(
            savedUser.id!!,
            savedUser.phone,
            savedUser.role.name
        )

        return token to toResponse(savedUser)
    }

    fun login(phone: String, password: String): Pair<String, UserResponse> {
        val authentication = authenticationManager.authenticate(
            UsernamePasswordAuthenticationToken(phone, password)
        )

        val userPrincipal = authentication.principal as UserPrincipal
        val token = jwtTokenProvider.generateToken(authentication)
        val refreshToken = jwtTokenProvider.generateRefreshToken(authentication)

        val user = userRepository.findByPhone(phone)
            .orElseThrow { BusinessException(ErrorCode.USER_NOT_FOUND) }

        user.updatedAt = java.time.LocalDateTime.now()
        userRepository.save(user)

        return token to toResponse(user)
    }

    @Transactional(readOnly = true)
    fun getCurrentUser(): UserResponse {
        val userPrincipal = SecurityContextHolder.getContext().authentication.principal as UserPrincipal
        val user = userRepository.findById(userPrincipal.id)
            .orElseThrow { BusinessException(ErrorCode.USER_NOT_FOUND) }

        if (user.status == UserStatus.DELETED) {
            throw BusinessException(ErrorCode.USER_NOT_FOUND)
        }

        return toResponse(user)
    }

    @Transactional(readOnly = true)
    fun getUserById(id: Long): UserResponse {
        val user = userRepository.findById(id)
            .orElseThrow { BusinessException(ErrorCode.USER_NOT_FOUND) }

        if (user.status == UserStatus.DELETED) {
            throw BusinessException(ErrorCode.USER_NOT_FOUND)
        }

        return toResponse(user)
    }

    @Transactional(readOnly = true)
    fun getUserByPhone(phone: String): UserResponse {
        val user = userRepository.findByPhone(phone)
            .orElseThrow { BusinessException(ErrorCode.USER_NOT_FOUND) }

        if (user.status == UserStatus.DELETED) {
            throw BusinessException(ErrorCode.USER_NOT_FOUND)
        }

        return toResponse(user)
    }

    fun updateCurrentUser(request: UpdateUserRequest): UserResponse {
        val userPrincipal = SecurityContextHolder.getContext().authentication.principal as UserPrincipal
        val user = userRepository.findById(userPrincipal.id)
            .orElseThrow { BusinessException(ErrorCode.USER_NOT_FOUND) }

        request.name?.let { user.name = it }
        request.email?.let {
            if (userRepository.existsByEmail(it) && user.email != it) {
                throw BusinessException(ErrorCode.CONFLICT, "Email already in use")
            }
            user.email = it
        }

        user.updatedAt = java.time.LocalDateTime.now()
        val updatedUser = userRepository.save(user)

        return toResponse(updatedUser)
    }

    @Transactional(readOnly = true)
    fun searchUsers(status: UserStatus?, pageable: Pageable): Page<UserResponse> {
        // Get all users first
        val allUsers = if (status != null) {
            userRepository.findByStatus(status)
        } else {
            userRepository.findAll()
        }

        // Manual pagination
        val start = pageable.offset.toInt()
        val end = minOf(start + pageable.pageSize, allUsers.size)
        val paginatedUsers = if (start < allUsers.size) {
            allUsers.subList(start, end)
        } else {
            emptyList()
        }

        val responses = paginatedUsers.map { toResponse(it) }

        return org.springframework.data.domain.PageImpl(
            responses,
            pageable,
            allUsers.size.toLong()
        )
    }

    private fun toResponse(user: User): UserResponse {
        return UserResponse(
            id = user.id!!,
            phone = user.phone,
            email = user.email,
            name = user.name,
            avatar = user.avatar,
            role = user.role.name,
            status = user.status.name,
            idCardVerified = user.idCardVerified,
            driverLicenseVerified = user.driverLicenseVerified,
            createdAt = user.createdAt
        )
    }
}
