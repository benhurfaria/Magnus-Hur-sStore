import { useNavigate } from "react-router-dom";
import { Card, Image, Price, ProductName } from "./styles/ProductsStyle";

export default function ProductsCard({ id, name, price, image, type }) {
    const navigate = useNavigate();

    if (price) {
        price = (price / 100).toFixed(2).replace('.', ',')
    }
    return (
        <Card type={type} onClick={() => navigate(`/product/${id}`)}>
            <Image type={type} src={image} alt={name} />
            {
                name ?
                <ProductName type={type}>{name}</ProductName>
                : ''
            }
            {
                price ?
                <Price type={type} >R$ {price}</Price>
                : ''
            }
        </Card>
    );
}