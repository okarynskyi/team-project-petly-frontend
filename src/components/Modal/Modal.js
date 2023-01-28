import React from "react";
import { ModalStyled, ModalStyledContent } from "./Modal.styled";

const Modal = ({active, setActive, children}) => {
    return (
        <ModalStyled className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <ModalStyledContent className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
                    {children}
                </ModalStyledContent>
         </ModalStyled>
    )
}

export default Modal;
