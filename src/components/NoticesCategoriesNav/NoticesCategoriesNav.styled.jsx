import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'Device';

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 60px;
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const FilterList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  @media ${device.desktop} {
    flex-wrap: no-wrap;
    flex-direction: row;
  }
`;

export const Item = styled.li`
  display: flex;
`;

export const Button = styled(NavLink)`
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.fw500};
  font-size: ${props => props.theme.fontSizes.fs14};
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  border: ${props => props.theme.borders.main};
  border-radius: ${props => props.theme.radii.br40};
  padding: 8px 28px;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
    cursor: pointer;
  }
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs20};
  }
`;
export const CommonLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap-reverse;
  gap: 12px;
  @media ${device.tablet} {
    flex-wrap: no-wrap;
    flex-direction: row-reverse;
  }
  @media ${device.desktop} {
    flex-direction: row;
  }
`;
export const AuthLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;
