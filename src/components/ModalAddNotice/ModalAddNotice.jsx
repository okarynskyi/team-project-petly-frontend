// import { useState } from 'react';
import Modal from '../../components/Modal/Modal'
import { Card } from './ModalAddNotice.styled';

const ModalAddNotice = ({setActive, active}) => {
  return (
    <main>
      <Modal 
      active={active} 
      setActive={setActive}
      >
        <Card>
        <>
       text
        </>
        </Card>
      </Modal>
    </main>
  );
};

export default ModalAddNotice;