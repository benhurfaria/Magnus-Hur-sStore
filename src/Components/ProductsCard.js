import { Card, Image, Price, ProductName } from "./styles/ProductsStyle";

export default function ProductsCard() {
    const image = 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'
    const value = '50,00'
    return (
        <Card>
            <Image src={image} />
            <ProductName>Nome aqui</ProductName>
            <Price>R$ {value}</Price>
        </Card>
    );
}