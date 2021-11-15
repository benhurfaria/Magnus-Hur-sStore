import { HiOutlineMenu } from 'react-icons/hi';
import { BsCartCheckFill, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { InputSearch, Title } from './styles/PageTitle';

import {
  MenuHeader,
  PageHeader,
  Search,
  StoreTitle,
} from './styles/PageContainer';

export default function Header() {
  return (
    <PageHeader>
      <StoreTitle>
        <Title>Magnus&Hur's</Title>
        <MenuHeader>
          <Link to="/home">
            <HiOutlineMenu />
          </Link>
          <Search>
            <InputSearch />
            <BsSearch color="#ffffff" fontSize="26px" fontWeight="bold" cursor='pointer' />
          </Search>
          <Link to="/cart">
            <BsCartCheckFill />
          </Link>
        </MenuHeader>
      </StoreTitle>
    </PageHeader>
  );
}
