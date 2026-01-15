package com.p2pcar

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder

fun main() {
    val encoder = BCryptPasswordEncoder(10)
    val password = "password123"
    val hash = encoder.encode(password)
    println("Password: $password")
    println("Hash: $hash")

    // 验证
    val matches = encoder.matches(password, hash)
    println("Matches: $matches")

    // 测试admin123
    val adminPassword = "admin123"
    val adminHash = encoder.encode(adminPassword)
    println("\nPassword: $adminPassword")
    println("Hash: $adminHash")
}
