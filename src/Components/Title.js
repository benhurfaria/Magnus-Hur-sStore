import styled from "styled-components";

export default function Title(){
    return (
        <Titulo>
            MyWallet
        </Titulo>
    );
}

const Titulo = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: #FFFFFF;
    text-align: center;
    margin: 14px;
`;
