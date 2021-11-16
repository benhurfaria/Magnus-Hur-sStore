/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { PageContainer } from '../styles/PageContainer';
import Header from '../Header';
import {
  Arrow,
  Menu,
  MenuBar,
  Order,
  PageOrder,
  PageTitle,
} from '../styles/PageTitle';
import ProductsCard from '../ProductsCard.js';
import { ProductsContainer } from '../styles/ProductsStyle';
import {
  getProducts,
  getProductsAlpha,
  getProductsHigher,
  getProductsLower,
// eslint-disable-next-line import/named
} from '../../Services/Api';

export default function Home() {
  const [modal, setModal] = useState(false);

  const [navbar, setNavbar] = useState(false);

  function navbarCard() {
    if (navbar === false) {
      setNavbar(true);
    }
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <PageContainer>
      <Header />

      <PageOrder>
        <PageTitle>Aproveite</PageTitle>
        <Order onClick={() => setNavbar(true)}>
          <span>Ordenar por</span>
          <Arrow transform={navbar ? 'rotate(180deg)' : ''} />
        </Order>
      </PageOrder>
      {navbar ? (
        <MenuOrder setNavbar={setNavbar} setProducts={setProducts} />
      ) : (
        ''
      )}
      <ProductsContainer>
        {products.length ? (
          products.map((prod, index) => (
            <ProductsCard
              key={index}
              id={prod.id}
              name={prod.name}
              price={prod.price}
              image={prod.imgeUrl}
            />
          ))
        ) : (
          <span>Não há produtos cadastrados</span>
        )}
      </ProductsContainer>
    </PageContainer>
  );
}

function MenuOrder({ setNavbar, setProducts }) {
  function closeNavbar() {
    setNavbar(false);
  }

  function alpha() {
    getProductsAlpha()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }

  function lowerPrice() {
    getProductsLower()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }

  function higherPrice() {
    getProductsHigher()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <Menu onClick={closeNavbar}>
      <MenuBar>
        <button onClick={() => alpha()}>A-Z</button>
        <button onClick={() => lowerPrice()}>Menor preço</button>
        <button onClick={() => higherPrice()}>Maior preço</button>
      </MenuBar>
    </Menu>
  );
}
