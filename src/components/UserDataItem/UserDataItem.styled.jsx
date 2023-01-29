import styled from 'styled-components';
import { device } from 'Device';

export const LabelUserInfo = styled.label`
  font-family: ${props => props.theme.fonts.main};
  text-transform: capitalize;
  font-style: normal;
  font-size: ${props => props.theme.fontSizes.fs12};
  letter-spacing: 0.04em;
  @media ${device.tablet} {
    font-weight: ${props => props.theme.fontWeights.fw500};
    font-size: ${props => props.theme.fontSizes.fs18};
  }
`;
export const ValueUserInfo = styled.input`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.fs12};
  line-height: 1.33;
  letter-spacing: 0.04em;
  width: 160px;
  margin-right: 12px;
  padding: 4px 0 4px 18px;
  background-color: ${props =>
    props.disabled ? 'transparent' : props.theme.colors.background};
  border-radius: ${props => props.theme.radii.br40};
  border: 1px solid
    ${props =>
      props.disabled ? 'transparent' : props.theme.colors.inputBackground};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: ${props =>
      props.type === 'email' || props.type === 'tel' ? 'pointer' : 'auto'};
    color: ${props =>
      props.type === 'email' || props.type === 'tel'
        ? props.theme.colors.accent
        : props.theme.colors.mainText};
  }
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs18};
    line-height: 1.39;
    margin-right: 24px;
    padding-left: 12px;
    width: 216px;
  }
`;
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
