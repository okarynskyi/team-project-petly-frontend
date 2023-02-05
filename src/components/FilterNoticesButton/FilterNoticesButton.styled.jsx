import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding-top: 40px;
  padding-bottom: 60px;
  justify-content: space-between;
  align-items: center;
`;

export const FilterList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 12px;
`;

export const Item = styled.li`
  display: flex;
`;

export const Button = styled(NavLink)`
  padding: 10px 28px;
  min-width: ${props => props.size};
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  border: ${props => props.theme.borders.main};
  border-radius: ${props => props.theme.radii.br40};
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.fs20};
  font-weight: ${props => props.theme.fontWeights.fw500};
  line-height: 1.35;
  transition: color 250ms linear, background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
    cursor: pointer;
  }
`;
