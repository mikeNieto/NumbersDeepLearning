import React from 'react';
import Login from "./components/Login";
import Predictor from "./components/Predictor";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {atom, RecoilRoot} from "recoil";

export const userState = atom({
    key: 'userState',
    default:
        {
            name: "",
            results: []
        },
});

function App() {

    return (
        <RecoilRoot>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={(props) => <Login {...props}/>}/>
                    <Route exact path="/predictor" component={Predictor}/>
                    <Route path="*" component={Login}/>
                </Switch>
            </BrowserRouter>
        </RecoilRoot>
    )
}

export default App;
