package tech.mnieto.numbers.util

import org.springframework.web.reactive.function.BodyInserters
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.web.reactive.function.client.bodyToMono

fun apiCall(body: Map<String, Any?>) =
        WebClient.create("http://127.0.0.1:5000/numbers/predict")
                .post()
                .body(BodyInserters.fromValue(body as Map<String, *>))
                .retrieve()
                .bodyToMono<Map<String, Any>>()