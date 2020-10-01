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
        padding: theme.spacing(4, 6),
    },
}));

const NumberCanvas = props => {
    const classes = useStyles();
    let canvas;

    const handleClean = () => {
        canvas.clear();
    }

    const handlePredict = () => {
        const data = canvas.canvasContainer.children[1].toDataURL();

        const result = callRecognizeService("Mike", JSON.stringify(data).replace(/"/g, ""));
        result.then(response => response.json())
            .then(result =>  {
                const {predicted} = result
                console.log(result);
                alert(predicted)
            })
            .catch(error => console.error('error', error));

        canvas.clear();
    }

    return (
        <div>
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

        </div>
    );
};

export default NumberCanvas;