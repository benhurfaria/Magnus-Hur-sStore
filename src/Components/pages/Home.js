import { useContext, useEffect, useState } from "react";
import { PageContainer } from "../styles/PageContainer";
import Header from "../Header";
import {
    Arrow,
    Menu,
    MenuBar,
    Order,
    PageOrder,
    PageTitle,
} from "../styles/PageTitle";
import ProductsCard from "../ProductsCard";
import { ProductsContainer } from "../styles/ProductsStyle";
import {
    getProducts,
    getProductsAlpha,
    getProductsHigher,
    getProductsLower,
} from "../../Services/Api";
import { ContextLogin } from "../../Services/Context";

export default function Home({ cart, setCart }) {
    const user = useContext(ContextLogin);
    const { loggedUser } = user;
    console.log(loggedUser);

    const [modal, setModal] = useState(false);

    const [navbar, setNavbar] = useState(false);

    function navbarCard() {
        if (navbar === false) {
            setNavbar(true);
        }
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));

        localStorage.getItem("cart", cart);
    }, []);

    return (
        <PageContainer>
            <Header />

            <PageOrder>
                <PageTitle>Aproveite</PageTitle>
                <Order onClick={() => setNavbar(true)}>
                    <span>Ordenar por</span>
                    <Arrow navbar={navbar} />
                </Order>
            </PageOrder>

            {navbar ? (
                <MenuOrder setNavbar={setNavbar} setProducts={setProducts} />
            ) : (
                ""
            )}
            <ProductsContainer>
                {products.length ? (
                    products.map((prod, index) => (
                        <ProductsCard
                            key={index}
                            id={prod.id}
                            name={prod.name}
                            price={prod.price}
                            image={prod.imgeUrl}
                            type="all"
                        />
                    ))
                ) : (
                    <span>Não há produtos cadastrados</span>
                )}
            </ProductsContainer>
        </PageContainer>
    );
}

function MenuOrder({ setNavbar, setProducts }) {
    function closeNavbar() {
        setNavbar(false);
    }

    function alpha() {
        getProductsAlpha()
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    }

    function lowerPrice() {
        getProductsLower()
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    }

    function higherPrice() {
        getProductsHigher()
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    }

    return (
        <Menu onClick={closeNavbar}>
            <MenuBar>
                <button onClick={() => alpha()}>A-Z</button>
                <button onClick={() => lowerPrice()}>Menor preço</button>
                <button onClick={() => higherPrice()}>Maior preço</button>
            </MenuBar>
        </Menu>
    );
}
