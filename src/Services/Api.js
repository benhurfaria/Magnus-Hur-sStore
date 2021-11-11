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

export {
    signIn,
    getProducts,
}