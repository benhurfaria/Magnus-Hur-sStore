import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart/Cart.js';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import { ContextLogin } from './Services/Context';

export default function App() {
  const [loggedUser, setLoggedUser] = useState({});
  return (
    <ContextLogin.Provider value = {{ loggedUser, setLoggedUser }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/sign-in" element={<Signin/>}/>
        </Routes>
        <Routes>
          <Route exact path="/sign-up" element={<Signup/>}/>
        </Routes>
        <Routes>
          <Route path='/cart' element={<Cart/>}/>
       </Routes>
    </BrowserRouter>
  </ContextLogin.Provider>
  );
}
