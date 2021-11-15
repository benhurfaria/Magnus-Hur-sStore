/* eslint-disable no-console */
import axios from 'axios';
import { api } from './urlApi';

const urlApi = 'http://localhost:4000';
function removeFromCart() {
  const body = {
    id: 1,
  };
  const route = '/removefromcart';
  axios.post(urlApi + route, body);
}

function getCartItens(id) {
  const route = '/cartitens/';
  const promise = axios.get(urlApi + route + id);
  promise.catch((err) => {
    console.log(err);
  });
  return promise;
}

function signIn(body) {
  const route = '/sign-in';
  const promise = axios.post(urlApi + route, body);
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
  const route = `/remove/${id}`;
  const promise = axios.delete(urlApi + route);
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
};
