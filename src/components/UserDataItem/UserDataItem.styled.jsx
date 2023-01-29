import styled from 'styled-components';

export const LabelUserInfo = styled.label`
  font-family: ${props => props.theme.fonts.main};
  text-transform: capitalize;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #111111;
`;
export const ValueUserInfo = styled.input`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #111111;
  width: 160px;
  margin-right: 12px;
  padding: 4px 0 4px 18px;
  background-color: ${props =>
    props.disabled ? 'transparent' : props.theme.colors.background};
  border-radius: 40px;
  border: 1px solid
    ${props =>
      props.disabled ? 'transparent' : props.theme.colors.inputBackground};
  :hover,
  :focus {
    cursor: ${props =>
      props.type === 'email' || props.type === 'tel' ? 'pointer' : 'auto'};
    color: ${props =>
      props.type === 'email' || props.type === 'tel'
        ? props.theme.colors.accent
        : props.theme.colors.mainText};
  }
`;
export const Circle = styled.button`
  width: 20px;
  height: 20px;
  padding: 1px 0 0 2px;
  border: none;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.background};

   :hover,
  :focus {
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.accent};
  }
`;