export const callRecognizeService = async (user, imageBase64) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({"user": user, "base64Img": imageBase64});

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return await fetch("http://localhost:8080/images/recognize", requestOptions)
}