import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavStyled = styled.ul`
  display: flex;
  gap: 12px;
  align-items: center;
  @media (min-width: 768px) {
    gap: 20px;
  }
  // height: 35px;
  // &:not(:first-child) {
  //   margin-left: 12px;

  //   @media screen and (min-width: 1280px) {
  //     margin-left: 20px;
  //   }
  // }
  // @media screen and (min-width: 768px) {
  //   height: 47px;
  // }
`;

export const ButtonAuthLink = styled(NavLink)`
  display: inline-block;
  min-width: ${props => props.size};
  padding: 8px 41px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.fs20};
  font-weight: ${p => p.theme.fontWeights.fw500};
  background-color: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.mainText};
  border: ${p => p.theme.borders.main};
  border-radius: ${p => p.theme.radii.br40};
  line-height: 1.35;
  transition: color 250ms linear, border 250ms linear;

  &.active {
    background-color: ${p => p.theme.colors.accent};
    border: ${p => p.theme.borders.auth};
    color: ${p => p.theme.colors.white};
    cursor: pointer;
   
  }
  &:hover,
  &:focus {
      background-color: ${props => props.theme.colors.accent};
      color: ${props => props.theme.colors.white};
      cursor: pointer;
    }

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
