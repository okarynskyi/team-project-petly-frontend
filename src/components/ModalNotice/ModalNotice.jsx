// import { useState } from 'react';
import Modal from '../../components/Modal/Modal'

const ModalNotice = ({setActive, active}) => {
  return (
    <main>
      <Modal 
      active={active} 
      setActive={setActive}
      >
        <>
        text
        <input></input>
        </>
      
      </Modal>
    </main>
  );
};

export default ModalNotice;