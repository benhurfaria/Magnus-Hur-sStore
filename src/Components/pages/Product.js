import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "../../Services/Api";

import { PageContainer } from "../styles/PageContainer";
import Header from "../Header";
import ProductsCard from "../ProductsCard";
import { CardInfo, Description } from "../styles/ProductsStyle";
import { PageTitle } from "../styles/PageTitle";
import { Button } from "../styles/ButtonStyle";

export default function Product() {
    const { id } = useParams();

    const [productInfo, setProductInfo] = useState({})
    const [buttonName, setButtonName] = useState('Adicionar no carrinho')
    
    useEffect(() => {
        getProductById(id).then((res) => setProductInfo(res.data)).catch((err) => console.log(err))
    }, [])

    return (
        <PageContainer>
            <Header />

            <CardInfo>
                <ProductsCard id={productInfo.id} image={productInfo.imgeUrl} type='one' />
                <Description>
                    <span>{ productInfo.name }</span>
                    <span>R$ { productInfo.price }</span>
                    <Button size='buy'>{ buttonName }</Button>
                    <span>{ productInfo.description }</span>
                </Description>
            </CardInfo>
        </PageContainer>
    );
}