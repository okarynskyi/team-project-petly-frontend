import React from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';
const modalRoot = document.querySelector('#modal_root');

export const ModalUser = ({ children }) => {
  //  componentDidMount() {
  //   console.log('Modal componentDidMount');
  //   window.addEventListener('keydown', this.handleKeyDown);
  // }

  // componentWillUnmount() {
  //   console.log('Modal componentWillUnmount');
  //   window.removeEventListener('keydown', this.handleKeyDown);
  // }

  // handleKeyDown = e => {
  //   if (e.code === 'Escape') {
  //     this.props.onClose();
  //   }
  // };

  return createPortal(
    <ModalBackdrop>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};
