import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, 
  useSelector 
} from 'react-redux';

import NoticeCategoryItem from '../../components/NoticeCategoryItem/NoticeCategoryItem';

import {List, Wrapper,} from './NoticesCategoriesList.styled';

import operations from '../../redux/notices/noticesOperations';
import { selectNoticesByCategory } from 'redux/notices/noticesSelectors';


const NoticesCategoryList = () => {
  const notices = useSelector(selectNoticesByCategory);
  console.log(notices)
  
  const location = useLocation();
  const category = location.pathname.split('/')[2];

  // console.log(category)

  const dispatch = useDispatch();

  const [search] = useSearchParams();
  
  const query = search.get('text');


  useEffect((categoryName) => {
    
    if (category) {
      console.log(category)
      console.log(dispatch(operations.getNoticesByCategory( category)))
        dispatch(operations.getNoticesByCategory( category
        //  { categoryName: "sell"}
        ));
    } 
  //   if (category) {
  //     dispatch(operations.getNoticesByCategory());
  // } 
    
  }, [
    // page, 
    query, dispatch, category]);

return  notices.length === 0 ? (
  <div>
       <h1>Sorry, Nothing found</h1>
     </div>
) : (
  <Wrapper>
    {notices && notices.length > 0 ? (
      <>
        <List>
          {notices.map(notice => (
            <NoticeCategoryItem
              key={notice._id}
              notice={notice}
            />
          ))}
        </List>
      </>
    ) : (
      <p>loading</p>
    )
    }
  </Wrapper>
);
};
export default NoticesCategoryList;