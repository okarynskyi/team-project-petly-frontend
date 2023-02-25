import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { WrapperQuit, ButtonQuit } from '../Logout/Logout.styled';
import {Modal} from '../common/Modal/Modal';
import { CircleBtnTrash, StyledTrash } from './PetsList.styled';
import { removePet } from 'redux/user/userOperations';
import { ModalContentDellLogout } from 'components/common/Modal/Modal.styled';
import operations from 'redux/notices/noticesOperations';
import { StyledButton, StyledTrashNotice } from 'components/NoticeCategoryItem/NoticeCategoryItem.styled';

export const DeletePet = ({ _id, category, refreshingPage }) => {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);
  function closeModal () {
      
    setModalActive(false)
    document.body.style.overflow = ''
    
  }

  const removeNotice = () => {
    if (category === undefined) {
        dispatch(removePet(_id));
        setModalActive(false);
      }
    else {
      dispatch(operations.deleteUserNotice(_id))
      .then(() => {
        refreshingPage();
      })
      setModalActive(false);
    }
  
  };

  return (
    <>{category === undefined && (
<CircleBtnTrash onClick={() => setModalActive(true)}>
        <StyledTrash />
      </CircleBtnTrash>
    )}
      {category !== undefined && (
      <StyledButton 
      onClick={() => setModalActive(true)}>
        Delete <StyledTrashNotice />
                </StyledButton>
    )}
      {
      // modalActive && (
      <Modal 
      onClick={() => closeModal()}
      active={modalActive}
      setActive={setModalActive}>
<ModalContentDellLogout
className={modalActive ? "modal-content active" : "modal-content"}>
  <WrapperQuit>
          Do you really want to delete pet?
          <div>
            {' '}
            <ButtonQuit
              type="button"
              onClick={removeNotice}
            >
              Yes
            </ButtonQuit>
            <ButtonQuit type="button" onClick={() => setModalActive(false)}>
              Cancel
            </ButtonQuit>
          </div>
        </WrapperQuit>
         </ModalContentDellLogout>
      </Modal>
      // )
      }
    </>
  );
};
