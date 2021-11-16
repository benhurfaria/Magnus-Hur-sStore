import { useState, useEffect } from 'react';
import { IoCart, IoArrowBack } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { getCartItens, addToSales } from '../Services/Api.js';
import {
  Top,
  CartPage,
  Menu,
  CartContainer,
  CartItens,
  CartResume,
  Iten,
  Img,
  ItenValue,
  CloseOrder,
  FinalValue,
  CartMenu,
  CartTitle,
  EmptyCart,
  ItenQtd,
} from './styles/Checkout_style.js';

export default function Checkout() {
  const navigate = useNavigate();
  const [itens, setItens] = useState([]);
  useEffect(() => {
    const promise = getCartItens();
    promise.then((res) => {
      setItens(res.data.itens);
    });
  }, []);
  function getTotalValue() {
    let total = 0;
    itens.forEach((iten) => {
      total += iten.unitaryPrice * iten.qtd;
    });
    return (total / 100).toFixed(2);
  }
  function endOrder() {
    addToSales(itens);
    navigate('/home');
  }
  return (
    <CartPage>
      <Top>
        <Link to="/cart">
          <IoArrowBack fontSize="30px" />
        </Link>
        Magnus&Hur's
        <Menu>
          <CartMenu>
            <IoCart color="#ffffff" fontSize="30px" />
          </CartMenu>
        </Menu>
      </Top>
      <CartContainer>
        <CartTitle>Checkout</CartTitle>
        <CartItens>
          {!itens.length ? (
            <EmptyCart>O carrinho está vazio</EmptyCart>
          ) : (
            itens.map((iten, index) => (
              <Iten key={index}>
                <Img src={iten.imgeUrl} />
                {iten.name}
                <ItenQtd>
                  <div>Qtd: {iten.qtd}</div>
                </ItenQtd>
                <ItenValue>
                  {' '}
                  R$ {(iten.unitaryPrice / 100).toFixed(2).replace('.', ',')}
                </ItenValue>
              </Iten>
            ))
          )}
        </CartItens>
        <CartResume>
          Valor Total:
          <FinalValue>R$ {getTotalValue()}</FinalValue>
          <CloseOrder onClick={endOrder}>Finalizar Compra</CloseOrder>
        </CartResume>
      </CartContainer>
    </CartPage>
  );
}
