import { Container } from 'components/common/Container.styled';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { TitleAuthSection, AuthSection, AuthWrapper } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <main>
      <AuthSection>
        <Container>
          <AuthWrapper>
            <TitleAuthSection>Login</TitleAuthSection>
            <LoginForm></LoginForm>
          </AuthWrapper>
        </Container>
      </AuthSection>
    </main>
  );
};

export default LoginPage;
