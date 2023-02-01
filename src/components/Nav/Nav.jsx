import { NavLinkStyled, NavListStyled } from './Nav.styled';

export const Nav = ({ onClose }) => {
  return (
    <>
      <NavListStyled>
        <li>
          <NavLinkStyled to="/news" onClick={onClose}>
            News
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/notices/sell" onClick={onClose}>
            Find pet
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/friends" onClick={onClose}>
            Our friends
          </NavLinkStyled>
        </li>
      </NavListStyled>
    </>
  );
};
