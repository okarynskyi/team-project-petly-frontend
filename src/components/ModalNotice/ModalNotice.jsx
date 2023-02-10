import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Loader } from 'components/Loader';
import Modal from 'components/common/Modal/Modal';
import { selectIsLoggedIn, selectUser } from 'redux/auth/authSelectors';
import operations from 'redux/notices/noticesOperations';
import { selectOneNoticeMoreInfo, selectIsLoading } from 'redux/notices/noticesSelectors';
import { dateConverter } from 'helpers/formatDate';
import { normalizeCategoryName } from 'helpers/noticesCategoryShelf';
import { ModalNoticeWrapper, ImgModal, FilterTitleBox, FitlerTitle, Items, Text, ModalTitle, Email, Tel, TextWrapper, ContactText, ButtonText, ContactItem, Btn, FirstList, ButtonsList, SecondList, ListWrapper, WrapperForDesc, ImageWrapper, ListItemDescr, ButtonTel, PetsFavoriteSvg, CommentSpan, Comment, ModalBox } from './ModalNotice.styled';
import petNotFound from 'staticImages/petNotFound.jpg';

const ModalNotice = () => {
  const [modalActive, setModalActive] = useState(false);
  
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const noticeMoreInfo = useSelector(selectOneNoticeMoreInfo);
  const userId = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading)

  const {
    avatarURL,
    birthday,
    breed,
    comments,
    location,
    owner,
    name,
    price,
    sex,
    title,
    _id,
    adopStatus,
    favorite,
  } = noticeMoreInfo;

  const index = favorite?.indexOf(userId.id);
  const isFavorite = (index > -1 ? true : false);

  const addToFavorite = async () => {
    if (!isLoggedIn) {
      return toast.error(
        'You need to authorize before adding pets to favorites.'
      );
    }
    dispatch(operations.addToFavorites(_id))
      .then(() => {
        dispatch(operations.getOneNotice(_id))
        
        toast.success('Pet added to favorites.');
      })
  };

  const removeFromFavorite = async () => {
    if (!isLoggedIn) {
      return toast.error(
        'You need to authorize before removing pets from favorites.'
      );
    }
    dispatch(operations.deleteFromFavorites(_id))
      .then(() => {
        dispatch(operations.getOneNotice(_id))
    
        toast.success('Pet removed from favorites.');
      })
  };
  
  function openModal() {
    setModalActive(true)
    document.body.style.overflow = 'hidden';
  };
  
  return (
    <div position="relative">
      <ModalNoticeWrapper onClick={() => openModal()}>Learn more</ModalNoticeWrapper>
      <Modal
        active={modalActive}
        setActive={setModalActive}>
        <ModalBox>
          <WrapperForDesc>
            <ImageWrapper>
              <FilterTitleBox>
                <FitlerTitle>{normalizeCategoryName[adopStatus]}</FitlerTitle>
              </FilterTitleBox>
              {isLoading ? (
                <Loader />
              ) : (
                <ImgModal src={avatarURL || petNotFound} alt="Pet" loading='lazy' />
              )}
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
                    {price && <Text>Price: </Text>}
                  </Items>
                </FirstList>
                <SecondList>
                  <Items>
                    <ListItemDescr>{name}</ListItemDescr>
                  </Items>
                  <Items>
                    <ListItemDescr>{(birthday) ? dateConverter(birthday) : "Unknown"}</ListItemDescr>
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
                    <ListItemDescr isNotDecorated={true}><Email email={owner?.email}>{owner?.email}</Email></ListItemDescr>
                  </Items>
                  <Items>
                    <ListItemDescr isNotDecorated={true}><Tel phone={owner?.phone} >{owner?.phone}</Tel></ListItemDescr>
                  </Items>
                  <Items>
                    {price && <ListItemDescr>{price}$</ListItemDescr>}
                  </Items>
                </SecondList>
              </ListWrapper>
            </div>
          </WrapperForDesc>
          <div>
            <Comment>
              <CommentSpan>Comments: </CommentSpan>{comments}
            </Comment>
          </div>

          <ButtonsList>
            <ButtonTel phone={owner?.phone}>
              <ContactItem>
                <ContactText>Contact</ContactText>
              </ContactItem>
              </ButtonTel>
            <li>
              {!isFavorite && (
                <Btn onClick={addToFavorite}>
                  <TextWrapper>
                    <ButtonText>Add to</ButtonText>
                    <PetsFavoriteSvg/>
                  </TextWrapper>
                </Btn>
              )}
              {isFavorite && (
                <Btn onClick={removeFromFavorite}>
                  <TextWrapper>
                    <ButtonText>Remove from</ButtonText>
                    <PetsFavoriteSvg/>
                  </TextWrapper>
                </Btn>
              )}
            </li>
          </ButtonsList>
        </ModalBox>
      </Modal>
    </div>
  );
};

export default ModalNotice;