import styled from 'styled-components';

const Top = styled.header`
  font-family: 'Mochiy Pop P One', sans-serif;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #326273;
  color: white;
  font-size: 16px;
  padding: 0 20px 0  20px;
`;
const CartPage = styled.div`
  background-color: #ffffff;
  width: 100vw;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;
const CartContainer = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100vw;
  height: 570px;
  flex-direction: column;
  //justify-content: space-around;
`;
const CartTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #326273;
  font-size: 24px;
  width: 100vw;
  padding-left: 20px;
`;
const CartItens = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 10px 5px 10px 5px;
  height: 50vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
const EmptyCart = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
`;
const CartResume = styled.div`
  height: 200px;
  width: 100vw;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Iten = styled.div`
  margin: 10px 0 10px 0;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
`;
const Img = styled.img`
  width: 30px;
  height: 40px;
`;
const RemoveButton = styled.button`
  border: none;
  background-color: #ffffff;
  font-size: 16px;
`;
const ItenValue = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #326273;
`;
const ItenQtd = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100px;
`;
const PlusButton = styled.button`
  border: none;
  color: green;
  background-color: #ffffff;
  font-size: 25px;
`;
const MinusButton = styled.button`
  border: none;
  color: red;
  background-color: #ffffff;
  font-size: 25px;
`;
const CloseOrder = styled.button`
  border: none;
  background-color: #326273;
  color: #ffffff;
  width: 80%;
  height: 45px;
  font-size: 26px;
  border-radius: 6px;
`;
const FinalValue = styled.div`
`;
const CartMenu = styled.div`
  display: flex;
  align-items: center;
`;
const CartCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 25px;
  width: 25px;
  font-size: 16px;
  background-color: #ffffff;
  color: #326273;
`;
export {
  Top, CartPage, Menu, CartContainer, CartItens, CartResume, Iten,
  Img, RemoveButton, ItenValue, ItenQtd, PlusButton, MinusButton, CloseOrder, FinalValue,
  CartMenu, CartCounter, CartTitle, EmptyCart,
};
