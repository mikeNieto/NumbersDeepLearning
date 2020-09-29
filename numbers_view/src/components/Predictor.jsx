import React from 'react';
import ButtonAppBar from "./AppBar";
import NumberCanvas from "./NumberCanvas";

const Predictor = props => {
    return (
        <div>
            <ButtonAppBar name={"Test"} {...props}/>
            <NumberCanvas/>
        </div>
    );
}

export default Predictor;