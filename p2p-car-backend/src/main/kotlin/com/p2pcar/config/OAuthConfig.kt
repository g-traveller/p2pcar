package com.p2pcar.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.bind.ConstructorBinding
import org.springframework.stereotype.Component

@Component
@ConfigurationProperties(prefix = "oauth.wechat")
data class WeChatOAuthProperties(
    val enabled: Boolean = true,
    val appId: String,
    val appSecret: String,
    val redirectUri: String,
    val scope: String = "snsapi_login",
    val authorizeUrl: String = "https://open.weixin.qq.com/connect/qrconnect",
    val accessTokenUrl: String = "https://api.weixin.qq.com/sns/oauth2/access_token",
    val userInfoUrl: String = "https://api.weixin.qq.com/sns/userinfo"
) {
    fun getAuthorizeUrl(state: String): String {
        return "$authorizeUrl?appid=$appId&redirect_uri=$redirectUri&response_type=code&scope=$scope&state=$state#wechat_redirect"
    }
}
