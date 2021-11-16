import Title from "./Title";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Principal, Texto, Botao, Input } from "./Signup_style.js";
import { signUp } from "../Services/Api";
import Loader from "react-loader-spinner";
import ModalError from "./shared/ModalError";

export default function Signup() {
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState(1);
    const [compare, setCompare] = useState(1);
    const [buttonName, setButtonName] = useState("Entrar");
    const [disable, setDisable] = useState(false);

    const [nome, setNome] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();
    console.log(compare);
    useEffect(() => {
        if (password !== confirm) {
            setCompare(false);
        } else {
            setCompare(true);
        }
    }, [nome, email, password, confirm, modal]);

    function cadastro(event) {
        setDisable(true);
        event.preventDefault();
        setButtonName(
            <Loader
                type="ThreeDots"
                color="#ffffff"
                height={46}
                width={46}
                timeout={2000} //2 secs
            />
        );

        const body = {
            name: nome,
            email,
            password,
        };
        if (password === confirm) {
            const promise = signUp(body);
            promise
                .then((res) =>
                    setTimeout(() => {
                        history("/login");
                    }, 2000)
                )
                .catch((err) => {
                    console.log(err.response.status);
                    if (err.response.status === 400) {
                        setPassword("");
                        setConfirm("");
                        setMessage("Digite dados válidos");
                        setModal(true);
                        setButtonName("Cadastrar");
                        setDisable(false);
                    }
                    if (err.response.status === 409) {
                        setEmail("");
                        setPassword("");
                        setConfirm("");
                        setMessage("Email em uso");
                        setButtonName("Cadastrar");
                        setModal(true);
                    }
                    if (err.response.status === 500) {
                        setMessage(
                            "Servidor fora de área, tente novamente mais tarde"
                        );
                        setButtonName("Cadastrar");
                        setModal(true);
                        history("/");
                    }
                });
        } else {
            setPassword("");
            setConfirm("");
            setMessage("Senhas diferentes, confirme novamente");
            setModal(true);
            setButtonName("Cadastrar");
            setDisable(false);
        }
    }

    return (
        <Principal>
            <Link to="/">
                <Title />
            </Link>
            <form onSubmit={cadastro}>
                <Input
                    compare={true}
                    placeholder="Nome"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <Input
                    compare={true}
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    compare={compare}
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    compare={compare}
                    placeholder="Confirme a senha"
                    type="password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                />
                <Botao type="submit" disabled={disable}>
                    {buttonName}
                </Botao>
            </form>
            <Link to="/sign-in">
                <Texto>Já tem uma conta? Entre agora!</Texto>
            </Link>
            {modal ? <ModalError message={message} setModal={setModal} /> : ""}
        </Principal>
    );
}
