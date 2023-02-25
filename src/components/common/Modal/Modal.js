import React from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal_root');

export const Modal = ({active, className, onClick, setActive, children}) => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
        setActive(false);
        document.body.style.overflow = '';
    }
  };
  window.addEventListener('keydown', handleKeyDown);
 
  return createPortal(    <ModalBackdrop 
    className={active ? "modal active" : "modal"}
    onClick={onClick}
    >
      {children}
    </ModalBackdrop>,
    modalRoot
  );
};