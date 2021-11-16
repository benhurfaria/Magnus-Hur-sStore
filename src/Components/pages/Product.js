import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { addToCart, getProductById } from "../../Services/Api";

import { PageContainer } from "../styles/PageContainer";
import Header from "../Header";
import ProductsCard from "../ProductsCard";
import {
    CardInfo,
    Description,
    Quant,
    QuantModify,
} from "../styles/ProductsStyle";
import { Button } from "../styles/ButtonStyle";
import { BsSave } from "react-icons/bs";
import { ContextLogin } from "../../Services/Context";

export default function Product({ cart, setCart, loggedUser }) {
    const { id } = useParams();
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [productInfo, setProductInfo] = useState({});
    const [productToBuy, setProductToBuy] = useState({});
    const [buttonName, setButtonName] = useState("Adicionar no carrinho");
    const [quant, setQuant] = useState(1);

    let name = "";
    let price = 0;
    let description = "";
    let image = "";
    console.log(user);
    useEffect(() => {
        getProductById(id)
            .then((res) => setProductInfo(res.data))
            .catch((err) => console.log(err));
        if (price) {
            price = (price / 100).toFixed(2).replace(".", ",");
        }
        localStorage.setItem("cart", cart);

        name = productInfo.name;
        price = productInfo.price;
        description = productInfo.descrition;
        image = productInfo.imgeUrl;

        setProductToBuy({
            name,
            price,
            description,
            image,
            quant,
        });
    }, [quant, cart]);

    function toBuy() {
        setCart([...cart, productToBuy]);
        if (!loggedUser) {
            save();
        } else {
            addToCart(
                {
                    price: productInfo.price,
                    quant: quant,
                    id: id,
                },
                loggedUser.token
            ).then((res) => console.log(res.data));
        }
    }

    function save() {
        localStorage.cart = cart;
    }

    if (productInfo.price) {
        productInfo.price = (productInfo.price / 100)
            .toFixed(2)
            .replace(".", ",");
    }

    return (
        <PageContainer>
            <Header loggedUser={loggedUser} cart={cart} />

            <CardInfo>
                <ProductsCard
                    id={productInfo.id}
                    image={productInfo.imgeUrl}
                    type="one"
                />
                <Description>
                    <span>{productInfo.name}</span>
                    <span>R$ {productInfo.price}</span>

                    <Quant>
                        Quantidade{" "}
                        <QuantModify
                            color="red"
                            onClick={() =>
                                quant > 1 ? setQuant(quant - 1) : ""
                            }
                        >
                            -
                        </QuantModify>{" "}
                        <span>{quant}</span>{" "}
                        <QuantModify
                            color="green"
                            onClick={() => setQuant(quant + 1)}
                        >
                            <strong> +</strong>
                        </QuantModify>
                    </Quant>

                    <Button size="buy" onClick={toBuy}>
                        {buttonName}
                    </Button>
                    <br />
                    <span>Descrição:</span>
                    <li>{productInfo.descrition}</li>
                </Description>
            </CardInfo>
        </PageContainer>
    );
}
