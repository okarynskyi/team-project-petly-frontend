import Modal from '../common/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { ImgModal, FilterTitleBox, FitlerTitle, Items, Text, ModalTitle, TextWrapper, ContactText, ButtonText, ContactItem, Btn, FirstList, ButtonsList, SecondList, ListWrapper, WrapperForDesc, ImageWrapper, ListItemDescr, ButtonTel, PetsFavoriteSvg, CommentSpan, Comment } from './ModalNotice.styled';
import { useState } from 'react';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { toast } from 'react-toastify';
import operations from '../../redux/notices/noticesOperations';
import { ModalBox } from './ModalNotice.styled';
import petNotFound from '../../staticImages/petNotFound.jpg';
import { dateConverter } from '../../helpers/formatDate';
// import refreshingPage from '../NoticeCategoryItem/NoticeCategoryItem';

const ModalNotice = ({ notice, isFavorite, category }) => {
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
  } = notice;

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();

  const addToFavorite = async () => {
    if (!isLoggedIn) {
      return toast.error(
        'You need to authorize before adding pets to favorites.'
      );
    }
    dispatch(operations.addToFavorites(_id))
      // .then(() => {
      //   refreshingPage(category);
      // })

    toast.success('Pet added to favorites.');
  };

  const removeFromFavorite = async () => {
    if (!isLoggedIn) {
      return toast.error(
        'You need to authorize before removing pets from favorites.'
      );
    }
    dispatch(operations.deleteFromFavorites(_id))
      // .then(() => {
      //   refreshingPage(category);
      // })

    toast.success('Pet removed from favorites.');
  };

function openModal () {
  setModalActive(true)
  document.body.style.overflow = 'hidden';
  }
  
  return (
    <div position="relative">
      <div onClick={() => openModal()}>Learn more</div>
      <Modal
      active={modalActive} 
        setActive={setModalActive}>
        <ModalBox>
          <WrapperForDesc>
            <ImageWrapper>
              <FilterTitleBox>
                <FitlerTitle>{adopStatus}</FitlerTitle>
              </FilterTitleBox>
              <ImgModal src={avatarURL || petNotFound} alt="Pet" />
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
                    {price && <Text>Sell: </Text>}
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
                    <ListItemDescr href={`mailto:${owner.name}`}>{owner.email}</ListItemDescr>
                  </Items>
                  <Items>
                    <ListItemDescr href={`tel:${owner.phone}`}>{owner.phone}</ListItemDescr>
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
            <ContactItem>
              <ButtonTel href={`tel:${owner.phone}`}>
                <ContactText>Contact</ContactText>
              </ButtonTel>
            </ContactItem>
            <li>
              {!isFavorite && (
                <Btn onClick={addToFavorite}>
                  <TextWrapper>
                  <ButtonText>Add to</ButtonText>
                  <PetsFavoriteSvg></PetsFavoriteSvg>
                </TextWrapper>
          </Btn>
      )}
      {isFavorite && (
                <Btn onClick={removeFromFavorite}>
                  <TextWrapper>
                  <ButtonText></ButtonText>
                  <PetsFavoriteSvg></PetsFavoriteSvg>
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