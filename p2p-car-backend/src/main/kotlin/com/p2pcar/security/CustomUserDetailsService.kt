package com.p2pcar.security

import com.p2pcar.entity.User
import com.p2pcar.entity.UserStatus
import com.p2pcar.repository.UserRepository
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class CustomUserDetailsService(
    private val userRepository: UserRepository
) : UserDetailsService {

    @Transactional(readOnly = true)
    override fun loadUserByUsername(username: String): UserDetails {
        val user = userRepository.findByPhone(username)
            .orElseThrow { UsernameNotFoundException("User not found with phone: $username") }

        if (user.status == UserStatus.DELETED) {
            throw UsernameNotFoundException("User account has been deleted")
        }

        return UserPrincipal.create(user)
    }

    @Transactional(readOnly = true)
    fun loadUserById(userId: Long): UserDetails {
        val user = userRepository.findById(userId)
            .orElseThrow { UsernameNotFoundException("User not found with id: $userId") }

        if (user.status == UserStatus.DELETED) {
            throw UsernameNotFoundException("User account has been deleted")
        }

        return UserPrincipal.create(user)
    }

    @Transactional(readOnly = true)
    fun loadUserByPhoneAndPassword(phone: String, password: String): UserDetails? {
        val user = userRepository.findByPhone(phone).orElse(null) ?: return null

        if (user.status == UserStatus.DELETED) {
            return null
        }

        if (user.passwordHash != password) {
            return null
        }

        return UserPrincipal.create(user)
    }
}
