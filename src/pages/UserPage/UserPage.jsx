import { useEffect } from 'react';
import { UserData } from 'components/UserData/UserData';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { PetsData } from 'components/PetsData/PetsData';
import { Container } from 'components/common/Container.styled';
import { SectionUser, WrapperDesctop } from './UserPage.styled';
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
      <SectionUser>
        <Container>
          <WrapperDesctop>
            <UserData></UserData>
            <PetsData></PetsData>
          </WrapperDesctop>
        </Container>
      </SectionUser>
    </main>
  );
};

export default UserPage;
