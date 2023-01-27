import { NavLink } from 'react-router-dom';
import { NavStyled } from './Nav.styled';

export const Nav = () => {
  return (
    <NavStyled>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/notices">Find pet</NavLink>
      <NavLink to="/friends">Our friend</NavLink>
    </NavStyled>
  );
};
