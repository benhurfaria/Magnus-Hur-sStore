import styled from "styled-components";

const PageHeader = styled.div`
	width: 100vw;
    height: 120px;

    background-color: #326273;

    margin: 0 auto;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
`;

const StoreTitle = styled.div`
	width: 90vw;
    height: 70px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
`;

const MenuHeader = styled.div`
	width: 90vw;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;

    box-sizing: border-box;

    a {
        color: #eeeeee;
        font-size: 26px;
        font-weight: bold;
    }
`;

const Title = styled.h1`
	width: 90vw;
    /* height: 40px; */

    color: #eeeeee;
    font-size: 30px;
    line-height: 50px;
    font-family: 'Mochiy Pop P One', sans-serif;
    font-style: normal;
    font-weight: bold;
    text-align: center;

    margin-bottom: 10px;
`;

const PageTitle = styled.h2`
	width: 90vw;

    color: #283D3B;
    font-size: 26px;

    margin: 100px auto 20px;
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

export {
    PageHeader,
    StoreTitle,
    MenuHeader,
    Title,
    PageTitle,
    InputSearch,
}