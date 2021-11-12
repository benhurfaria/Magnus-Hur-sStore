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
    if (err.response.statusCode === 404) {
      // eslint-disable-next-line no-alert
      alert('Não existem itens no carrinho!');
    }
  });
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
function removeIten() {
}

export {
  signIn, signUp,
  removeFromCart, getCartItens, removeIten,
};
