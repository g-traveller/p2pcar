package com.p2pcar.repository

import com.p2pcar.entity.User
import com.p2pcar.entity.UserStatus
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserRepository : JpaRepository<User, Long> {

    fun findByPhone(phone: String): Optional<User>

    fun findByPhoneAndStatus(phone: String, status: UserStatus): Optional<User>

    fun findByEmail(email: String): Optional<User>

    fun existsByPhone(phone: String): Boolean

    fun existsByEmail(email: String): Boolean

    @Query("SELECT u FROM User u WHERE u.status = :status")
    fun findByStatus(status: UserStatus): List<User>

    fun findByIdAndStatusNot(id: Long, status: UserStatus): Optional<User>
}
