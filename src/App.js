import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from './Components/Signup';

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/sign-up" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;