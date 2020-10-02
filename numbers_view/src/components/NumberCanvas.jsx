import React from 'react';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import CanvasDraw from "react-canvas-draw";
import {Button} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {callRecognizeService} from "../api/imageAPI";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(4),
    },
}));

const NumberCanvas = ({handleNewResult}) => {
    const classes = useStyles();
    let canvas;

    const handleClean = () => {
        canvas.clear();
    }

    const createData = (image, imgProcessed, prediction, accuracy) => {
        return {image, imgProcessed, prediction, accuracy};
    }

    const handlePredict = () => {
        const data = canvas.canvasContainer.children[1].toDataURL();

        const result = callRecognizeService("Mike", JSON.stringify(data).replace(/"/g, ""));
        result.then(response => response.json())
            .then(response => {
                const {predicted, accuracy, base64ImgGenerated} = response
                handleNewResult(
                    createData(data, base64ImgGenerated, predicted, (accuracy*100).toFixed(2))
                );
            })
            .catch(error => console.error('error', error));

        canvas.clear();
    }

    return (
        <Paper className={classes.paper}>
            <CanvasDraw
                ref={canvasDraw => (canvas = canvasDraw)}
                brushColor={"blue"}
                lazyRadius={0}
                canvasWidth={300}
                canvasHeight={300}
            />
            <ButtonGroup disableElevation variant="contained">
                <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    onClick={handleClean}
                >
                    Clear
                </Button>
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={handlePredict}
                >
                    Predict
                </Button>
            </ButtonGroup>
        </Paper>
    );
};

export default NumberCanvas;