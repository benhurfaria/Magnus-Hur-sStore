import axios from "axios";
import { api } from "./urlApi";

function signIn(body) {
    const promise = axios.post(api + "sign-in", body);
    return promise;
}

function signUp(body) {
    const promise = axios.post(api + "sign-up", body);

    // promise.catch((err) => {
    //     if (err.response.status === 400) {
    //         alert("Não foi possivel cadastrar");
    //     }
    //     if (err.response.status === 500) {
    //         alert("servidor fora de área");
    //     }
    // });

    return promise;
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

function addToCart(body, token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    console.log(body);
    const promise = axios.post(`${api}add`, body, config);
    return promise;
}

function getCart(id) {
    const promise = axios.get(`${api}cart`);
    return promise;
}

export {
    signIn,
    signUp,
    getProducts,
    getProductsAlpha,
    getProductsLower,
    getProductsHigher,
    getProductById,
    addToCart,
    getCart,
};
