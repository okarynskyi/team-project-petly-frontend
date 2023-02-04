import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import NoticeCategoryItem from '../../components/NoticeCategoryItem/NoticeCategoryItem';

import {List, Wrapper,} from './NoticesCategoriesList.styled';

import operations from '../../redux/notices/noticesOperations';
import { selectNoticesByCategory, selectIsLoading } from 'redux/notices/noticesSelectors';
import { selectUser } from 'redux/auth/authSelectors';

import { Loader } from 'components/Loader';

const NoticesCategoryList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const notices = useSelector(selectNoticesByCategory);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);

  const category = location.pathname.split('/')[2];

  const [search] = useSearchParams();
  
  const query = search.get('name');

  let isFavorite = false;


  useEffect(() => {
    if (query) {
      // console.log(query)
      dispatch(operations.getByQuery(query));
    }
    if (category) {
      // console.log(category)
      // console.log(dispatch(operations.getNoticesByCategory( category)))
      dispatch(operations.getNoticesByCategory(category));
    }
    //   if (category) {
    //     dispatch(operations.getNoticesByCategory());
    // } 
    
  }, [
    // page, 
    query, dispatch, category]);

  return !isLoading && notices.length === 0 ? (
    <div>
      <h1>Sorry, Nothing found</h1>
    </div>
  ) : (
    <Wrapper>
      {notices && notices.length > 0 ? (
        <>
          <List>
              {notices.map(notice => {
                const isOwner = notice.owner._id === user.user.id;
                const index = notice.favorite.indexOf(user.user.id);
                
                if (index > -1) {
                  isFavorite = true;
                } else isFavorite = false;

                return <NoticeCategoryItem
                  key={notice._id}
                  notice={notice}
                  isFavorite={isFavorite}
                  isOwner={isOwner}
                />

              })}
          </List>
        </>
      ) : (
        <Loader />
      )
      }
    </Wrapper>
  );
};
export default NoticesCategoryList;

