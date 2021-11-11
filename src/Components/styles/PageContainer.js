import styled from "styled-components"

const PageContainer = styled.div`
	width: 90vw;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	margin: 0 auto 100px;

    position: relative;

    a {
        color: #326273;
        font-size: 15px;
        font-weight: bold;
    }
`;

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

const Search = styled.div`
	width: 65vw;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;

    box-sizing: border-box;

    @media (max-width: 700px) {
        width: 70vw;
    }

    @media (min-width: 1100px) {
        width: 62vw;
    }
`;

export {
    PageContainer,
    PageHeader,
    StoreTitle,
    MenuHeader,
    Search,
}