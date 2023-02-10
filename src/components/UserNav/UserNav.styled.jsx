import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

export const AccountBtn = styled(NavLink)`
  padding: 8px 37px;
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: ${props => props.size};
  text-align: center;
  font-size: ${p => p.theme.fontSizes.fs14};
  font-weight: ${p => p.theme.fontWeights.fw500};
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.main};
  border-radius: ${p => p.theme.radii.br40};
  line-height: 1.35;
  transition: color 250ms linear, border 250ms linear;

  :hover {
    background-color: ${p => p.theme.colors.background};
    border: ${p => p.theme.borders.auth};
    color: ${p => p.theme.colors.mainText};
    cursor: pointer;
  }

  @media (min-width: 768px) {
    padding: 12px 28px;
    font-size: ${p => p.theme.fontSizes.fs16};
    justify-content: center;
  }

  div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
    @media (min-width: 768px) {
      width: 23px;
      height: 23px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const UserCircle = styled(FaUserCircle)`
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 23px;
    height: 23px;
  }
`;
