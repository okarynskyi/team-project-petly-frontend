import styled from "styled-components";
import { device } from 'Device';

export const CircleBtn = styled.button`
  width: 20px;
  height: 20px;
  padding: 1px 0 0 2px;
  border: 1px solid;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props => props.theme.colors.background};
  border-color: ${props =>
    props.disabled ? props.theme.colors.mainText : 'transparent'};
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.accent};
  }
  @media ${device.tablet} {
    width: 32px;
    height: 32px;
  }
`;