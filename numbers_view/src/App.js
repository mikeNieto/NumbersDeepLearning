import React from 'react';
import Login from "./components/Login";
import Predictor from "./components/Predictor";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
    let name;

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={(props) => <Login user={name} {...props}/>}/>
                <Route exact path="/predictor" component={Predictor}/>
                <Route path="*" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
