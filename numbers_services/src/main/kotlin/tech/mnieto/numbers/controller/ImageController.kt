package tech.mnieto.numbers.controller

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import tech.mnieto.numbers.services.ImageServices

@RestController
@RequestMapping("/images")
class ImageController(private val imageServices: ImageServices) {

    @PostMapping("/recognize")
    fun predictImage(@RequestBody imgToPredict: ImageToPredict) =
            imageServices.recognizeNumber(imgToPredict)

}