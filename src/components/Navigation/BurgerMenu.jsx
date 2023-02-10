import { BackDrop } from './BurgerMenu.styled';
import { Logo } from '../Logo/Logo';
import { AuthNav } from '../AuthNav/AuthNav';
import { Nav } from '../Nav/Nav';
import { UserNav } from '../UserNav/UserNav';
import {
  NavStyled,
  WrapLogo,
  WrapNav,
  CloseIcon,
  BtnClose,
} from './BurgerMenu.styled';
import { Container } from '../common/Container.styled';

export const BurgerMenu = ({ token, onClose, isDesctop, isMobile }) => {
  if (isDesctop) {
    onClose();
  }

  return (
    <BackDrop>
      <NavStyled>
        <Container>
          <WrapLogo>
            <Logo />
            <BtnClose type="button" onClick={onClose}>
              <CloseIcon />
            </BtnClose>
          </WrapLogo>
        </Container>
        <WrapNav>
          {isMobile && token && <UserNav onClose={onClose} />}
          {isMobile && !token && <AuthNav onClose={onClose} />}

          {!isDesctop && <Nav onClose={onClose} />}
        </WrapNav>
      </NavStyled>
    </BackDrop>
  );
};
