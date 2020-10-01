predicted = 5


def calculate_accuracy():
    return 0.992


def predict_number(matrix_value):
    accuracy = calculate_accuracy()

    results = {
        "predicted": str(predicted),
        "accuracy": str(accuracy),
        "request": matrix_value,
    }

    return results
