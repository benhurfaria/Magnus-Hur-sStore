import styled from "styled-components";
import { Button } from "../styles/ButtonStyle";

import { IoAlertCircleSharp } from 'react-icons/io5'
import { IconContext } from "react-icons/lib";
import { Message, Modal } from "../styles/ModalStyle";

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
