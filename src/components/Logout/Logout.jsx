import { HiOutlineLogout } from 'react-icons/hi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { LogoutBtn, WrapperQuit, ButtonQuit } from './Logout.styled';
import Modal from '../common/Modal/Modal';
import { toast } from 'react-toastify';

export const Logout = () => {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);
  const navigate = useNavigate();

  return (
    <main>
      <LogoutBtn onClick={() => setModalActive(true)}>
        <HiOutlineLogout color="rgba(245, 146, 86, 0.6)" size="18px" /> Log Out
      </LogoutBtn>
      <Modal active={modalActive} setActive={setModalActive}>
        <WrapperQuit>
          Do you really want to logout?
          <div>
            {' '}
            <ButtonQuit
              type="button"
              onClick={() => {
                dispatch(logOut()).then(res => {
                  if (res.meta.requestStatus === 'fulfilled') {
                    toast.success('Successfully logged out!');
                    navigate('/login', { replace: true });
                  } else {
                    toast.error('Something went wrong, please try again!');
                  }
                });
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
    </main>
  );
};
