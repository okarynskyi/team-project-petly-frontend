import React from "react";
import { ModalStyled, ModalStyledContent, ModalButton } from "./Modal.styled";
import { HiX} from 'react-icons/hi';

const Modal = ({active, setActive, children}) => {

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            setActive(false);
            document.body.style.overflow = '';
        }
      };
      window.addEventListener('keydown', handleKeyDown);
     
    function closeModal () {
        setActive(false)
        document.body.style.overflow = '';

      }
    return (
        <ModalStyled className={active ? "modal active" : "modal"} onClick={() => closeModal() }>
                <ModalStyledContent className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
                    <ModalButton type="button" onClick={() => closeModal()}>
                    <HiX color="#111111" size="34px" />
                    </ModalButton>
                    {children}
                </ModalStyledContent>
         </ModalStyled>
    )
}

export default Modal;

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
//          <>
//          text
//          </>
//       </Modal>
//     </main>
//   );
// };