import styled from 'styled-components';

const ProductsContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  span {
    color: #808080;
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    justify-content: space-between;
  }
`;

const Card = styled.div`
  width: 42vw;

  background-color: #ffffff;

  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px rgba(227, 151, 116, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;

  padding: 10px;

  @media (min-width: 1100px) {
    width: 20vw;

    margin-right: 20px;
  }
`;

const Image = styled.img`
  width: 30vw;
  height: 30vw;

  border-radius: 10px;
  border: 2px solid #326273;

  object-fit: cover;
  margin-bottom: 10px;

  @media (min-width: 1100px) {
    width: 15vw;
    height: 15vw;
  }
`;

const ProductName = styled.h3`
  width: 30vw;
  color: #283d3b;

  font-size: 20px;
  text-align: left;

  margin-bottom: 10px;
  overflow: hidden;

  @media (min-width: 1100px) {
    width: 15vw;
  }
`;

const Price = styled.h3`
  width: 30vw;
  color: #772e25;

  font-size: 20px;
  text-align: left;

  margin-bottom: 10px;
  overflow: hidden;

  @media (min-width: 1100px) {
    width: 15vw;
  }
`;

export {
  ProductsContainer, Card, Image, ProductName, Price,
};
