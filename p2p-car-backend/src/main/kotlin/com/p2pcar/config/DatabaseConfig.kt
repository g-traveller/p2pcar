package com.p2pcar.config

import org.springframework.context.annotation.Configuration
import org.springframework.data.jpa.repository.config.EnableJpaAuditing
import jakarta.persistence.PrePersist
import jakarta.persistence.PreUpdate
import java.time.LocalDateTime

@Configuration
@EnableJpaAuditing
class DatabaseConfig

class EntityListener {
    @PrePersist
    fun onPrePersist(entity: Any) {
        if (entity is TimestampEntity) {
            entity.createdAt = LocalDateTime.now()
            entity.updatedAt = LocalDateTime.now()
        }
    }

    @PreUpdate
    fun onPreUpdate(entity: Any) {
        if (entity is TimestampEntity) {
            entity.updatedAt = LocalDateTime.now()
        }
    }
}

interface TimestampEntity {
    var createdAt: LocalDateTime
    var updatedAt: LocalDateTime
}
