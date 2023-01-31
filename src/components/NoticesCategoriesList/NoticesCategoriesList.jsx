import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, 
  // useSelector 
} from 'react-redux';

import NoticeCategoryItem from '../../components/NoticeCategoryItem/NoticeCategoryItem';

import {List, Wrapper,} from './NoticesCategoriesList.styled';

import operations from '../../redux/notices/noticesOperations';
// import { selectNotices } from 'redux/notices/noticesSelectors';


const NoticesCategoryList = () => {
  // const notices = useSelector();
  
  const location = useLocation();
  const category = location.pathname.split('/')[2];

  const dispatch = useDispatch();

  const [search] = useSearchParams();
  const page = search.get('page');
  const query = search.get('text');


  useEffect(() => {
    
    if (category) {
        dispatch(operations.getNoticesByCategory({ category: category, page }));
    } 
    
  }, [page, query, dispatch, category]);

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
