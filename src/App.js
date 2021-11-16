import React, { useEffect } from "react";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import { ContextLogin } from "./Services/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/pages/Home";
import Product from "./Components/pages/Product";

function App() {
    const [loggedUser, setLoggedUser] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {}, [cart]);

    return (
        <ContextLogin.Provider
            value={{ loggedUser, setLoggedUser, cart, setCart }}
        >
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/login"
                        element={
                            <Signin
                                loggedUser={loggedUser}
                                setLoggedUser={setLoggedUser}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/"
                        element={
                            <Home
                                cart={cart}
                                setCart={setCart}
                                loggedUser={loggedUser}
                            />
                        }
                    />
                    <Route
                        exact
                        path="product/:id"
                        element={
                            <Product
                                cart={cart}
                                setCart={setCart}
                                loggedUser={loggedUser}
                            />
                        }
                    />
                    <Route exact path="/sign-in" element={<Signin />} />
                    <Route exact path="/sign-up" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </ContextLogin.Provider>
    );
}

export default App;
