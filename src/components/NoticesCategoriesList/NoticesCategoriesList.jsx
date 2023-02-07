import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';

import NoticeCategoryItem from '../../components/NoticeCategoryItem/NoticeCategoryItem';
import { Loader } from 'components/Loader';


import operations from '../../redux/notices/noticesOperations';
import { selectNoticesByCategory, selectIsLoading, selectIsNoticeAdded } from 'redux/notices/noticesSelectors';
import { selectUser, selectIsLoggedIn } from 'redux/auth/authSelectors';

import { Wrapper, List, NotFound } from './NoticesCategoriesList.styled';
import notFound from "../../staticImages/notice/notFound.jpg"

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
  const isNoticeAdded = useSelector(selectIsNoticeAdded)
  const user = useSelector(selectUser)
 
  const category = location.pathname.split('/')[2];
  
  const [search] = useSearchParams();
  
  const query = search.get('query');

  let isFavorite = false;

  useEffect(() => {
      if (category) {
        if (category === categoryShelf[category] && query) {
          dispatch(operations.getNoticesByCategory({ category: category, query }));
        } 
        if (category === "favorites-ads" && query) {
          dispatch(operations.getFavorites({query}))
        }
        if (category === "my-ads" && query) {
          dispatch(operations.getUserNotices({query}))
        }
        else 
        {if (category === categoryShelf[category]) { dispatch(operations.getNoticesByCategory({ category: category, query })); };
        if (category === "favorites-ads") { dispatch(operations.getFavorites({query})); };
        if (category === "my-ads") { dispatch(operations.getUserNotices({query})); };}
    }
  }, [query, dispatch, category, isNoticeAdded]);
  
  return !isLoading && notices.length===0 ? (
  <div>
    <NotFound src={notFound} alt="defaut" />
  </div>
      // <imgNotFound src={notFound} alt="defaut" />
  ) : (
    <Wrapper>
      {notices && notices.length > 0 ? (
        <>              
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
        </>
      ) : (
        <Loader />
      )
      }
    </Wrapper>
  );
};

export default NoticesCategoryList;

