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
import { ContextLogin } from "../../Services/Context";
import Loader from "react-loader-spinner";

export default function Product() {
    const user = useContext(ContextLogin);
    const { loggedUser, cart, setCart } = user;
    const { id } = useParams();

    const [productInfo, setProductInfo] = useState({});
    const [productToBuy, setProductToBuy] = useState({});
    const [buttonName, setButtonName] = useState("Adicionar no carrinho");
    const [quant, setQuant] = useState(1);

    let name = productInfo.name;
    let price = productInfo.price;
    let description = productInfo.descrition;
    let image = productInfo.imgeUrl;

    useEffect(() => {
        getProductById(id)
            .then((res) => setProductInfo(res.data))
            .catch((err) => console.log(err));
        if (price) {
            price = (price / 100).toFixed(2).replace(".", ",");
        }
        localStorage.setItem("cart", cart);

        setProductToBuy({
            name,
            price,
            description,
            image,
            quant,
        });
    }, [name, price, description, image, quant, cart]);

    function toBuy() {
        setButtonName(
            <Loader
                type="ThreeDots"
                color="#ffffff"
                height={46}
                width={46}
                timeout={2000} //2 secs
            />
        );
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
            )
                .then(
                    (res) => (
                        setButtonName("Remover item do carrinho"),
                        save(res.data)
                    )
                )
                .catch((err) => console.log(err));
        }
    }

    function save(res) {
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
