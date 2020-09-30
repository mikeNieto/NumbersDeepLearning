export const callRecognizeService = (user, imageBase64) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({"user": user, "base64Img": imageBase64});

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/images/recognize", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.error('error', error));

}