import Title from "./Title";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import {Principal, Texto, Botao, Input} from "./Signup_style.js";
import { signUp } from "../Services/Api";

export default function Signup(){
    const [nome, setNome] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();

    function cadastro(){

        const body={
            name: nome,
            email,
            password
        }
        if(password === confirm){
            const promise = signUp(body);
            promise.then(resp=>{
                alert("cadastro feito com sucesso");
                history("/sign-in");
            });
        }else{
            alert("Senhas diferentes");
        }
    }

    return (
        <Principal>
            <Title/>
            <Input placeholder="Nome" type="text" value={nome} onChange={e=>setNome(e.target.value)}/>
            <Input placeholder="E-mail"type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <Input placeholder="Senha" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <Input placeholder="Confirme a senha" type="password" value={confirm} onChange={e=>setConfirm(e.target.value)}/>
            <Botao onClick={cadastro} >Cadastrar</Botao>
            <Link to="/sign-in">
                <Texto>Já tem uma conta? Entre agora!</Texto>
            </Link>
        </Principal>
    );
}
