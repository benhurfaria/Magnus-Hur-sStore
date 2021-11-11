import axios from 'axios';

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

export { removeFromCart, getCartItens };
