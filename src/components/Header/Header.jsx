// import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { HeaderStyled } from './Header.styled';
import { Container } from '../common/Container.styled';

export const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <Navigation />
      </HeaderStyled>
    </Container>
  );
};
