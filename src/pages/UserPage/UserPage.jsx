import { useEffect } from 'react';
import { UserData } from 'components/UserData/UserData';
import { PetsData } from 'components/PetsData/PetsData';
import { Container } from 'components/common/Container.styled';
import { SectionUser } from './UserPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from 'redux/user/userSelectors';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { getUserData } from 'redux/user/userOperations';
import { formatBirthDate } from 'helpers/formatDate';

export const UserPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userInfo = useSelector(selectUserInfo);

  useEffect(() => {
      if (!isLoggedIn) {
      return;
    }
    dispatch(getUserData());
 
  }, [dispatch, isLoggedIn, userInfo]);

  function filterData(obj) {
    let filterUserInfo = [];
  if (obj) {
     for (let key in obj) {

       if (key === 'birthday') {
         if (obj[key]) {
        filterUserInfo.push({ label: key, value: formatBirthDate(obj[key]) });
         } else {
           filterUserInfo.push({ label: key, value: formatBirthDate('2000-12-01T00:00:00.000Z' ) });
      }
      
      continue;
    };
    if (key === 'avatarURL' || key === 'favorites' ) {
      continue;
    } else {
      filterUserInfo.push({ label: key, value: obj[key] });
    }
  }
    } return filterUserInfo;
  }
 
 
  return (
    <main>
      <Container>
        <SectionUser>
         {userInfo && (<UserData userInfo={filterData(userInfo.user)} avatar={null}></UserData>)}
          <PetsData></PetsData>
        </SectionUser>
      </Container>
    </main>
  );
};
