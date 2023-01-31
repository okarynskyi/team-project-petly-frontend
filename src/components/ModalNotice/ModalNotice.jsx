// import { useState } from 'react';
import Modal from '../../components/Modal/Modal'

const ModalNotice = () => {
//   const [modalActive, setModalActive] = useState(false)
  return (
    <main>
      {/* <button onClick={() => setModalActive(true)}>ModalOpen</button> */}
      <Modal 
    //   active={modalActive} 
    //   setActive={setModalActive}
      >
      {/* <input>Text</input> */}
      </Modal>
    </main>
  );
};

export default ModalNotice;