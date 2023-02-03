// import { useEffect } from 'react';
// import { useLocation, useSearchParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import operations from '../../redux/notices/noticesOperations';
// import { selectToken } from 'redux/auth/authSelectors';

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
  DescriptionTextContainer2,
  DescriptioтText,
  Button,
} from "./NoticeCategoryItem.styled";

const NoticesCategoryItem = ({ notice }) => {
  const {
    avatarURL,
    // birthday,
    // breed,
    // comments,
    // location,
    // owner,
    // name,
    // price,
    // sex,
    // title,
    // _id,
  } = notice

  console.log(avatarURL)
  // const dispatch = useDispatch();
  // const token = useSelector(selectToken);


  return (
    <Item>
      <ImageWrapper>
        <Image
          src={avatarURL}
          alt="Pet"
        />
      </ImageWrapper>
      <CategoryName />
      <CheckBoxAddToFavorite/>
      
      <DescriptionWrapper>
        <Title> Сute dog looking for a home
          {/* {title} */}
        </Title>

        <DescriptionInner>
          <DescriptionTextContainer>
            <DescriptioтText>Breed:</DescriptioтText>
            <DescriptioтText>Place:</DescriptioтText>
            <DescriptioтText>Age:</DescriptioтText>
          </DescriptionTextContainer>

          <DescriptionTextContainer2>
            <DescriptioтText>Pomeranian</DescriptioтText>
            <DescriptioтText>Lviv</DescriptioтText>
            <DescriptioтText>one year</DescriptioтText>
          </DescriptionTextContainer2>

        </DescriptionInner>
        <Button>Learn more</Button>
      </DescriptionWrapper>
    </Item>
  );
};

export default NoticesCategoryItem;