import { InputSearch, Title } from "./styles/PageTitle";
import { MdExitToApp } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi'
import { BsCartCheckFill, BsSearch } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { MenuHeader, PageHeader, Search, StoreTitle, Icon } from "./styles/PageContainer";
import { getStoredUser } from "../Services/loginPersistence.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutToken } from "../Services/Api.js";

export default function Header() {
    const history = useNavigate();
    const [user, setUser] = useState(getStoredUser());

    const config = {
        headers:{
            Authorization: `Bearer ${getStoredUser()?.token}`
        }
    }

    function logout(){
        localStorage.clear();
        setUser(getStoredUser());
        logoutToken(config);
    }

    function login(){
        history("/sign-in");
    }
    
    useEffect(()=>{
        setUser(getStoredUser());
    },[user]);

    return (
        <PageHeader>
            <StoreTitle>
                <Icon>
                    <Title>Magnus&Hur's</Title>
                    {user ? <MdExitToApp onClick={logout}/> : <span onClick={login}>Login</span>}
                </Icon>
                <MenuHeader>
                    <Link to='/home' >
                        <HiOutlineMenu />
                    </Link>
                    <Search>
                        <InputSearch />
                        <BsSearch color='#ffffff' fontSize='26px' fontWeight='bold' cursor='pointer' />
                    </Search>
                    <Link to='/carrinho' >
                        <BsCartCheckFill />
                    </Link>
                </MenuHeader>
            </StoreTitle>
        </PageHeader>
    );
}