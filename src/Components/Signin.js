import Title from "./Title";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { storeUser } from "../Services/loginPersistence.js";
import { Principal, Texto, Input, Botao } from "./Signin_style.js";
import { signIn } from "../Services/Api";
import Loader from "react-loader-spinner";
import ModalError from "./shared/ModalError";

export default function Signin({ loggedUser, setLoggedUser }) {
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState(1);

    const [buttonName, setButtonName] = useState("Entrar");
    const [disable, setDisable] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    function errorLogin(err) {
        if (err.response.status === 400) {
            setMessage("Digite dados válidos");
            setModal(true);
        }
        if (err.response.status === 500) {
            setMessage("Servidor fora de área, tente novamente mais tarde");
            setModal(true);
            history("/");
        }
    }

    function login(event) {
        setDisable(true);
        event.preventDefault();
        const body = {
            email,
            password,
        };

        setButtonName(
            <Loader
                type="ThreeDots"
                color="#ffffff"
                height={46}
                width={46}
                timeout={2000} //2 secs
            />
        );

        const promise = signIn(body);

        promise
            .then((resp) => {
                storeUser(resp.data);
                setLoggedUser(resp.data);
                setTimeout(() => {
                    history("/");
                }, 2000);
            })
            .catch((err) => {
                errorLogin(err);
            });
    }

    return (
        <Principal>
            <Title />
            <form onSubmit={login}>
                <Input
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <Botao type="submit" disabled={disable}>
                    {buttonName}
                </Botao>
            </form>

            <Link to="/sign-up">
                <Texto>Primeira vez? Cadastre-se</Texto>
            </Link>

            {modal ? <ModalError message={message} setModal={setModal} /> : ""}
        </Principal>
    );
}
