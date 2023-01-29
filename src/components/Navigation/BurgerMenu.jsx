import { BackDrop } from './BurgerMenu.styled';
import { Logo } from '../Logo/Logo';
import { AuthNav } from '../AuthNav/AuthNav';
import { Nav } from '../Nav/Nav';
import { UserNav } from '../UserNav/UserNav';
import { NavStyled, WrapLogo, WrapNav, CloseIcon } from './BurgerMenu.styled';

export const BurgerMenu = ({ token, onClose, isDesctop, isMobile }) => {
  if (isDesctop) {
    onClose();
  }

  return (
    <BackDrop>
      <NavStyled>
        <WrapLogo>
          <Logo />
          <button type="button" onClick={onClose}>
            <CloseIcon />
          </button>
        </WrapLogo>
        <WrapNav>
          {isMobile && token && <UserNav onClose={onClose} />}
          {isMobile && !token && <AuthNav onClose={onClose} />}

          {!isDesctop && <Nav onClose={onClose} />}
        </WrapNav>
      </NavStyled>
    </BackDrop>
  );
};
