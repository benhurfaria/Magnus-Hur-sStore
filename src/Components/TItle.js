import styled from "styled-components";

export default function Title(){
    const titulo = "Magnus&Hur's"
    return (
        <Titulo>
            {titulo}
        </Titulo>
    );
}

const Titulo = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    font-weight: bold;
    font-size: 40px;
    color: #FFFFFF;
    text-align: center;
    margin: 14px;
    margin: 80px;
`;