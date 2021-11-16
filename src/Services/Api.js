import axios from "axios";
import { api } from "./urlApi";

function signIn(body) {
    const promise = axios.post(api + "sign-in", body);
    return promise;
}

function signUp(body) {
    const promise = axios.post(api + "sign-up", body);

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

    const promise = axios.post(`${api}add`, body, config);
    return promise;
}

function getCart(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const promise = axios.get(`${api}cart`, config);
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
