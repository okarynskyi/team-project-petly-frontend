import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavStyled = styled.nav`
  height: 35px;
  &:not(:first-child) {
    margin-left: 12px;
    @media screen and (min-width: 1280px) {
      margin-left: 20px;
    }
  }
  @media screen and (min-width: 768px) {
    height: 47px;
  }
`;

export const ButtonAuthLink = styled(NavLink)`
  padding: 8px 41px;
  min-width: ${props => props.size};
  background-color: ${props => props.theme.colors.background};
  border: ${props => props.theme.borders.main};
  border-radius: ${props => props.theme.radii.br40};
  font-size: ${props => props.theme.fontSizes.fs20};
  line-height: 1.35;
  transition: color 250ms linear, border 250ms linear;

  &:hover,
  &:focus {
    border: ${props => props.theme.borders.accent};
    color: ${props => props.theme.colors.hoverAccent};
    cursor: pointer;
  }
`;

// export const AuthNavStyled = styled.ul`
//   display: flex;
//   gap: 12px;
//   align-items: center;
//   @media (min-width: 768px) {
//     gap: 20px;
//   }
// `;

// import styled from 'styled-components';
// import { StyledButton } from '../StyledButton/StyledButton.styled';

// export const UlStyled = styled.ul`
//   display: flex;
//   gap: 12px;
//   align-items: center;
//   @media (min-width: 768px) {
//     gap: 20px;
//   }
// `;

// export const BtnLog = styled(StyledButton)`
//   padding: 8px 28px;
//   @media (min-width: 768px) {
//     padding: 10px 28px;
//     font-size: 20px;
//   }
// `;

// export const ListItem = styled.li`
//   height: 35px;
//   &:not(:first-child) {
//     margin-left: 12px;
//     @media screen and (min-width: 1280px) {
//       margin-left: 20px;
//     }
//   }
//   @media screen and (min-width: 768px) {
//     height: 47px;
//   }
// `;

// export const ButtonAuthLink = styled(StyledButton)`
//   background-color: ${prop =>
//     prop.primary ? prop.theme.colors.accent : prop.theme.colors.white};
//   color: ${prop =>
//     prop.primary ? prop.theme.colors.white : prop.theme.colors.primaryText};
//   @media screen and (min-width: 768px) {
//     font-size: 20px;
//   }
// `;

// export const BtnReg = styled(BtnLog)``;

// export const AuthBtn = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   padding: 8px 37px;
//   background-color: #ffffff;
//   border: 2px solid #f59256;
//   border-radius: 40px;
//   font-size: 14px;
//   line-height: calc(19 / 14);
//   letter-spacing: 0.04em;
//   color: #111111;
//   transition: color 300ms linear, background-color 300ms linear,
//     text-decoration 300ms linear;
//   &:hover {
//     background-color: #f59256;
//     color: #fff;
//   }
//   &.active {
//     background-color: #f59256;
//     color: #fff;
//   }
//   @media (min-width: 768px) {
//     padding: 11px 28px;
//     font-size: 16px;
//   }
// `;
