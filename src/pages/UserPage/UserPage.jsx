import { UserData } from 'components/UserData/UserData';
import { Container } from 'components/common/Container.styled';
import { TitleSectionUser } from './UserPage.styled';
export const UserPage = () => {
  return (
    <main>
      <Container>
        <section>
          <TitleSectionUser>My information:</TitleSectionUser>
          <UserData></UserData>
        </section>
      </Container>
    </main>
  );
};
