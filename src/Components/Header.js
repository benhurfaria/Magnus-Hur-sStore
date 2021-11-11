import { InputSearch, Title } from "./styles/PageTitle";

import { HiOutlineMenu } from 'react-icons/hi'
import { BsCartCheckFill, BsSearch } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { MenuHeader, PageHeader, Search, StoreTitle } from "./styles/PageContainer";

export default function Header() {
    return (
        <PageHeader>
            <StoreTitle>
                <Title>Magnus&Hur's</Title>
                <MenuHeader>
                    <Link to='/home' >
                        <HiOutlineMenu />
                    </Link>
                    <Search>
                        <InputSearch />
                        <BsSearch color='#ffffff' font-size='26px' font-weight='bold' />
                    </Search>
                    <Link to='/carrinho' >
                        <BsCartCheckFill />
                    </Link>
                </MenuHeader>
            </StoreTitle>
        </PageHeader>
    );
}