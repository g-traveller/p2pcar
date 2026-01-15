package com.p2pcar

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

@SpringBootApplication
@EnableJpaAuditing
class P2pCarApplication

fun main(args: Array<String>) {
    runApplication<P2pCarApplication>(*args)
}
