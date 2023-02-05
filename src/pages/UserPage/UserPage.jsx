import { useEffect } from 'react';
import { UserData } from 'components/UserData/UserData';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { PetsData } from 'components/PetsData/PetsData';
import { Container } from 'components/common/Container.styled';
import { SectionUser } from './UserPage.styled';
import { getUserData } from 'redux/user/userOperations';

const UserPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    dispatch(getUserData());
  }, [isLoggedIn, dispatch]);

  return (
    <main>
      <Container>
        <SectionUser>
          <UserData></UserData>
          <PetsData></PetsData>
        </SectionUser>
      </Container>
    </main>
  );
};

export default UserPage;
