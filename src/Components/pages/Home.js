import { useEffect, useState } from "react";
import { PageContainer } from "../styles/PageContainer";
import Header from '../Header'
import { Arrow, Menu, MenuBar, Order, PageOrder, PageTitle } from "../styles/PageTitle";
import ProductsCard from "../ProductsCard";
import { ProductsContainer } from "../styles/ProductsStyle";
import { getProducts } from "../../Services/Api";

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
                <MenuOrder setNavbar={setNavbar} />
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

function MenuOrder({setNavbar}) {

    function closeNavbar() {
        setNavbar(false)
    }

    return (
        <Menu onClick={closeNavbar}>
            <MenuBar>
                <button>A-Z</button>
                <button>Menor preço</button>
                <button>Maior preço</button>
            </MenuBar>
        </Menu>
    )
}

