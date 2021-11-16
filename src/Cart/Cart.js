/* eslint-disable no-console */
/* eslint-disable no-unneeded-ternary */
import { useState, useEffect } from 'react';
import { IoCart, IoArrowBack } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { getCartItens, itenRemove } from '../Services/Api.js';
import {
  Top, CartPage, Menu, CartContainer, CartItens, CartResume, Iten,
  Img, RemoveButton, ItenValue, CloseOrder, FinalValue,
  CartMenu, CartCounter, CartTitle, EmptyCart, ItenQtd,
} from './Cart_style.js';

export default function Cart() {
  const [counter, setCounter] = useState(0);
  const [itens, setItens] = useState([]);
  useEffect(() => {
    const promise = getCartItens();
    promise.then((res) => {
      setItens(res.data.itens);
      setCounter(res.data.qtd);
    });
  }, []);
  function getTotalValue() {
    let total = 0;
    itens.forEach((iten) => { total += iten.unitaryPrice * iten.qtd; });
    return (total / 100).toFixed(2);
  }
  const navigate = useNavigate();
  function removeIten(e) {
    const stay = [];
    const remove = [];
    itens.forEach((el) => {
      if (el.cartProductsId !== Number(e.target.id)) {
        stay.push(el);
      } else {
        itenRemove(el.cartProductsId);
        remove.push(el);
      }
    });
    // eslint-disable-next-line no-console
    setItens([...stay]);
    setCounter(counter - 1);
  }
  function closeOrder() {
    navigate('/checkout');
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
          {!itens.length ? <EmptyCart>O carrinho está vazio</EmptyCart>
            : itens.map((iten, index) => <Iten key={index}>
            <Img src={iten.imgeUrl}/>
              {iten.name}
            <RemoveButton id={iten.cartProductsId}
            onClick={(e) => removeIten(e)}>Remover</RemoveButton>
            <ItenQtd>
            <div>Qtd: {iten.qtd}</div>
            </ItenQtd>
            <ItenValue> R$ {(iten.unitaryPrice / 100).toFixed(2).replace('.', ',')}</ItenValue>
         </Iten>)}
        </CartItens>
        <CartResume>
          Valor Total:
          <FinalValue>R$ {getTotalValue()}</FinalValue>
          <CloseOrder onClick={closeOrder}
                      disabled={!itens.length ? true : false}>Fechar Pedido</CloseOrder>
        </CartResume>
      </CartContainer>
    </CartPage>
  );
}
