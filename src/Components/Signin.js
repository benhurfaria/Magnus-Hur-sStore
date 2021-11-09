import styled from "styled-components";
import Title from "./Title";
import {Link, useNavigate} from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { ContextLogin } from '../Services/Context.js';
import { storeUser, getStoredUser } from "../Services/loginPersistence.js";
import {api} from "../Services/urlApi.js"

export default function Signin(){
    const {loggedUser, setLoggedUser} = useContext(ContextLogin);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();
    function login(){

        const body = {
            email,
            password
        }
        
        const promise = axios.post(api+"signin", body);

        promise.then(resp=>{

            storeUser(resp.data);
            setLoggedUser(resp.data);
            history("/store");

        }).catch(err=>{
            if(err.response.status === 401){
                alert("Conta nao cadastrada");
            }
        });
    }

    useEffect(()=>{
        const user = getStoredUser();
        user ? history("/store") : history("/");
    },[history]);
    
    return(
        <Principal>
            <Title/>
            <Input placeholder="E-mail" type="email" value={email} onChange={e=> setEmail(e.target.value)}/>
            <Input placeholder="Senha" value={password} onChange={e=>setPassword(e.target.value)} type="password"/>
            <Botao>Login</Botao>
            <Link to="/sign-up">
                <Texto>Primeira vez? Cadastre-se</Texto> 
            </Link>
        </Principal>
    )
}
const Principal = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
` 
const Texto = styled.p`
    text-align: center;
    margin-top:20px;
    font-family: 'Mochiy Pop P One', sans-serif;
    font-size: 14px;
    color: #FFFFFF;
`
const Input = styled.input`
    background: #FFFFFF;
    border-radius: 5px;
    width: 30%;
    height: 50px;
    margin-bottom: 10px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #000000;
    border: none;
    padding-left: 15px;
    :focus{
        outline: transparent;
    }
`;

const Botao = styled.button`
    background-color: red;
    width: 30%;
    height: 48px;
    margin-bottom:35px;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    margin-top: 10px;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    :focus{
        outline: transparent;
    }
`