from flask import Flask
from flask_restful import Resource, Api, reqparse, abort

from .predictor import predict_number

app = Flask(__name__)
api = Api(app)

MATRIX_VALUE = 'matrix_value'
parser = reqparse.RequestParser()
parser.add_argument(MATRIX_VALUE, action='append')


def abort_if_not_value_matrix(args):
    if args[MATRIX_VALUE] is None:
        abort(400, message=f'{MATRIX_VALUE} is required in the body message')


def get_matrix_int(matrix_raw):
    try:
        matrix_values = []
        for row in matrix_raw:
            matrix_values.append(list(int(x) for x in (row.replace("[", "").replace("]", "").split(", "))))

        return matrix_values
    except ValueError:
        abort(400, message=f'{MATRIX_VALUE} should be a matrix of ints')


class HelloWorld(Resource):
    def post(self):
        args = parser.parse_args()
        print(args)
        abort_if_not_value_matrix(args)

        matrix = get_matrix_int(args[MATRIX_VALUE])
        return predict_number(matrix)


api.add_resource(HelloWorld, '/numbers/predict')
