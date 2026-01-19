package com.p2pcar.service

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.p2pcar.config.WeChatOAuthProperties
import com.p2pcar.dto.response.OAuthUrlResponse
import com.p2pcar.dto.response.UserResponse
import com.p2pcar.entity.User
import com.p2pcar.exception.ErrorCode
import com.p2pcar.exception.BusinessException
import com.p2pcar.repository.UserRepository
import com.p2pcar.util.JwtUtil
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class OAuthService(
    private val weChatOAuthProperties: WeChatOAuthProperties,
    private val userRepository: UserRepository,
    private val jwtUtil: JwtUtil
) {
    private val logger = LoggerFactory.getLogger(OAuthService::class.java)
    private val objectMapper = jacksonObjectMapper()

    /**
     * Generate WeChat OAuth authorization URL
     */
    fun getWeChatAuthorizationUrl(): OAuthUrlResponse {
        if (!weChatOAuthProperties.enabled) {
            throw BusinessException(ErrorCode.SERVICE_UNAVAILABLE)
        }

        val state = UUID.randomUUID().toString()
        val url = weChatOAuthProperties.getAuthorizeUrl(state)

        return OAuthUrlResponse(
            authorizationUrl = url,
            state = state
        )
    }

    /**
     * Handle WeChat OAuth callback
     */
    fun handleWeChatCallback(code: String, state: String): Pair<String, UserResponse> {
        if (!weChatOAuthProperties.enabled) {
            throw BusinessException(ErrorCode.SERVICE_UNAVAILABLE)
        }

        // Exchange code for access token
        val accessTokenResponse = getWeChatAccessToken(code)
        val accessToken = accessTokenResponse["access_token"] as? String
        val openId = accessTokenResponse["openid"] as? String

        if (accessToken == null || openId == null) {
            logger.error("Invalid access token response: $accessTokenResponse")
            throw BusinessException(ErrorCode.OAUTH_TOKEN_FAILED)
        }

        // Get user info from WeChat
        val weChatUserInfo = getWeChatUserInfo(accessToken, openId)

        // Find or create user
        val user = findOrCreateUserByWeChatOpenId(openId, weChatUserInfo)

        // Generate JWT token
        val token = jwtUtil.generateToken(user.id!!)

        val userResponse = UserResponse(
            id = user.id!!,
            name = user.name,
            email = user.email,
            phone = user.phone,
            avatar = user.avatar,
            role = user.role.name,
            idCardVerified = user.idCardVerified,
            driverLicenseVerified = user.driverLicenseVerified
        )

        return Pair(token, userResponse)
    }

    /**
     * Exchange authorization code for access token
     */
    private fun getWeChatAccessToken(code: String): Map<String, Any> {
        val url = buildString {
            append(weChatOAuthProperties.accessTokenUrl)
            append("?appid=${weChatOAuthProperties.appId}")
            append("&secret=${weChatOAuthProperties.appSecret}")
            append("&code=$code")
            append("&grant_type=authorization_code")
        }

        logger.debug("Requesting WeChat access token from: ${weChatOAuthProperties.accessTokenUrl}")

        val response = khttp.get(url)

        if (response.statusCode != 200) {
            logger.error("Failed to get WeChat access token. Status: ${response.statusCode}, Response: ${response.text}")
            throw BusinessException(ErrorCode.OAUTH_TOKEN_FAILED)
        }

        val jsonResponse = try {
            objectMapper.readValue(response.text, Map::class.java) as Map<String, Any>
        } catch (e: Exception) {
            logger.error("Failed to parse WeChat access token response", e)
            throw BusinessException(ErrorCode.OAUTH_TOKEN_FAILED)
        }

        // Check for error in response
        if (jsonResponse.containsKey("errcode")) {
            val errCode = jsonResponse["errcode"]
            val errMsg = jsonResponse["errmsg"]
            logger.error("WeChat OAuth error: code=$errCode, message=$errMsg")
            throw BusinessException(ErrorCode.OAUTH_TOKEN_FAILED)
        }

        return jsonResponse
    }

    /**
     * Get user info from WeChat using access token
     */
    private fun getWeChatUserInfo(accessToken: String, openId: String): Map<String, Any?> {
        val url = buildString {
            append(weChatOAuthProperties.userInfoUrl)
            append("?access_token=$accessToken")
            append("&openid=$openId")
        }

        logger.debug("Requesting WeChat user info from: ${weChatOAuthProperties.userInfoUrl}")

        val response = khttp.get(url)

        if (response.statusCode != 200) {
            logger.error("Failed to get WeChat user info. Status: ${response.statusCode}, Response: ${response.text}")
            // Return minimal info even if user info request fails
            return mapOf("openid" to openId, "nickname" to "微信用户")
        }

        val jsonResponse = try {
            objectMapper.readValue(response.text, Map::class.java) as Map<String, Any?>
        } catch (e: Exception) {
            logger.error("Failed to parse WeChat user info response", e)
            return mapOf("openid" to openId, "nickname" to "微信用户")
        }

        // Check for error in response
        if (jsonResponse.containsKey("errcode")) {
            logger.warn("Failed to get detailed WeChat user info, using basic info")
            return mapOf("openid" to openId, "nickname" to "微信用户")
        }

        return jsonResponse
    }

    /**
     * Find existing user by WeChat OpenID or create new user
     */
    private fun findOrCreateUserByWeChatOpenId(openId: String, weChatUserInfo: Map<String, Any?>): User {
        // Try to find user by WeChat OpenID stored in email field (temporary solution)
        // In production, you should add a separate wechat_openid column to users table
        val tempEmail = "wechat_$openId@weixin.temp"

        val existingUser = userRepository.findByEmail(tempEmail)
        if (existingUser.isPresent) {
            logger.debug("Found existing user with WeChat OpenID: $openId")
            return existingUser.get()
        }

        // Create new user
        val nickname = (weChatUserInfo["nickname"] as? String) ?: "微信用户${openId.take(8)}"
        val avatar = (weChatUserInfo["headimgurl"] as? String)

        // Generate unique name to avoid conflicts
        val baseName = nickname.trim().take(20)
        var uniqueName = baseName
        var suffix = 1

        while (userRepository.existsByName(uniqueName)) {
            uniqueName = "${baseName.take(15)}$suffix"
            suffix++
        }

        logger.info("Creating new user from WeChat OAuth. OpenID: $openId, Name: $uniqueName")

        val newUser = User(
            phone = null,
            email = tempEmail,
            passwordHash = "", // No password for OAuth users
            name = uniqueName,
            avatar = avatar,
            idCardVerified = false,
            driverLicenseVerified = false,
            role = com.p2pcar.entity.UserRole.RENTER
        )

        return userRepository.save(newUser)
    }
}
