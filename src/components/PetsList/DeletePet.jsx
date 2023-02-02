import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { WrapperQuit, ButtonQuit } from '../Logout/Logout.styled';
import Modal from '../common/Modal/Modal';

import { CircleBtnTrash, StyledTrash } from './PetsList.styled';
import { removePet } from '../../redux/user/userOperations';

export const DeletePet = ({ _id }) => {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);

  return (
    <main>
      <CircleBtnTrash onClick={() => setModalActive(true)}>
        <StyledTrash />
      </CircleBtnTrash>
      <Modal active={modalActive} setActive={setModalActive}>
        <div>
          Do you really want to delete?
          <div>
            {' '}
            <button
              type="button"
              onClick={() => {
                dispatch(removePet(_id));
              }}
            >
              Yes
            </button>
            <button type="button" onClick={() => setModalActive(false)}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
};
