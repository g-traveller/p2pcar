package com.p2pcar.security

import io.jsonwebtoken.*
import io.jsonwebtoken.security.Keys
import org.springframework.beans.factory.annotation.Value
import org.springframework.security.core.Authentication
import org.springframework.stereotype.Component
import javax.crypto.SecretKey
import java.util.*

@Component
class JwtTokenProvider(
    @Value("\${jwt.secret}") private val jwtSecret: String,
    @Value("\${jwt.expiration}") private val jwtExpiration: Long,
    @Value("\${jwt.refresh-expiration}") private val refreshExpiration: Long
) {

    private val key: SecretKey = Keys.hmacShaKeyFor(jwtSecret.toByteArray())

    fun generateToken(authentication: Authentication): String {
        val userPrincipal = authentication.principal as UserPrincipal
        val now = Date()
        val expiryDate = Date(now.time + jwtExpiration)

        return Jwts.builder()
            .setSubject(userPrincipal.id.toString())
            .claim("phone", userPrincipal.phone)
            .claim("email", userPrincipal.email)
            .claim("role", userPrincipal.role)
            .setIssuedAt(now)
            .setExpiration(expiryDate)
            .signWith(key, SignatureAlgorithm.HS512)
            .compact()
    }

    fun generateTokenFromUserId(userId: Long, identifier: String, role: String): String {
        val now = Date()
        val expiryDate = Date(now.time + jwtExpiration)

        val isEmail = identifier.contains("@")

        return Jwts.builder()
            .setSubject(userId.toString())
            .claim("phone", if (isEmail) null else identifier)
            .claim("email", if (isEmail) identifier else null)
            .claim("role", role)
            .setIssuedAt(now)
            .setExpiration(expiryDate)
            .signWith(key, SignatureAlgorithm.HS512)
            .compact()
    }

    fun generateRefreshToken(authentication: Authentication): String {
        val userPrincipal = authentication.principal as UserPrincipal
        val now = Date()
        val expiryDate = Date(now.time + refreshExpiration)

        return Jwts.builder()
            .setSubject(userPrincipal.id.toString())
            .claim("type", "refresh")
            .setIssuedAt(now)
            .setExpiration(expiryDate)
            .signWith(key, SignatureAlgorithm.HS512)
            .compact()
    }

    fun getUserIdFromToken(token: String): Long? {
        return try {
            val claims = Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .payload
            claims.subject.toLong()
        } catch (ex: Exception) {
            null
        }
    }

    fun getPhoneFromToken(token: String): String? {
        return try {
            val claims = Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .payload
            claims["phone"] as? String
        } catch (ex: Exception) {
            null
        }
    }

    fun getRoleFromToken(token: String): String? {
        return try {
            val claims = Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .payload
            claims["role"] as? String
        } catch (ex: Exception) {
            null
        }
    }

    fun validateToken(token: String): Boolean {
        return try {
            Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
            true
        } catch (ex: SignatureException) {
            false
        } catch (ex: MalformedJwtException) {
            false
        } catch (ex: ExpiredJwtException) {
            false
        } catch (ex: UnsupportedJwtException) {
            false
        } catch (ex: IllegalArgumentException) {
            false
        }
    }
}
