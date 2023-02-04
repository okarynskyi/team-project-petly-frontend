// import { useEffect } from 'react';
// import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import operations from '../../redux/notices/noticesOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

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
} from "./NoticeCategoryItem.styled";

const NoticesCategoryItem = ({ notice, isFavorite, isOwner }) => {
  // console.log(notice)
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
  } = notice
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isFavorite = useSelector(selectIsFavorite);
  // const isLoggedIn = true
  // console.log(isLoggedIn)

  // console.log(_id)
  // const token = useSelector(selectToken);

  const addToFavorite = e => {
    if (!isLoggedIn) {
      return toast.error('You need to authorize before adding notices to favorite.');
    }
    dispatch(operations.addToFavorites(_id));

    toast.success('Notice added to favorite adds.');
  };

  const removeFromFavorite = e => {
    if (!isLoggedIn) {
      return toast.error('You need to authorize before remove notices from favorite.');
    }
    dispatch(operations.removeFromFavorite(_id));

    toast.success('Notice removed from favorite adds.');
  };

  function dateConverter(utcDate) {
    const date = new Date(utcDate);
    const day = date.getDay().toString().padStart(2, "0");
    const month = date.getMonth().toString().padStart(2, "0");
    const year = date.getFullYear();
    const convertedDate = [day, month, year].join('/');
    return convertedDate;
  }

  return (
    <Item key={_id}>
      <ImageWrapper>
        <Image
          src={avatarURL}
          alt="Pet"
        />
      </ImageWrapper>
      <CategoryName>Category name</CategoryName>

      
      {!isFavorite && (
        <CheckBoxAddToFavorite onClick={addToFavorite}>Like</CheckBoxAddToFavorite>
      )}
      {isFavorite && (
        <CheckBoxAddToFavorite onClick={removeFromFavorite}>DesLike</CheckBoxAddToFavorite>
      )}

      
      <DescriptionWrapper>
        <Title>
          {title}
        </Title>

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
          <Button>Learn more</Button>
          {isOwner && <Button>Delete</Button>}
        </>
      ) : (
        <Button>Learn more</Button>
      )}
    </Item>
  );
};

export default NoticesCategoryItem;