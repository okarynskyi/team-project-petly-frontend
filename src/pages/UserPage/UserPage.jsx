import { UserData } from 'components/UserData/UserData';
import { PetsData } from 'components/PetsData/PetsData';
import { Container } from 'components/common/Container.styled';
import { SectionUser } from './UserPage.styled';

export const UserPage = () => {
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
