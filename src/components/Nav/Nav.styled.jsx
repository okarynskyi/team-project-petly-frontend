import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;
  @media (min-width: 768px) {
    gap: ${p => p.theme.space[7]}px;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    gap: ${p => p.theme.space[9]}px;
    margin-left: ${p => p.theme.space[9]}px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 500;
  font-size: 32px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: rgba(24, 28, 39, 1);
  transition: color 100ms linear;
  &.active {
    color: rgba(245, 146, 86, 1);
    font-weight: 700;
    text-decoration-line: underline;
  }
  @media (min-width: 768px) {
    font-size: 48px;
  }
  @media (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.35;
    color: rgba(0, 0, 0, 1);
    &:hover {
      color: rgba(245, 146, 86, 1);
    }
  }
`;
