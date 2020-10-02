import React, {useState} from 'react';
import ButtonAppBar from "./AppBar";
import NumberCanvas from "./NumberCanvas";
import Results from "./Results";
import {Grid} from "@material-ui/core";

const Predictor = props => {
    const [results, setResults] = useState([]);

    const handleNewResult = (newResult) => {
        setResults([newResult, ...results]);
    }

    return (
        <div>
            <ButtonAppBar {...props}/>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <NumberCanvas handleNewResult={handleNewResult}/>
                </Grid>
                <Grid item xs={9}>
                    <Results res={results}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Predictor;