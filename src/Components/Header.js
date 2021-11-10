import { InputSearch, MenuHeader, PageHeader, StoreTitle, Title } from "./styles/PageTitle";

import { HiOutlineMenu } from 'react-icons/hi'
import { BsCartCheckFill, BsSearch } from 'react-icons/bs'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <PageHeader>
            <StoreTitle>
                <Title>Magnus&Hur's</Title>
                <MenuHeader>
                    <Link to='/home' >
                        <HiOutlineMenu />
                    </Link>
                    <InputSearch />
                    <BsSearch color='#ffffff' font-size='26px' font-weight='bold' />
                    <Link to='/carrinho' >
                        <BsCartCheckFill />
                    </Link>
                </MenuHeader>
            </StoreTitle>
        </PageHeader>
    );
}