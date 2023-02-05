import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import operations from '../../redux/notices/noticesOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import ModalNotice from '../ModalNotice/ModalNotice';

import {
  Item,
  ImageWrapper,
  Image,
  CategoryName,
  CheckBoxAddToFavorite,
  DescriptionWrapper,
  Title,
  DescriptionInner,
  DescriptionTextContainer,
  DescriptionText,
  Button,
  CheckBoxAddDiv,
  CheckBoxAddLabel,
} from './NoticeCategoryItem.styled';

const categoryShelf = {
  sell: 'sell',
  'lost-found': 'lost-found',
  'in-good-hands': 'in-good-hands',
};

const NoticesCategoryItem = ({ notice, isFavorite, isOwner, category }) => {
  const {
    avatarURL,
    birthday,
    breed,
    // comments,
    location,
    // owner,
    // name,
    // price,
    // sex,
    title,
    _id,
    adopStatus,
  } = notice;
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const addToFavorite = async () => {
    if (!isLoggedIn) {
      return toast.error(
        'You need to authorize before adding notices to favorite.'
      );
    }
    dispatch(operations.addToFavorites(_id)).then(() => {
      dispatch(operations.getNoticesByCategory(category));
    });

    toast.success('Notice added to favorite adds.');
  };

  const removeFromFavorite = async () => {
    if (!isLoggedIn) {
      return toast.error(
        'You need to authorize before remove notices from favorite.'
      );
    }
    dispatch(operations.deleteFromFavorites(_id)).then(() => {
      if (category === categoryShelf[category]) {
        dispatch(operations.getNoticesByCategory(category));
      }
      if (category === 'favorites-ads') {
        dispatch(operations.getFavorites());
      }
      if (category === 'my-ads') {
        dispatch(operations.getUserNotices());
      }
    });

    toast.success('Notice removed from favorite adds.');
  };

  function dateConverter(utcDate) {
    const date = new Date(utcDate);
    const day = date.getDay().toString().padStart(2, '0');
    const month = date.getMonth().toString().padStart(2, '0');
    const year = date.getFullYear();
    const convertedDate = [day, month, year].join('/');
    return convertedDate;
  }

  return (
    <Item key={_id}>
      <ImageWrapper>
        <Image src={avatarURL} alt="Pet" />
      </ImageWrapper>
      <CategoryName>{adopStatus}</CategoryName>

      {!isFavorite && (
        <CheckBoxAddDiv>
          <CheckBoxAddToFavorite
            type="checkbox"
            onChange={addToFavorite}
            id={_id}
            name="check"
          />
          <CheckBoxAddLabel htmlFor={_id}></CheckBoxAddLabel>
        </CheckBoxAddDiv>
      )}
      {isFavorite && (
        <CheckBoxAddDiv>
          <CheckBoxAddToFavorite
            type="checkbox"
            onChange={removeFromFavorite}
            id={_id}
            name="check"
            checked
          />
          <CheckBoxAddLabel htmlFor={_id}></CheckBoxAddLabel>
        </CheckBoxAddDiv>
      )}

      <DescriptionWrapper>
        <Title>{title}</Title>

        <DescriptionInner>
          <DescriptionTextContainer>
            <DescriptionText>Breed:</DescriptionText>
            <DescriptionText>Place:</DescriptionText>
            <DescriptionText>Age:</DescriptionText>
          </DescriptionTextContainer>
          {/* </DescriptionInner>

        <DescriptionInner> */}
          <DescriptionTextContainer>
            <DescriptionText>{breed}</DescriptionText>
            <DescriptionText>{location}</DescriptionText>
            <DescriptionText>{dateConverter(birthday)}</DescriptionText>
          </DescriptionTextContainer>
        </DescriptionInner>
      </DescriptionWrapper>
      {isLoggedIn ? (
        <>
          <ModalNotice></ModalNotice>
          {isOwner && <Button>Delete</Button>}
        </>
      ) : (
        <ModalNotice></ModalNotice>
      )}
    </Item>
  );
};

export default NoticesCategoryItem;
