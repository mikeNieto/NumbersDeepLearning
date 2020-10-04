## Numbers AI Predictor Project



### To run the app with Docker
- Build docker image
`docker build -t mikenieto/numbersai .`

- Run locally
`docker run --rm --name mikenieto/numbersai -p 5000:5000 numbersai`

-- Push image
`docker push mikenieto/numbersai`

### IntelliJ - PyCharm Configuration
In _File / Project Structure..._ select as a Project SDK a new folder venv in
the same folder of the project

<img src="../images/IDE-Python-SDK.png" alt="IDE - Python - SDK">

Additionally, you can add a Flask Server configuration to run it in a Dev mode
using the _Edit Configurations..._

<img src="../images/IDE-Python-FlaskServer.png" alt="IDE - Python - Flask server">

Add then run it

<img src="../images/IDE-Python-DevServer.png" alt="IDE - Python - Dev Server">
