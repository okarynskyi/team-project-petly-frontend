// import { useEffect } from 'react';
// import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import operations from '../../redux/notices/noticesOperations';
import { selectToken } from 'redux/auth/authSelectors';

import { Wrapper, List } from "./NoticeCategoryItem.styled";

const NoticesCategoryItem = ({notice}) => {
  const {
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
  } = notice

  console.log(notice)
  const dispatch = useDispatch();
  const token = useSelector(selectToken);


  return   (
    <Wrapper>
        <>
          <List>
            <h1>{name}</h1>
            <h2>{sex}</h2>
          </List>
        </>
     </Wrapper>
  );
};

export default NoticesCategoryItem;