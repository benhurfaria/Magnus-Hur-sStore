/* eslint-disable consistent-return */
/* eslint-disable no-console */
import axios, { Axios } from 'axios';
import { api } from './urlApi';

function removeFromCart() {
  const body = {
    id: 1,
  };
  const route = 'removefromcart';
  axios.post(api + route, body);
}

function getCartItens(id) {
  const route = 'cartitens/';
  const promise = axios.get(api + route + id);
  promise.catch((err) => { console.log(err); });
  return promise;
}

function signIn(body) {
  const route = 'sign-in';
  const promise = axios.post(api + route, body);
  promise.catch((err) => {
    if (err.response.status === 401) {
      // eslint-disable-next-line no-alert
      alert('Conta nao cadastrada');
    }
  });
  return promise;
}
function signUp(body) {
  const route = 'sign-up';
  const promise = axios.post(api + route, body);
  promise.catch((err) => {
    if (err.response.status === 400) {
      // eslint-disable-next-line no-alert
      alert('Não foi possivel cadastrar');
    }
    if (err.response.status === 500) {
      // eslint-disable-next-line no-alert
      alert('servidor fora de área');
    }
  });
  return promise;
}
function itenRemove(id) {
  const route = `remove/${id}`;
  const promise = axios.delete(api + route);
  promise.catch((err) => {
    console.log(err);
  });
}

function getProducts() {
  const promise = axios.get(`${api}products`);
  return promise;
}

function getProductsAlpha() {
  const promise = axios.get(`${api}products?ordenacao=alpha`);
  return promise;
}

function getProductsLower() {
  const promise = axios.get(`${api}products?ordenacao=lowerPrice`);
  return promise;
}

function getProductsHigher() {
  const promise = axios.get(`${api}products?ordenacao=higherPrice`);
  return promise;
}

function getProductById(id) {
  const promise = axios.get(`${api}products/${id}`);
  return promise;
}
function addToCart(productToBuy, userId) {
  const body = {
    name: productToBuy.name,
    price: productToBuy.price,
    imgeUrl: productToBuy.image,
    qtd: productToBuy.quant,
    id: productToBuy.idProducts,
  };
  const promise = axios.post(`${api}addtocart/${userId}`, body);
  promise.catch((err) => { console.log(err); });
}

export {
  signIn,
  signUp,
  getProducts,
  getProductsAlpha,
  getProductsLower,
  getProductsHigher,
  removeFromCart,
  getCartItens,
  itenRemove,
  getProductById,
  addToCart,
};
