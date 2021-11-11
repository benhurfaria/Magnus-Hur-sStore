import axios from "axios";
import {api} from "./urlApi"

function signIn(body){
    const promise = axios.post(api+"sign-in", body);
    promise.catch(err=>{
        if(err.response.status === 401){
            alert("Conta nao cadastrada");
        }
    });
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

export {
    signIn,
    getProducts,
    getProductsAlpha,
    getProductsLower,
    getProductsHigher,
}