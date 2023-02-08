import React from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop} from './Modal.styled';
const modalRoot = document.querySelector('#modal_root');

export const ModalUser = ({ children }) => {

  return createPortal(
    <ModalBackdrop>
      {children}
    </ModalBackdrop>,
    modalRoot
  );
};
