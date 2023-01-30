// import { useEffect } from 'react';
// import { useLocation, useSearchParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

import NoticeCategoryItem from '../../components/NoticeCategoryItem/NoticeCategoryItem';

import {List, Wrapper,} from './NoticesCategoriesList.styled';

const NoticesCategoryList = () => {



  return   (
    <Wrapper>
        <>
          <List>
            <NoticeCategoryItem />
          </List>
        </>
    </Wrapper>
  );
};

export default NoticesCategoryList;
