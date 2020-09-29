import React from 'react';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import CanvasDraw from "react-canvas-draw";
import {Button} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";

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
    let saveableCanvas;

    const handleClean = () => {
        saveableCanvas.clear();
    }

    const handlePredict = () => {
        saveableCanvas.hideGrid = true;

        const data = saveableCanvas.canvasContainer.children[1].toDataURL();
        console.log(data);
    }

    return (
        <div>
            <Paper className={classes.paper}>
                <CanvasDraw
                    ref={canvasDraw => (saveableCanvas = canvasDraw)}
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