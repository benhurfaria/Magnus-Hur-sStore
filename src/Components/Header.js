import { InputSearch, Title } from "./styles/PageTitle";

import { HiOutlineMenu } from 'react-icons/hi'
import { BsCartCheckFill, BsSearch } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { MenuHeader, PageHeader, Search, StoreTitle } from "./styles/PageContainer";

export default function Header() {
    return (
        <PageHeader>
            <StoreTitle>
                <Link to='/home'>
                    <Title>Magnus&Hur's</Title>
                </Link>
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