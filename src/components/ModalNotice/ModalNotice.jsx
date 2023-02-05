import Modal from '../common/Modal/Modal';
// import operations from '../../redux/notices/noticesOperations';
// import { addToFavorites, deleteFromFavorites } from '../../redux/notices/noticesOperations';
// import { useDispatch } from 'react-redux';
import { Button, ImgModal, FilterTitleBox, FitlerTitle, ModalTitle, ModalList, ModalListItem } from './ModalNotice.styled';
import { useState } from 'react';
// import { toast } from 'react-toastify';
import { ModalBox } from './ModalNotice.styled';

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
        <ModalBox>
          <div position="relative">
            <ImgModal alt="" width="50" height="50" />
            <FilterTitleBox>
              <FitlerTitle>for sale</FitlerTitle>
            </FilterTitleBox>
          </div>
          <div>
            <ModalTitle>Cute dog looking for a home</ModalTitle>
            <ModalList>
              <ModalListItem>
                <p>Name:</p>
                <p>Clyde</p>
              </ModalListItem>
              <ModalListItem>
                <p>Birthday:</p>
                <p>12.10.2019</p>
              </ModalListItem>
              <ModalListItem>
                <p>Breed:</p>
                <p>Schnauzer mix</p>
              </ModalListItem>
              <ModalListItem>
                <p>Location:</p>
                <p>LA</p>
              </ModalListItem>
              <ModalListItem>
                <p>The sex:</p>
                <p>male</p>
              </ModalListItem>
              <ModalListItem>
                <p>Email:</p>
                <p>xxx@gmail.com</p>
              </ModalListItem>
              <ModalListItem>
                <p>Phone:</p>
                <p>+380971234567</p>
              </ModalListItem>
            </ModalList>
          </div>
          </ModalBox>
       </Modal>
    </>
  );
};

export default ModalNotice;