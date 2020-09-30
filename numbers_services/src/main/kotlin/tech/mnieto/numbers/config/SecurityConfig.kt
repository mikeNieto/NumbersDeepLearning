package tech.mnieto.numbers.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.http.HttpStatus
import org.springframework.web.cors.reactive.CorsUtils
import org.springframework.web.server.WebFilter
import reactor.core.publisher.Mono

@Configuration
class SecurityConfig {
    companion object {
        const val ALLOWED_HEADERS = "x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN"
        const val ALLOWED_METHODS = "GET, PUT, POST, DELETE, OPTIONS"
        const val ALLOWED_ORIGIN = "*"
        const val MAX_AGE = "3600"
    }

    @Bean
    fun corsFilter(): WebFilter {
        return WebFilter { ctx, chain ->
            val request = ctx.request
            if (CorsUtils.isCorsRequest(request)) {
                val response = ctx.response
                val headers = response.headers
                headers.add("Access-Control-Allow-Origin", ALLOWED_ORIGIN)
                headers.add("Access-Control-Allow-Methods", ALLOWED_METHODS)
                headers.add("Access-Control-Max-Age", MAX_AGE)
                headers.add("Access-Control-Allow-Headers", ALLOWED_HEADERS)
                if (request.method === HttpMethod.OPTIONS) {
                    response.statusCode = HttpStatus.OK
                    return@WebFilter Mono.empty<Void>()
                }
            }
            chain.filter(ctx)
        }
    }
}