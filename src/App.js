import React from 'react';
import Signin from './Components/Signin';
import {ContextLogin} from "./Services/Context";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import Home from './Components/pages/Home';
import Product from './Components/pages/Product';

function App(){
    const [loggedUser, setLoggedUser] = useState({});
    return(
        <ContextLogin.Provider value = {{loggedUser, setLoggedUser}}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Signin />}/>
                    <Route exact path="/home" element={<Home />}/>
                    <Route exact path="product/:id" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </ContextLogin.Provider>
    );
}

export default App;