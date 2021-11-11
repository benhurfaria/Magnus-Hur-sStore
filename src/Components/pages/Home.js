import { useEffect, useState } from "react";
import { PageContainer } from "../styles/PageContainer";
import Header from '../Header'
import { Arrow, Menu, MenuBar, Order, PageOrder, PageTitle } from "../styles/PageTitle";
import ProductsCard from "../ProductsCard";
import { ProductsContainer } from "../styles/ProductsStyle";
import { getProducts, getProductsHigher, getProductsLower } from "../../Services/Api";

export default function Home() {
    const [modal, setModal] = useState(false);

    const [navbar, setNavbar] = useState(false);

    function navbarCard() {
        if (navbar === false) {
            setNavbar(true)
        }
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((res) => setProducts(res.data)).catch((err) => console.log(err));
    }, [])
    console.log(products);
    console.log(products);

    return (
        <PageContainer>
            <Header />

            <PageOrder>
                <PageTitle>Aproveite</PageTitle>
                <Order onClick={() => setNavbar(true)} >
                    <span>Ordenar por</span>
                    <Arrow navbar={navbar} />
                </Order>
            </PageOrder>

            {navbar ?
                <MenuOrder setNavbar={setNavbar} setProducts={setProducts} />
                : ''
            }
            <ProductsContainer>
                {
                    products.length ?
                        products.map((prod) => <ProductsCard id={prod.id} name={prod.name} price={prod.price} image={prod.imgeUrl} />)
                    : (<span>Não há produtos cadastrados</span>)
                }
            </ProductsContainer>
            
        </PageContainer>
    );
}

function MenuOrder({ setNavbar, setProducts }) {

    function closeNavbar() {
        setNavbar(false)
    }

    // function alpha() {
    //     getProductsAlpha().then((res) => setProducts(res.data)).catch((err) => console.log(err));
    // }

    function lowerPrice() {
        console.log('?ordenacao=lowerPrice')
        getProductsLower().then((res) => setProducts(res.data)).catch((err) => console.log(err));
    }

    function higherPrice() {

        console.log('?ordenacao=higherPrice')
        getProductsHigher().then((res) => setProducts(res.data)).catch((err) => console.log(err));
    }

    return (
        <Menu onClick={closeNavbar}>
            <MenuBar>
                <button>A-Z</button>
                <button onClick={() => lowerPrice()} >Menor preço</button>
                <button onClick={() => higherPrice()} >Maior preço</button>
            </MenuBar>
        </Menu>
    )
}

