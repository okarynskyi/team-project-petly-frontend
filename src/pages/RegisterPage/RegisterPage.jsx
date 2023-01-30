import { useState } from 'react';
import Modal from 'components/Modal/Modal';

export const RegisterPage = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <main>
      <h1>RegisterPage</h1>
      <button onClick={() => setModalActive(true)}>RegistrationForm</button>
      <Modal 
      active={modalActive} 
      setActive={setModalActive}>
      </Modal>
    </main>
  );
};
