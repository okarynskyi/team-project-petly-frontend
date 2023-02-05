import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';

import NoticeCategoryItem from '../../components/NoticeCategoryItem/NoticeCategoryItem';
import { Loader } from 'components/Loader';


import operations from '../../redux/notices/noticesOperations';
import { selectNoticesByCategory, selectIsLoading } from 'redux/notices/noticesSelectors';
import { selectUser, selectIsLoggedIn } from 'redux/auth/authSelectors';

import { Wrapper, } from './NoticesCategoriesList.styled';

const List = lazy(() => import('./NoticesCategoriesList.styled'));

const categoryShelf = {
  "sell": "sell",
  "lost-found": "lost-found",
  "in-good-hands": "in-good-hands",
};

const NoticesCategoryList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  const notices = useSelector(selectNoticesByCategory);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const user = useSelector(selectUser)
  
  const category = location.pathname.split('/')[2];
  
  const [search] = useSearchParams();
  
  const query = search.get('name');

  let isFavorite = false;

  useEffect(() => {
    if (query) {
      // console.log(query)
      dispatch(operations.getByQuery(query));
    }
    if (category === categoryShelf[category]) { dispatch(operations.getNoticesByCategory(category)); };
    if (category === "favorites-ads") { dispatch(operations.getFavorites()); };
    if (category === "my-ads") { dispatch(operations.getUserNotices()); };
    
  }, [
    // page, 
    query, dispatch, category]);

  return !isLoading && notices.length === 0 ? (
    <div>
      <h1> Поверніть єнота!!! </h1>
    </div>
  ) : (
    <Wrapper>
      {notices && notices.length > 0 ? (
        <>
          <Suspense fallback={<Loader />}>
              
            <List>
              {!isLoggedIn && notices.map(notice => (<NoticeCategoryItem
                key={notice._id}
                notice={notice}
              />))}
              
              {isLoggedIn && notices.map(notice => {
                const isOwner = notice.owner._id === user.id;
                const index = notice.favorite.indexOf(user.id);
                
                if (index > -1) {
                  isFavorite = true;
                } else isFavorite = false;

                return <NoticeCategoryItem
                  key={notice._id}
                  notice={notice}
                  isFavorite={isFavorite}
                  isOwner={isOwner}
                  category={category}
                />

              })}
            </List>
              
          </Suspense>
        </>
      ) : (
        <Loader />
      )
      }
    </Wrapper>
  );
};

export default NoticesCategoryList;

