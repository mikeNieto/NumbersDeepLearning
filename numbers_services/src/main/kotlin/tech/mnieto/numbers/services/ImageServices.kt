package tech.mnieto.numbers.services

import org.apache.logging.log4j.LogManager
import org.apache.logging.log4j.Logger
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono
import tech.mnieto.numbers.controller.ImageToPredict
import tech.mnieto.numbers.util.apiCall
import tech.mnieto.numbers.util.reformatImage

@Service
class ImageServices {

    fun recognizeNumber(imgToPredict: ImageToPredict): Mono<Map<String, Any?>> {
        LOGGER.info(imgToPredict)
        val imageModifiedMap = reformatImage(imgToPredict.base64Img)
        val body = mapOf("matrix_value" to imageModifiedMap["imageArray"])

        return apiCall(body)
                .log()
                .flatMap { res ->
                    Mono.just(mapOf(
                            "predicted" to res["predicted"],
                            "accuracy" to res["accuracy"],
                            "complete_prediction" to res["complete_prediction"],
                            "base64ImgGenerated" to imageModifiedMap["base64ImgGenerated"]
                    ))
                }
    }


    companion object {
        val LOGGER: Logger = LogManager.getLogger()
    }
}