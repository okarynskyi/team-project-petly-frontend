// import { useEffect } from 'react';
// import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import operations from '../../redux/notices/noticesOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { selectIsFavorite } from 'redux/notices/noticesSelectors';

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
  DescriptioтText,
  Button,
} from "./NoticeCategoryItem.styled";

const NoticesCategoryItem = ({ notice }) => {
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
  const isFavorite = useSelector(selectIsFavorite);
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
        <Title> Сute dog looking for a home
          {title}
        </Title>

        <DescriptionInner>
          <DescriptionTextContainer>
            <DescriptioтText>Breed:</DescriptioтText>
            <DescriptioтText>Place:</DescriptioтText>
            <DescriptioтText>Age:</DescriptioтText>
          </DescriptionTextContainer>
        </DescriptionInner>

        <DescriptionInner>
          <DescriptionTextContainer>
            <DescriptioтText>{breed}</DescriptioтText>
            <DescriptioтText>{location}</DescriptioтText>
            <DescriptioтText>{birthday}</DescriptioтText>
          </DescriptionTextContainer>
        </DescriptionInner>

      </DescriptionWrapper>

      {isLoggedIn ? (
        <>
          <Button>Learn more</Button>
          <Button>Delete</Button>
        </>
      ) : (
        <Button>Learn more</Button>
      )}
    </Item>
  );
};
// bchdbcjh

export default NoticesCategoryItem;