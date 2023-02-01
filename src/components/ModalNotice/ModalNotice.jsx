// import { useState } from 'react';
import Modal from '../common/Modal/Modal'

const ModalNotice = ({setActive, active}) => {
  return (
    <main>
      <Modal 
      active={active} 
      setActive={setActive}
      >
        <>
       text
        </>
      
      </Modal>
    </main>
  );
};

export default ModalNotice;