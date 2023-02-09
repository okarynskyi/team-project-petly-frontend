import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import operations from '../../redux/notices/noticesOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import petNotFound from '../../staticImages/petNotFound.jpg';
import ModalNotice from '../ModalNotice/ModalNotice';
import { formatAgeYears } from 'helpers/formatDate';
import { categoryShelf, normalizeCategoryName } from 'helpers/noticesCategoryShelf';
import {
  Item,
  ImageWrapper,
  Image,
  CategoryName,
  DescriptionWrapper,
  Title,
  DescriptionInner,
  DescriptionTextContainer,
  DescriptionText,
  AddToFavoriteBtn,
  RemoveFromFavoriteBtn,
  ButtonDiv,
  SvgWrapper,
  ButtonsWrapper,
  StyledButton,
  StyledTrash,
} from './NoticeCategoryItem.styled';

const NoticesCategoryItem = ({ notice, isFavorite, isOwner, category }) => {
  const {
    avatarURL,
    birthday,
    breed,
    location,
    title,
    _id,
    adopStatus,
  } = notice;
  const dispatch = useDispatch();
    
  const isLoggedIn = useSelector(selectIsLoggedIn);
  let query = null;
  
  const refreshingPage = (category) => {
    if (category === categoryShelf[category]) dispatch(operations.getNoticesByCategory({category, query}));
    if (category === "favorites-ads") { dispatch(operations.getFavorites({query})); };
    if (category === "my-ads") { dispatch(operations.getUserNotices({query})); };
  };

  const addToFavorite = async () => {
    if (!isLoggedIn) {
      return toast.error(
        'You need to authorize before adding notices to favorite.'
      );
    }
    dispatch(operations.addToFavorites(_id))
      .then(() => {
        refreshingPage(category);
      })

    toast.success('Notice added to favorite adds.');
  };

  const removeFromFavorite = async () => {
    if (!isLoggedIn) {
      return toast.error(
        'You need to authorize before remove notices from favorite.'
      );
    }
    dispatch(operations.deleteFromFavorites(_id))
      .then(() => {
        refreshingPage(category);
      })

    toast.success('Notice removed from favorite adds.');
  };

  const onChangeOpenModal = () => {
    dispatch(operations.getOneNotice(_id))
  };

  const removeNotice = () => {
    dispatch(operations.deleteUserNotice(_id))
      .then(() => {
        refreshingPage(category);
      })
  };

  return (
    <Item key={_id}>
      <ImageWrapper>
        <Image src={avatarURL || petNotFound} alt="Pet" loading='lazy' />
      </ImageWrapper>
      <CategoryName>{normalizeCategoryName[adopStatus]}</CategoryName>

      {!isFavorite && (
        <SvgWrapper>
          <AddToFavoriteBtn onClick={addToFavorite}/>
        </SvgWrapper>
      )}
      {isFavorite && (
        <SvgWrapper>
          <RemoveFromFavoriteBtn onClick={removeFromFavorite}/>
        </SvgWrapper>
      )}

      <DescriptionWrapper>
        <Title>{title}</Title>

        <DescriptionInner>
          <DescriptionTextContainer>
            <DescriptionText>Breed:</DescriptionText>
            <DescriptionText>Place:</DescriptionText>
            <DescriptionText>Age:</DescriptionText>
          </DescriptionTextContainer>
          
          <DescriptionTextContainer>
            <DescriptionText>{breed}</DescriptionText>
            <DescriptionText>{location}</DescriptionText>
            <DescriptionText>{formatAgeYears(birthday)}</DescriptionText>
          </DescriptionTextContainer>
        </DescriptionInner>
      </DescriptionWrapper>

      <ButtonDiv>
        {isLoggedIn ? (
          <>
            <ButtonsWrapper>
              <StyledButton onClick={onChangeOpenModal}>
                <ModalNotice />
              </StyledButton>
              {isOwner && <StyledButton onClick={removeNotice}>Delete <StyledTrash /></StyledButton>}
            </ButtonsWrapper>
          </>
        ) : (
            <StyledButton onClick={onChangeOpenModal}>
              <ModalNotice/>
          </StyledButton>
        )}
      </ButtonDiv>
    </Item>
  );
};

export default NoticesCategoryItem;