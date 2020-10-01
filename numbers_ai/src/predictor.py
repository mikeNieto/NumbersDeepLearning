import numpy as np
from tensorflow.keras.models import load_model

cnn = load_model('./src/model/dcnn.h5')


def predict(matrix_value):
    np_array = np.asarray(matrix_value)
    np_array = np_array.reshape(1, 28, 28, 1).astype('float32')
    np_array /= 255
    prediction = cnn.predict(np_array)

    return prediction.argmax(), prediction.max(), prediction


def predict_number(matrix_value):
    predictions = predict(matrix_value)

    results = {
        "predicted": int(predictions[0]),
        "accuracy": float(predictions[1]),
        "complete_prediction": predictions[2].tolist()[0],
    }

    return results

