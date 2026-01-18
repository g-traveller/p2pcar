package com.p2pcar.service

import com.p2pcar.exception.BusinessException
import com.p2pcar.exception.ErrorCode
import org.slf4j.LoggerFactory
import org.springframework.data.redis.core.RedisTemplate
import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.stereotype.Service
import java.util.Random
import java.util.concurrent.TimeUnit

/**
 * Service for sending and verifying verification codes
 * Supports both phone (SMS) and email verification
 */
@Service
class VerificationCodeService(
    private val redisTemplate: RedisTemplate<String, Any>,
    private val mailSender: JavaMailSender?
) {
    private val logger = LoggerFactory.getLogger(VerificationCodeService::class.java)
    private val codeLength = 6
    private val codeExpiryMinutes = 5L
    private val random = Random()

    companion object {
        // Redis key prefixes
        private const val PHONE_CODE_PREFIX = "verify:code:phone:"
        private const val EMAIL_CODE_PREFIX = "verify:code:email:"
        private const val PHONE_COUNTER_PREFIX = "verify:counter:phone:"
        private const val EMAIL_COUNTER_PREFIX = "verify:counter:email:"

        // Maximum attempts per hour
        private const val MAX_ATTEMPTS_PER_HOUR = 10
    }

    /**
     * Send verification code to phone or email
     * @param type "phone" or "email"
     * @param target phone number or email address
     * @return expiry timestamp in milliseconds
     */
    fun sendVerificationCode(type: String, target: String?): Long {
        if (target.isNullOrBlank()) {
            throw BusinessException(ErrorCode.BAD_REQUEST, "Target phone or email is required")
        }

        val (keyPrefix, counterPrefix) = when (type.lowercase()) {
            "phone" -> {
                if (!target.matches(Regex("^1[3-9]\\d{9}$"))) {
                    throw BusinessException(ErrorCode.BAD_REQUEST, "Invalid phone number format")
                }
                PHONE_CODE_PREFIX to PHONE_COUNTER_PREFIX
            }
            "email" -> {
                if (!target.matches(Regex("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$"))) {
                    throw BusinessException(ErrorCode.BAD_REQUEST, "Invalid email format")
                }
                EMAIL_CODE_PREFIX to EMAIL_COUNTER_PREFIX
            }
            else -> throw BusinessException(ErrorCode.BAD_REQUEST, "Invalid type, must be 'phone' or 'email'")
        }

        // Check rate limit
        val counterKey = "$counterPrefix$target"
        val attempts = redisTemplate.opsForValue().get(counterKey) as? Long ?: 0
        if (attempts >= MAX_ATTEMPTS_PER_HOUR) {
            throw BusinessException(ErrorCode.BAD_REQUEST, "Too many verification code requests, please try again later")
        }

        // Generate and store code
        val code = generateCode()
        val key = "$keyPrefix$target"
        redisTemplate.opsForValue().set(key, code, codeExpiryMinutes, TimeUnit.MINUTES)

        // Increment counter
        redisTemplate.opsForValue().increment(counterKey)
        redisTemplate.expire(counterKey, 1, TimeUnit.HOURS)

        // Send the code
        when (type.lowercase()) {
            "phone" -> sendSmsCode(target, code)
            "email" -> sendEmailCode(target, code)
        }

        val expiresAt = System.currentTimeMillis() + (codeExpiryMinutes * 60 * 1000)
        logger.info("Verification code sent to $type: $target, expires at: $expiresAt")
        return expiresAt
    }

    /**
     * Verify the code provided by user
     * @param type "phone" or "email"
     * @param target phone number or email address
     * @param code verification code from user
     */
    fun verifyCode(type: String, target: String?, code: String?) {
        if (target.isNullOrBlank() || code.isNullOrBlank()) {
            throw BusinessException(ErrorCode.VERIFICATION_CODE_INVALID)
        }

        val keyPrefix = when (type.lowercase()) {
            "phone" -> PHONE_CODE_PREFIX
            "email" -> EMAIL_CODE_PREFIX
            else -> throw BusinessException(ErrorCode.BAD_REQUEST, "Invalid type, must be 'phone' or 'email'")
        }

        val key = "$keyPrefix$target"
        val storedCode = redisTemplate.opsForValue().get(key) as? String

        if (storedCode == null) {
            throw BusinessException(ErrorCode.VERIFICATION_CODE_INVALID, "Verification code expired or not found")
        }

        if (storedCode != code) {
            throw BusinessException(ErrorCode.VERIFICATION_CODE_INVALID, "Invalid verification code")
        }

        // Remove the code after successful verification
        redisTemplate.delete(key)
        logger.info("Verification code verified for $type: $target")
    }

    /**
     * Generate a random 6-digit verification code
     */
    private fun generateCode(): String {
        val code = StringBuilder()
        repeat(codeLength) {
            code.append(random.nextInt(10))
        }
        return code.toString()
    }

    /**
     * Send SMS verification code (mock implementation)
     * In production, integrate with SMS service providers like:
     * - Alibaba Cloud SMS
     * - Tencent Cloud SMS
     * - Huawei Cloud SMS
     */
    private fun sendSmsCode(phone: String, code: String) {
        logger.info("MOCK: Sending SMS code to $phone: $code")
        // TODO: Integrate with real SMS service
        // Example with Alibaba Cloud SMS:
        // val request = SendSmsRequest()
        // request.phoneNumbers = phone
        // request.signName = "车享出行"
        // request.templateCode = "SMS_TEMPLATE_CODE"
        // request.templateParam = "{\"code\":\"$code\"}"
        // smsClient.sendSmsRequest(request)
    }

    /**
     * Send email verification code
     */
    private fun sendEmailCode(email: String, code: String) {
        if (mailSender == null) {
            logger.warn("Email sender not configured, skipping email send to $email")
            logger.info("MOCK: Email verification code for $email: $code")
            return
        }

        try {
            val message = SimpleMailMessage()
            message.setTo(email)
            message.subject = "车享出行 - 验证码"
            message.text = """
                您好！

                您的验证码是：$code

                该验证码5分钟内有效，请尽快完成验证。

                如果您没有请求此验证码，请忽略此邮件。

                车享出行团队
            """.trimIndent()

            mailSender.send(message)
            logger.info("Email verification code sent to $email")
        } catch (e: Exception) {
            logger.error("Failed to send email to $email", e)
            throw BusinessException(ErrorCode.INTERNAL_ERROR, "Failed to send verification email")
        }
    }
}
