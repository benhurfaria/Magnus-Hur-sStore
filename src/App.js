import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart/Cart.js';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import { ContextLogin } from './Services/Context';
import Home from './Components/pages/Home';
import Product from './Components/pages/Product';
import Checkout from './Components/Checkout.js';

export default function App() {
  const [loggedUser, setLoggedUser] = useState({});
  return (

        <ContextLogin.Provider value = {{ loggedUser, setLoggedUser }}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/home" element={<Home />}/>
                    <Route exact path="product/:id" element={<Product />} />
                    <Route exact path="/sign-in" element={<Signin/>}/>
                    <Route exact path="/sign-up" element={<Signup/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                </Routes>
            </BrowserRouter>
        </ContextLogin.Provider>
  );
}
