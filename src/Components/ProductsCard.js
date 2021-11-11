import { useNavigate } from "react-router-dom";
import { Card, Image, Price, ProductName } from "./styles/ProductsStyle";

export default function ProductsCard({ id, name, price, image }) {
    const navigate = useNavigate();

    // const image = 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'

    price = (price / 100).toFixed(2).replace('.', ',')
    return (
        <Card onClick={() => navigate(`/product/${id}`)}>
            <Image src={image} alt={name} />
            <ProductName>{name}</ProductName>
            <Price>R$ {price}</Price>
        </Card>
    );
}