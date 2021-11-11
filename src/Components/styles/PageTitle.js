import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa"

const Title = styled.h1`
	width: 90vw;

    color: #eeeeee;
    font-size: 30px;
    line-height: 50px;
    font-family: 'Mochiy Pop P One', sans-serif;
    font-style: normal;
    font-weight: bold;
    text-align: center;

    margin-bottom: 10px;
`;

const PageOrder = styled.div`
	width: 90vw;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
`;

const Menu = styled.div`
	width: 100vw;
    height: 81vh;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    margin: 0 auto;

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;

    opacity: 1;

    @media (min-width: 1100px) {
        height: 88vh;
    }
`;

const MenuBar = styled.div`
	width: 40vw;
    height: 30vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    border-radius: 10px;

    margin: 0 auto;

    position: absolute;
    right: 5vw;
    top: 46px;
    z-index: 1000;
    button {
        width: 100%;
        height: 15vw;

        background-color: #ffffff;

        border-radius: 5px;
        border: 2px solid #326273;
    }

    button:hover {
        color: #ffffff;
        background-color: #326273;
    }

    @media (min-width: 700px) {
        width: 20vw;
        height: 15vw;
        right: 5vw;
        top: 35px;
    }

    @media (min-width: 1100px) {
        width: 10vw;
        height: 8vw;
        right: 5vw;
        top: 77px;
    }

    @media (min-width: 1600px) {
        top: 55px;
    }
`;

const PageTitle = styled.h2`
	width: 50vw;

    color: #283D3B;
    font-size: 26px;

    margin: 140px auto 20px;

    @media (min-width: 700px) {
        width: 20vw;
        margin: 140px 0 20px;
    }

    @media (min-width: 1100px) {
        width: 60vw;
        margin: 140px 0 20px;
    }
`;

const InputSearch = styled.input`
	width: 60vw;
    height: 40px;

    font-size: 20px;

    background-color: #eeeeee;
    border-radius: 5px;
    border: none;

    padding: 10px;

    outline: 0;
`;

const Order = styled.div`
    width: 40vw;
    height: 26px;

    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0px 0px 2px 2px rgba(227, 151, 116, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 140px auto 20px;

    span {
        color: #283D3B;
        text-align: center;
    }
    
    @media (min-width: 700px) {
        width: 20vw;
        margin: 140px 0 20px;
    }

    @media (min-width: 1100px) {
        width: 10vw;
        height: 26px;
    }
`;

const Arrow = styled(FaChevronDown)`
    width: 16px;
    height: 16px;
    color: #283D3B;

    transform: ${(props) => props.navbar === true ? "rotate(180deg)" : ""};

    cursor: pointer;

    margin: 0 15px;
`

export {
    Title,
    PageTitle,
    PageOrder,
    Menu,
    MenuBar,
    InputSearch,
    Order,
    Arrow,
}