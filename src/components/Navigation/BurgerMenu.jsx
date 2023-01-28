import { BackDrop } from './BurgerMenu.styled';
import { Logo } from '../Logo/Logo';
import { AuthNav } from '../AuthNav/AuthNav';
import { Nav } from '../Nav/Nav';
import { UserNav } from '../UserNav/UserNav';
import { NavStyled, Div1, Div2, CloseIcon } from './BurgerMenu.styled';

export const BurgerMenu = ({ token, onClose, isDesctop, isMobile }) => {
  if (isDesctop) {
    onClose();
  }

  return (
    <BackDrop>
      <NavStyled>
        <Div1>
          <Logo />
          <button type="button" onClick={onClose}>
            <CloseIcon />
          </button>
        </Div1>
        <Div2>
          {isMobile && token && <UserNav onClose={onClose} />}
          {isMobile && !token && <AuthNav onClose={onClose} />}

          {!isDesctop && <Nav onClose={onClose} />}
        </Div2>
      </NavStyled>
    </BackDrop>
  );
};
