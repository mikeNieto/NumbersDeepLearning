package tech.mnieto.numbers.util

import java.awt.Color
import java.awt.Image
import java.awt.image.BufferedImage
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.util.*
import javax.imageio.ImageIO


fun reformatImage(sourceData: String): Map<String, Any> {
    val imageTypeData = sourceData.split(",")[0]
    val imageString = sourceData.split(",")[1]
    val imageByte = Base64.getDecoder().decode(imageString)
    val bis = ByteArrayInputStream(imageByte)
    var image = ImageIO.read(bis)

    image = resize(image, 28, 28)
    image = toGrey(image)
    bis.close()

    return mapOf("imageArray" to toArray(image), "base64ImgGenerated" to base64ImgGenerated(image, imageTypeData))
}

fun resize(img: BufferedImage, newW: Int, newH: Int): BufferedImage {
    val tmp: Image = img.getScaledInstance(newW, newH, Image.SCALE_SMOOTH)
    val dImg = BufferedImage(newW, newH, BufferedImage.TYPE_INT_ARGB)
    val g2d = dImg.createGraphics()
    g2d.drawImage(tmp, 0, 0, null)
    g2d.dispose()
    return dImg
}

fun toGrey(img: BufferedImage): BufferedImage {
    val copy = BufferedImage(img.width, img.height, BufferedImage.TYPE_BYTE_GRAY)
    val g2d = copy.createGraphics()
    g2d.color = Color.WHITE // Or what ever fill color you want...

    g2d.fillRect(0, 0, copy.width, copy.height)
    g2d.drawImage(img, 0, 0, null)
    g2d.dispose()
    return copy
}

fun toArray(img: BufferedImage): Array<IntArray> {
    val imgArray = Array(img.width) { IntArray(img.height) }

    for (i in 0 until img.width) {
        for (j in 0 until img.height) {
            imgArray[i][j] = 255 - img.raster.getSample(j, i, 0)
        }
    }

    return imgArray
}

fun base64ImgGenerated(image: BufferedImage, imageTypeData: String): String {
    val imgType = imageTypeData.split(";")[0].split("/")[1]
    val os = ByteArrayOutputStream()
    ImageIO.write(image, imgType, os)

    return "${imageTypeData},${Base64.getEncoder().encodeToString(os.toByteArray())}"
}