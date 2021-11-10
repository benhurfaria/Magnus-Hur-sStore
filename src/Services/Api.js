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
function signUp(body){
    const promise = axios.post(api+"sign-up", body);
    
    promise.catch(err=>{
        if(err.response.status === 400){
            alert("Não foi possivel cadastrar");
        }
        if(err.response.status === 500){
            alert("servidor fora de área");
        }
    });
    
    return promise;
}
export {signIn, signUp}