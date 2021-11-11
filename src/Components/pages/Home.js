import { useState } from "react";
import { PageContainer } from "../styles/PageContainer";
import Header from '../Header'
import { PageTitle } from "../styles/PageTitle";
import ProductsCard from "../ProductsCard";
import { ProductsContainer } from "../styles/ProductsStyle";

export default function Home() {
    const [modal, setModal] = useState(false);

    const array = [1, 2, 3, 4, 5, 6]

    return (
        <PageContainer>
            <Header />
            <PageTitle>Aproveite</PageTitle>
            <ProductsContainer>
                {array.map((prod) => <ProductsCard />)}
            </ProductsContainer>
        </PageContainer>
    );
}