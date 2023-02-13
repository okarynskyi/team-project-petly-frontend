import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { WrapperQuit, ButtonQuit } from '../Logout/Logout.styled';
import Modal from '../common/Modal/Modal';
import { CircleBtnTrash, StyledTrash } from './PetsList.styled';
import { removePet } from 'redux/user/userOperations';

export const DeletePet = ({ _id }) => {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <CircleBtnTrash onClick={() => setModalActive(true)}>
        <StyledTrash />
      </CircleBtnTrash>
      <Modal active={modalActive} setActive={setModalActive}>
        <WrapperQuit>
          Do you really want to delete pet?
          <div>
            {' '}
            <ButtonQuit
              type="button"
              onClick={() => {
                dispatch(removePet(_id));
                setModalActive(false);
              }}
            >
              Yes
            </ButtonQuit>
            <ButtonQuit type="button" onClick={() => setModalActive(false)}>
              Cancel
            </ButtonQuit>
          </div>
        </WrapperQuit>
      </Modal>
    </>
  );
};
