import { MdExitToApp } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';
import { BsCartCheckFill, BsSearch } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InputSearch, Title } from './styles/PageTitle';
import {
  MenuHeader,
  PageHeader,
  Search,
  StoreTitle,
  Icon,
} from './styles/PageContainer';
import { getStoredUser } from '../Services/loginPersistence.js';

import { logoutToken } from '../Services/Api.js';

export default function Header() {
  const history = useNavigate();
  const [user, setUser] = useState(getStoredUser());

  const config = {
    headers: {
      Authorization: `Bearer ${getStoredUser()?.token}`,
    },
  };

  function logout() {
    localStorage.clear();
    setUser(getStoredUser());
    logoutToken(config);
  }

  function login() {
    history('/sign-in');
  }

  useEffect(() => {
    setUser(getStoredUser());
  }, []);

  return (
    <PageHeader>
      <StoreTitle>
        <Icon>
          <Title>Magnus&Hur's</Title>
          {user ? (
            <MdExitToApp onClick={logout} />
          ) : (
            <span onClick={login}>Login</span>
          )}
        </Icon>
        <MenuHeader>
          <Link to="/home">
            <HiOutlineMenu />
          </Link>
          <Search>
            <InputSearch />
            <BsSearch
              color="#ffffff"
              fontSize="26px"
              fontWeight="bold"
              cursor="pointer"
            />
          </Search>
          <Link to="/cart">
            <BsCartCheckFill />
          </Link>
        </MenuHeader>
      </StoreTitle>
    </PageHeader>
  );
}
