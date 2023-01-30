import React from "react";
import { ModalStyled, ModalStyledContent, ModalButton } from "./Modal.styled";
import { HiX} from 'react-icons/hi';

const Modal = ({active, setActive, children}) => {
    return (
        <ModalStyled className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <ModalStyledContent className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
                    <ModalButton type="button" onClick={() => setActive(false)}>
                    <HiX color="#F59256" size="44px" />
                    </ModalButton>
                    {children}
                </ModalStyledContent>
         </ModalStyled>
    )
}

export default Modal;
<input>Text</input>
// /////////////////////////////////////////////
// Зразок використання модалки
// import { useState } from 'react';
// import Modal from 'components/Modal/Modal';

// export const ModalWindows = () => {
//   const [modalActive, setModalActive] = useState(false)
//   return (
//     <main>
//       <button onClick={() => setModalActive(true)}>ModalOpen</button>
//       <Modal 
//       active={modalActive} 
//       setActive={setModalActive}>
//       <input>Text</input>
//       </Modal>
//     </main>
//   );
// };