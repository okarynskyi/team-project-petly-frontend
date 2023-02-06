import Modal from '../common/Modal/Modal';
// import addToFavorites from '../../redux/notices/noticesOperations';
// import deleteUserNotice from '../../redux/notices/noticesOperations';
// import deleteFromFavorites from '../../redux/notices/noticesOperations';
// import { useDispatch, useSelector } from 'react-redux';
import { Button, ImgModal, FilterTitleBox, FitlerTitle, Items, Text, ModalTitle, TextWrapper, ContactText, ButtonText, ContactItem, Btn, FirstList, ButtonsList, SecondList, ListWrapper, WrapperForDesc, ImageWrapper, ListItemDescr, ButtonTel, PetsFavoriteSvg, CommentSpan, Comment } from './ModalNotice.styled';
import { useState } from 'react';
// import { toast } from 'react-toastify';
// import operations from '../../redux/notices/noticesOperations';
// import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import heart from '../../staticImages/heart.svg';
import { ModalBox } from './ModalNotice.styled';

// const categoryShelf = {
//   "sell": "sell",
//   "lost-found": "lost-found",
//   "in-good-hands": "in-good-hands",
// };

const ModalNotice = ({ notice, isFavorite, isOwner, category }) => {
  const {
    avatarURL,
    birthday,
    breed,
    comments,
    location,
    // owner,
    name,
    price,
    sex,
    title,
    // _id,
    adopStatus,
  } = notice;

  const [modalActive, setModalActive] = useState(false);
  // const dispatch = useDispatch();

  // const isLoggedIn = useSelector(selectIsLoggedIn);

  // const refreshingPage = (category) => {
  //   if (category === categoryShelf[category]) dispatch(operations.getNoticesByCategory(category));
  //   if (category === "favorites-ads") { dispatch(operations.getFavorites()); };
  //   if (category === "my-ads") { dispatch(operations.getUserNotices()); };
  // };

  // const addToFavorite = async () => {
  //   if (!isLoggedIn) {
  //     return toast.error(
  //       'You need to authorize before adding notices to favorite.'
  //     );
  //   }
  //   dispatch(operations.addToFavorites(_id))
  //     .then(() => {
  //       refreshingPage(category);
  //     })

  //   toast.success('Notice added to favorite adds.');
  // };

  // const removeFromFavorite = async () => {
  //   if (!isLoggedIn) {
  //     return toast.error(
  //       'You need to authorize before remove notices from favorite.'
  //     );
  //   }
  //   dispatch(operations.deleteFromFavorites(_id))
  //     .then(() => {
  //       refreshingPage(category);
  //     })

  //   toast.success('Notice removed from favorite adds.');
  // };

  function dateConverter(utcDate) {
    const date = new Date(utcDate);
    const day = date.getDay().toString().padStart(2, '0');
    const month = date.getMonth().toString().padStart(2, '0');
    const year = date.getFullYear();
    const convertedDate = [day, month, year].join('/');
    return convertedDate;
  }
  
  // const noItem = '-------------';
  // const noPrice = '0';

  return (
    <div position="relative">
      <Button onClick={() => setModalActive(true)}>Learn more</Button>
      <Modal 
      active={modalActive} 
        setActive={setModalActive}>
        <ModalBox>
          {/* div */}
          <WrapperForDesc>
            <ImageWrapper>
              <FilterTitleBox>
                <FitlerTitle>{adopStatus}</FitlerTitle>
              </FilterTitleBox>
              <ImgModal src={avatarURL} alt="Pet" />
            </ImageWrapper>

            <div>
              <ModalTitle>{title}</ModalTitle>
              <ListWrapper>
                <FirstList>
                  <Items>
                    <Text>Name:</Text>
                  </Items>
                  <Items>
                    <Text>Birthday:</Text>
                  </Items>
                  <Items>
                    <Text>Breed:</Text>
                  </Items>
                  <Items>
                    <Text>Location:</Text>
                  </Items>
                  <Items>
                    <Text>The sex:</Text>
                  </Items>
                  <Items>
                    <Text>Email:</Text>
                  </Items>
                  <Items>
                    <Text>Phone:</Text>
                  </Items>
                  <Items>
                    <Text>Price:</Text>
                  </Items>
                </FirstList>
                <SecondList>
                  <Items>
                    <ListItemDescr>{name}</ListItemDescr>
                  </Items>
                  <Items>
                    <ListItemDescr>{dateConverter(birthday)}</ListItemDescr>
                  </Items>
                  <Items>
                    <ListItemDescr>{breed}</ListItemDescr>
                  </Items>
                  <Items>
                    <ListItemDescr>{location}</ListItemDescr>
                  </Items>
                  <Items>
                    <ListItemDescr>{sex}</ListItemDescr>
                  </Items>
                  <Items>
                    <ListItemDescr>email</ListItemDescr>
                  </Items>
                  <Items>
                    <ListItemDescr>phone</ListItemDescr>
                  </Items>
                  {/* {data.price ? ( */}
                  <Items>
                    <ListItemDescr>{price}</ListItemDescr>
                    </Items>
                     {/* ) : null} */}
                </SecondList>
              </ListWrapper>
            </div>
          </WrapperForDesc>
          <div>
          <Comment>
            <CommentSpan>Comments:</CommentSpan>{comments}
          </Comment>
          </div>
          <ButtonsList>
            <ContactItem>
              <ButtonTel>href=""
                <ContactText>Contact</ContactText>
              </ButtonTel>
            </ContactItem>
            <li>
               {/* {isFavorite ? ( */}
              <Btn
                type="button">
                <TextWrapper>
                  <ButtonText>Remove from</ButtonText>
                  <PetsFavoriteSvg><use href={heart + '#heart-button'}></use></PetsFavoriteSvg>
                </TextWrapper>
              </Btn>
                {/* ) : isAuth ? ( */}
              <Btn type="button">
                <TextWrapper>
                  <ButtonText>Add to</ButtonText>
                  <PetsFavoriteSvg><use href={heart + '#heart-button'}></use></PetsFavoriteSvg>
                </TextWrapper>
              </Btn>      
                {/* ) : ( */}
              <Btn type="button">
                <TextWrapper>
                  <ButtonText>Add to</ButtonText>
                  <PetsFavoriteSvg><use href={heart + '#heart-button'}></use></PetsFavoriteSvg>
                </TextWrapper>
                </Btn>
                {/* )} */}
            </li>
          </ButtonsList>
        </ModalBox>
       </Modal>
    </div>
  );
};

export default ModalNotice;