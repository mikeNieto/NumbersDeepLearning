package tech.mnieto.numbers.services

import org.apache.logging.log4j.LogManager
import org.apache.logging.log4j.Logger
import org.springframework.stereotype.Service
import tech.mnieto.numbers.controller.ImageToPredict
import tech.mnieto.numbers.util.reformatImage

@Service
class ImageServices {

    fun recognizeNumber(imgToPredict: ImageToPredict): Map<String, Any?> {
        LOGGER.info(imgToPredict)
        val imageModifiedMap = reformatImage(imgToPredict.base64Img)

        //TODO: call service

        val recognizedData =
                mapOf("recognized" to 3, "percentage" to .997, "base64ImgGenerated" to imageModifiedMap.get("base64ImgGenerated"))

        LOGGER.info(recognizedData)
        return recognizedData
    }

    companion object {
        val LOGGER: Logger = LogManager.getLogger()
    }
}