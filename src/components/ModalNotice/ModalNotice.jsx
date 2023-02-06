import Modal from '../common/Modal/Modal';
// import { useEffect } from 'react';
// import addToFavorites from '../../redux/notices/noticesOperations';
// import deleteUserNotice from '../../redux/notices/noticesOperations';
// import deleteFromFavorites from '../../redux/notices/noticesOperations';
import { useSelector } from 'react-redux';
import { Button, ImgModal, FilterTitleBox, FitlerTitle, Items, Text, ModalTitle, TextWrapper, ContactText, ButtonText, ContactItem, Btn, FirstList, ButtonsList, SecondList, ListWrapper, WrapperForDesc, ImageWrapper, ListItemDescr, ButtonTel, PetsFavoriteSvg, CommentSpan, Comment } from './ModalNotice.styled';
import { useState } from 'react';
import { toast } from 'react-toastify';
import heart from '../../staticImages/heart.svg';
import { ModalBox } from './ModalNotice.styled';

const ModalNotice = ( ) => {

const [modalActive, setModalActive] = useState(false);
// const dispatch = useDispatch();
// const favoriteNotice = useSelector(state => state.auth.user.favorites);
const isAuth = useSelector(state => state.auth.token);
  // const [isFavorite, setIsFavorite] = useState(null);
  
  //  const findFavoriteNotice = noticeId => {
  //   if (!isAuth) return;
  //   const finedNotice = favoriteNotice.find(el => el === noticeId);
  //   return finedNotice;
  // };
  // useEffect(() => {
    // setIsFavorite(findFavoriteNotice(data._id));
    // eslint-disable-next-line
  // }, [favoriteNotice, data._id]);

  // const corectData = str => {
  //   const data = new Date(str).getDate();
  //   const month = new Date(str).getMonth() + 1;
  //   const year = new Date(str).getFullYear();
  //   return (
  //     (data < 10 ? '0' + data.toString() + '.' : data.toString() + '.') +
  //     (month < 10 ? '0' + month.toString() : month.toString()) +
  //     '.' +
  //     year.toString()
  //   );
  // };
  const handleClick = () => {
    if (!isAuth) {
      toast.error('You must be logged in!');
      return;
    }
  };

  // const fixedStatus = str => {
  //   if (str === 'for-free') {
  //     console.log(str);
  //     const fixStr = str.replaceAll(str, 'in good hands');
  //     return fixStr[0].toUpperCase() + fixStr.slice(1);
  //   }
  //   return str[0].toUpperCase() + str.slice(1);
  // };

  // const {
  //   _id,
  //   avatarURL,
  //   birthday,
  //   breed,
  //   comments,
  //   // own,
  //   location,
  //   owner,
  //   name,
  //   favorite,
  //   price,
  //   sex,
  //   title,
  //   category,
  //   // adopStatus,
  // } = notice;
  
  // const noItem = '-------------';
  // const noPrice = '0';

  // const dispatch = useDispatch();

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
                {/* <FitlerTitle>{category}</FitlerTitle> */}
                <FitlerTitle>category</FitlerTitle>
              </FilterTitleBox>
              <ImgModal src="" alt="Pet" />
            </ImageWrapper>

            <div>
              <ModalTitle>titledog</ModalTitle>
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
                    <ListItemDescr>Name</ListItemDescr>
                  </Items>
                  <Items>
                    <ListItemDescr>birthday</ListItemDescr>
                  </Items>
                  <Items>
                    <ListItemDescr>breed</ListItemDescr>
                  </Items>
                  <Items>
                    <ListItemDescr>location</ListItemDescr>
                  </Items>
                  <Items>
                    <ListItemDescr>sex</ListItemDescr>
                  </Items>
                  <Items>
                    <ListItemDescr>email</ListItemDescr>
                  </Items>
                  <Items>
                    <ListItemDescr>phone</ListItemDescr>
                  </Items>
                  {/* {data.price ? ( */}
                  <Items>
                    <ListItemDescr>price</ListItemDescr>
                    </Items>
                     {/* ) : null} */}
                </SecondList>
              </ListWrapper>
            </div>
          </WrapperForDesc>
          <div>
          <Comment>
            <CommentSpan>Comments:</CommentSpan>comments
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
              <Btn type="button" onClick={handleClick}>
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