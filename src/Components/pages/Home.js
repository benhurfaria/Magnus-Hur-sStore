import { useState } from "react";
import { PageContainer } from "../styles/PageContainer";
import Header from '../Header'

export default function Home() {
    const [modal, setModal] = useState(false);

    return (
        <PageContainer>
            <Header />
        </PageContainer>
    );
}