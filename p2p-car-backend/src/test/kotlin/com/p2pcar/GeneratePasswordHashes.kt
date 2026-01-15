package com.p2pcar

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder

/**
 * Simple utility to generate BCrypt password hashes
 *
 * To run this:
 * 1. cd p2p-car-backend
 * 2. kotlinc -cp $(find ~/.gradle/caches -name "spring-security-crypto-*.jar" | head -1) -script GeneratePasswordHashes.kt
 *
 * Or use the Spring Boot app with a test endpoint
 */
object GeneratePasswordHashes {
    @JvmStatic
    fun main(args: Array<String>) {
        val encoder = BCryptPasswordEncoder(10)

        val passwords = listOf("password123", "admin123")

        println("BCrypt Password Hashes (strength=10):")
        println("=====================================\n")

        passwords.forEach { password ->
            val hash = encoder.encode(password)
            println("Password: $password")
            println("Hash:     $hash")
            println("SQL:      '$hash',")
            println()

            // Verify
            val verified = encoder.matches(password, hash)
            println("Verify:   $verified")
            println()
        }
    }
}
