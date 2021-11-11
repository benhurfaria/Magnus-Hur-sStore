import { useState, useEffect } from 'react';
import { IoCart, IoArrowBack } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart, getCartItens } from '../Services/Api.js';
import {
  Top, CartPage, Menu, CartContainer, CartItens, CartResume, Iten,
  Img, RemoveButton, ItenValue, CloseOrder, FinalValue,
  CartMenu, CartCounter, CartTitle,
} from './Cart_style.js';

export default function Cart() {
  const [counter, setCounter] = useState(0);
  const [itens, setItens] = useState([]);
  useEffect(() => {
    const id = 1;
    const promise = getCartItens(id);
    promise.then((res) => {
      setItens(res.data.itens);
      setCounter(res.data.qtd);
    });
  }, []);
  function getTotalValue() {
    let total = 0;
    itens.forEach((iten) => { total += iten.unitaryPrice; });
    return (total / 100).toFixed(2);
  }
  const navigate = useNavigate();
  function removeIten() {
    setCounter(counter - 1);
  }
  function closeOrder() {
    removeFromCart();
    navigate('/cart');
  }
  return (
    <CartPage>
      <Top>
        <Link to='/home'>
        <IoArrowBack fontSize='30px'/>
        </Link>
        Magnus&Hur's
        <Menu>
          <CartMenu>
            <IoCart color="#ffffff" fontSize='30px' />
           {counter === 0 ? null : <CartCounter>{counter}</CartCounter>}
          </CartMenu>
        </Menu>
      </Top>
      <CartContainer>
        <CartTitle>Carinho</CartTitle>
        <CartItens>
              {itens.map((iten, index) => <Iten key={index}>
                            <Img src={iten.imgeUrl}/>
                            {iten.name}
                            <RemoveButton onClick={removeIten}>Remover</RemoveButton>
                            <ItenValue> R$ {(iten.unitaryPrice / 100).toFixed(2)}</ItenValue>
                          </Iten>)}
        </CartItens>
        <CartResume>
            Valor Total:
            <FinalValue>R$ {getTotalValue()}</FinalValue>
            <CloseOrder onClick={closeOrder}>Fechar Pedido</CloseOrder>
        </CartResume>
      </CartContainer>
    </CartPage>
  );
}
