import Modal from '../common/Modal/Modal';
// import operations from '../../redux/notices/noticesOperations';
// import { addToFavorites, deleteFromFavorites } from '../../redux/notices/noticesOperations';
// import { useDispatch } from 'react-redux';
import { Button } from './ModalNotice.styled';
import { useState } from 'react';
// import { toast } from 'react-toastify';

const ModalNotice = ({ notice = {}, closeModal, getBtnInfo, token, path }) => {
  const [modalActive, setModalActive] = useState(false);
  // const noItem = '-------------';
  // const noPrice = '0';

  //  const {
  //   _id,
  //   avatarURL,
  //   favorite,
  //   title,
  //   category,
  //   name,
  //   birthday,
  //   breed,
  //   location,
  //   sex,
  //   owner,
  //   comments,
  //   price,
  //   own,
  // } = notice;
  // const dispatch = useDispatch();

  // const delNotice = id => {
  //   dispatch(deleteUserNotice(id));
  //   closeModal();
  // };

  // const handleFavorite = async id => {
  //   if (!Boolean(token)) {
  //     toast.warn('You are not a registered user!');
  //     return;
  //   }
  //   if (favorite) {
  //     const { payload } = await dispatch(deleteFromFavorites(id));
  //     if (payload === id && path === 'favorite') {
  //       await dispatch(deleteFromFavorites(id));
  //       closeModal();
  //     }
  //   } else {
  //     dispatch(addToFavorites(id));
  //   }
  //   return;
  // };

  return (
    <>
      <Button onClick={() => setModalActive(true)}>Learn more</Button>
       <Modal 
      active={modalActive} 
      setActive={setModalActive}>
          <>
          text
          </>
       </Modal>
    </>
  );
};

export default ModalNotice;