import { InputSearch, Title } from "./styles/PageTitle";

import {
    BsCartCheckFill,
    BsFillPersonFill,
    BsPersonCheckFill,
    BsSearch,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import {
    MenuHeader,
    PageHeader,
    Search,
    StoreTitle,
} from "./styles/PageContainer";
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

    return (
        <PageHeader>
            <StoreTitle>
                <Link to="/">
                    <Title>Magnus&Hur's</Title>
                </Link>
                <MenuHeader>
                    {user ? (
                        <Link to="/login">
                            <BsFillPersonFill />
                        </Link>
                    ) : (
                        <Link to="/">
                            <BsPersonCheckFill />
                        </Link>
                    )}
                    <Search>
                        <InputSearch />
                        <BsSearch
                            color="#ffffff"
                            fontSize="26px"
                            fontWeight="bold"
                            cursor="pointer"
                        />
                    </Search>

                    <Link to="/carrinho">
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
