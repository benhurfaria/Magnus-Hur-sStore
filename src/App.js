import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Cart/Cart.js';

export default function App() {
  return (
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<>oi</>}/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
  </BrowserRouter>
  );
}
