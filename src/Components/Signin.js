import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { ContextLogin } from '../Services/Context.js';
import { storeUser } from '../Services/loginPersistence.js';
import {
  Principal, Texto, Input, Botao,
} from './Signin_style.js';
import { signIn } from '../Services/Api';
import Title from './Title';

export default function Signin() {
  const { setLoggedUser } = useContext(ContextLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  function login() {
    const body = {
      email,
      password,
    };
    const promise = signIn(body);
    promise.then((resp) => {
      storeUser(resp.data);
      setLoggedUser(resp.data);
      history('/home');
    });
  }
  return (
        <Principal>
            <Title/>
            <Input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
            <Botao onClick={login}>Login</Botao>
            <Link to="/sign-up">
                <Texto>Primeira vez? Cadastre-se</Texto>
            </Link>
        </Principal>
  );
}
