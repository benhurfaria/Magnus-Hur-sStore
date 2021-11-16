import styled from 'styled-components';

const Principal = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Texto = styled.p`
    text-align: center;
    margin-top: 20px;
    font-family: "Mochiy Pop P One", sans-serif;
    font-size: 14px;
    color: #326273;
`;
const Input = styled.input`
    background: #ffffff;
    border-radius: 5px;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #000000;
    border: none;
    padding-left: 15px;
    :focus {
        outline: transparent;
    }
`;

const Botao = styled.button`
    background-color: #326273;
    width: 100%;
    height: 48px;
    margin-bottom: 35px;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    margin-top: 10px;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    :focus {
        outline: transparent;
    }
`;

export { Principal, Texto, Input, Botao };
