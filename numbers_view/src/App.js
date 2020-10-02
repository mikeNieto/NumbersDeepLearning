import React, {useState} from 'react';
import Login from "./components/Login";
import Predictor from "./components/Predictor";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {

    const [name, setName] = useState("");

    const handleAddName = (newName) => {
        setName(newName);
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={(props) => <Login handleAddName={handleAddName} {...props}/>}/>
                <Route exact path="/predictor" render={(props) => <Predictor name={name} {...props}/>}/>
                <Route path="*" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
