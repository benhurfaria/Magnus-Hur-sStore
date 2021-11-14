import { useNavigate } from 'react-router-dom';
import {
  Card, Image, Price, ProductName,
} from './styles/ProductsStyle';

export default function ProductsCard({
  id, name, price, image,
}) {
  const navigate = useNavigate();

  // eslint-disable-next-line no-param-reassign
  price = (price / 100).toFixed(2).replace('.', ',');
  return (
    <Card onClick={() => navigate(`/product/${id}`)}>
      <Image src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <Price>R$ {price}</Price>
    </Card>
  );
}
