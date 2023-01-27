import { Nav } from '../Nav/Nav';
import { AuthNav } from '../AuthNav/AuthNav';
import { NavigationStyled } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationStyled>
      <Nav />
      <AuthNav />
    </NavigationStyled>
  );
};
