package com.p2pcar.config

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.mail.javamail.JavaMailSenderImpl

/**
 * Mail configuration for email verification
 * Only creates JavaMailSender bean if MAIL_HOST is configured
 */
@Configuration
class MailConfig {

    @Bean
    @ConditionalOnProperty(name = ["app.mail.enabled"], havingValue = "true", matchIfMissing = false)
    fun javaMailSender(): JavaMailSender {
        return JavaMailSenderImpl()
    }
}
