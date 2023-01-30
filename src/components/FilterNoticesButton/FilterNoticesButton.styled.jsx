import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;

`;

export const FilterList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  
`;

export const Item = styled.li`
  display: flex;
`;

export const Button = styled(NavLink)`
  
  line-height: 1.36;
  letter-spacing: 0.04em;
  padding: 8px 28px;
  
  text-decoration: none;
  cursor: pointer;
  :hover,
  :focus {
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(-1%, -1%);
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25),
      -4px -4px 6px rgba(255, 255, 255, 0.3);
  }
  &.active {
    
  }
`