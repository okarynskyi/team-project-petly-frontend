import {
  WrapperAddPet,
  StyledPlus,
  AddPetBtn,
  WrapperModalAddPet,
} from './ModalAddsPet.styled';
import { useState } from 'react';
import Modal from '../common/Modal/Modal';

const ModalAddPet = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <main>
      <WrapperAddPet>
        <p>Add pet </p>
        <AddPetBtn onClick={() => setModalActive(true)}>
          <StyledPlus />
        </AddPetBtn>
      </WrapperAddPet>
      <Modal active={modalActive} setActive={setModalActive}>
        <WrapperModalAddPet>
          <h3>Add pet</h3> 
          <form >
            <label htmlFor="">
              Name pet
              <input type="text" />
            </label>
            <label htmlFor="">
              Date of birth
              <input type="text" />
            </label>
            <label htmlFor="">
              Breed
              <input type="text" />
</label>

          </form>
        </WrapperModalAddPet>
      </Modal>
    </main>
  );
};
export default ModalAddPet;
