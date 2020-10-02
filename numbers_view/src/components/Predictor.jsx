import React from 'react';
import ButtonAppBar from "./AppBar";
import NumberCanvas from "./NumberCanvas";
import Results from "./Results";
import {Grid} from "@material-ui/core";

const Predictor = props => {
    return (
        <div>
            <ButtonAppBar {...props}/>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <NumberCanvas/>
                </Grid>
                <Grid item xs={9}>
                    <Results/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Predictor;