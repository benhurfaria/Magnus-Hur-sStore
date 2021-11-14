import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "../../Services/Api";

import { PageContainer } from "../styles/PageContainer";
import Header from "../Header";
import ProductsCard from "../ProductsCard";
import { CardInfo, Description, Quant, QuantModify } from "../styles/ProductsStyle";
import { Button } from "../styles/ButtonStyle";

export default function Product() {
    const { id } = useParams();

    const [productInfo, setProductInfo] = useState({})
    const [productToBuy, setProductToBuy] = useState({})
    const [buttonName, setButtonName] = useState('Adicionar no carrinho');
    const [quant, setQuant] = useState(1);

    let name = ''
    let price = 0
    let description = ''
    let image = ''
    
    useEffect(() => {
        getProductById(id).then((res) => setProductInfo(res.data)).catch((err) => console.log(err))

        name = productInfo.name;
        price = productInfo.price;
        description = productInfo.description;
        image = productInfo.imgeUrl;

        setProductToBuy({
            name,
            price,
            description,
            image,
            quant,
        })
    }, [quant]);

    function toBuy() {
        window.localStorage.setItem('carrinho', JSON.stringify(productToBuy));
    }

    return (
        <PageContainer>
            <Header />

            <CardInfo>
                <ProductsCard id={productInfo.id} image={productInfo.imgeUrl} type='one' />
                <Description>
                    <span>{ productInfo.name }</span>
                    <span>R$ { productInfo.price }</span>
                    
                    <Quant>Quantidade      <QuantModify color='red' onClick={() => (quant > 1 ? (setQuant(quant - 1)) : '')}>-</QuantModify> <span>{quant}</span> <QuantModify color='green' onClick={() => (setQuant(quant + 1))} ><strong> +</strong></QuantModify>
                    </Quant>

                    <Button size='buy' onClick={ () => toBuy() }>{ buttonName }</Button>
                    <br/>
                    <span>Descrição:</span>
                    <li>{ productInfo.descrition }</li>
                </Description>
            </CardInfo>
        </PageContainer>
    );
}
