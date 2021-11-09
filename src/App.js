import React from 'react';
import Signin from './Components/Signin';
import {ContextLogin} from "./Services/Context";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";

function App(){
    const [loggedUser, setLoggedUser] = useState({});
    return(
        <ContextLogin.Provider value = {{loggedUser, setLoggedUser}}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Signin/>}/>
                </Routes>
            </BrowserRouter>
        </ContextLogin.Provider>
    );
}

export default App;