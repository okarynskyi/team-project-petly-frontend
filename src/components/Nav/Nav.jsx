// import { NavLink } from 'react-router-dom';
// import { NavStyled } from './Nav.styled';

// export const Nav = () => {
//   return (
//     <NavStyled>
//       <NavLink to="/news">News</NavLink>
//       <NavLink to="/notices">Find pet</NavLink>
//       <NavLink to="/friends">Our friend</NavLink>
//       <NavLink to="/user">User</NavLink>
//     </NavStyled>
//   );
// };

import { NavLinkStyled, Ul } from './Nav.styled';

export const Nav = ({ onClose }) => {
  return (
    <>
      <Ul>
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
        <li>
          <NavLinkStyled to="/user" onClick={onClose}>
            User
          </NavLinkStyled>
        </li>
      </Ul>
    </>
  );
};
