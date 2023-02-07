import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import operations from '../../redux/notices/noticesOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import ModalNotice from '../ModalNotice/ModalNotice';
import { formatAgeYears } from 'helpers/formatDate';
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
  ButtonDiv,
} from './NoticeCategoryItem.styled';

const categoryShelf = {
  "sell": "sell",
  "lost-found": "lost-found",
  "in-good-hands": "in-good-hands",
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
    
  const refreshingPage = (category) => {
    if (category === categoryShelf[category]) dispatch(operations.getNoticesByCategory(category));
    if (category === "favorites-ads") { dispatch(operations.getFavorites()); };
    if (category === "my-ads") { dispatch(operations.getUserNotices()); };
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

  const handleRemoveNotice = () => {
    dispatch(operations.deleteUserNotice(_id))
      .then(() => {
        refreshingPage(category);
      })
  };

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
            <DescriptionText>{formatAgeYears(birthday)}</DescriptionText>
          </DescriptionTextContainer>
        </DescriptionInner>
      </DescriptionWrapper>

      <ButtonDiv>
        {isLoggedIn ? (
          <>
            <ModalNotice key={notice._id}
                notice={notice}></ModalNotice>
            {isOwner && <Button onClick={handleRemoveNotice}>Delete</Button>}
          </>
        ) : (
          <ModalNotice key={notice._id}
                notice={notice}></ModalNotice>
        )}
      </ButtonDiv>
    </Item>
  );
};

export default NoticesCategoryItem;