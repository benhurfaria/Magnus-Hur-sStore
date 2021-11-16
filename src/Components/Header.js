import { MdExitToApp } from 'react-icons/md';
import {
    BsCartCheckFill,
    BsFillPersonFill,
    BsPersonCheckFill,
    BsSearch,
} from "react-icons/bs";
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
import { useContext } from "react";
import { ContextLogin } from "../Services/Context";
import { getCart } from "../Services/Api";
import { getStoredUser } from "../Services/loginPersistence";

export default function Header() {
    const user = useContext(ContextLogin);
    const loggedUser = getStoredUser();

    if (loggedUser?.token) {
        getCart()
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }


  function logout() {
    localStorage.clear();
    setUser(getStoredUser());
    logoutToken(token);
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
          <Link to="/">
            <BsFillPersonFill />
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
                {user.cart.length ? (
                    <span fontSize="15px">{user.cart.length} </span>
                ) : (
                    ""
                )}
          </Link>
        </MenuHeader>
      </StoreTitle>
    </PageHeader>
  );
}
