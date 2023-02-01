import { useState } from 'react';
import { useMedia } from 'react-use';
import { useSelector } from 'react-redux';
import { selectToken, selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { BtnMenu } from './BtnBurgerMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { BurgerMenu } from './BurgerMenu';
import { Nav } from '../Nav/Nav';
import { UserNav } from '../UserNav/UserNav';
import { NavigationStyled } from './Navigation.styled';
import { Logo } from '../Logo/Logo';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isDesctop = useMedia('(min-width: 1280px)');
  const isMobile = useMedia('(max-width: 767px)');

  const onOpen = () => {
    setIsMenuOpen(true);
  };

  const onClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {!isMenuOpen && (
        <NavigationStyled>
          <div>
            <Logo />
            {isDesctop && <Nav />}
          </div>

          <div>
            {!isMobile && isLoggedIn && <UserNav />}
            {!isMobile && !isLoggedIn && <AuthNav />}
            {!isDesctop && <BtnMenu onClick={onOpen} />}
          </div>
        </NavigationStyled>
      )}

      {isMenuOpen && (
        <BurgerMenu
          token={token}
          onClose={onClose}
          isDesctop={isDesctop}
          isMobile={isMobile}
        />
      )}
    </>
  );
};
