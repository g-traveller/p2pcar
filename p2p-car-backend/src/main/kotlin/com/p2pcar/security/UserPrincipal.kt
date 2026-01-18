package com.p2pcar.security

import com.p2pcar.entity.User
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

data class UserPrincipal(
    val id: Long,
    val phone: String?,
    val email: String?,
    private val userPassword: String,
    val name: String,
    val role: String,
    val status: String
) : UserDetails {

    override fun getAuthorities(): Collection<GrantedAuthority> {
        return listOf(SimpleGrantedAuthority("ROLE_$role"))
    }

    override fun getPassword(): String = userPassword

    override fun getUsername(): String = phone ?: email ?: ""

    override fun isAccountNonExpired(): Boolean = true

    override fun isAccountNonLocked(): Boolean = status != "SUSPENDED"

    override fun isCredentialsNonExpired(): Boolean = true

    override fun isEnabled(): Boolean = status == "ACTIVE"

    companion object {
        fun create(user: User): UserPrincipal {
            return UserPrincipal(
                id = user.id!!,
                phone = user.phone,
                email = user.email,
                userPassword = user.passwordHash,
                name = user.name,
                role = user.role.name,
                status = user.status.name
            )
        }
    }
}
