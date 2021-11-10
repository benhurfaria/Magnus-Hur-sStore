import styled from "styled-components";
import { Button } from "../styles/ButtonStyle";

import { IoAlertCircleSharp } from 'react-icons/io5'
import { IconContext } from "react-icons/lib";

export default function ModalError({ message, setModal }) {
    return (
        <Modal>
            <Message>
            <IconContext.Provider value={{ size: "60px", color: "#C44536", className: "global-class-name" }}>
                <div>
                    <IoAlertCircleSharp />
                </div>
            </IconContext.Provider>
                
                <h1>{ message }</h1>
                <Button size='modal' onClick={() => setModal(false)}>OK</Button>
            </Message>
        </Modal>
    );
}

const Modal = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: rgba(238, 238, 238, 0.6);

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 10;
`;

const Message = styled.div`
    width: 90vw;
    height: 35vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: #ffffff;   
    border: 1px solid #283D3B;
    border-radius: 10px;
    
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.15);

    transition: all 0.4s ease 0,3s;

    h1 {
        color: #283D3B;
        font-size: 26px;
        text-align: center;

        padding: 20px 0;
    }
`;
