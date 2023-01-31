import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormFormik = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${props => props.theme.space[3]}px;
  width: 300px;
  margin: 0 auto;
  button {
    margin-top: ${props => props.theme.space[3]}px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${props => props.theme.colors.darkgreen};
  font-size: ${props => props.theme.fontSizes.m}px;
  font-weight: 500;
  span {
    min-width: 120px;
    margin-right: ${props => props.theme.space[2]}px;
  }
`;
export const Input = styled.input`
  width: 180px;
  padding: ${props => props.theme.space[2]}px;
  font-size: ${props => props.theme.fontSizes.m}px;
  border: ${props => `1px solid ${props.theme.colors.darkgreen}`};
  border-radius: 4px;
  :hover,
  :focus {
    cursor: pointer;
    border-color: ${props => props.theme.colors.orange};
  }
`;

export const InputFormik = styled(Field)`
  width: 180px;
  padding: ${props => props.theme.space[2]}px;
  font-size: ${props => props.theme.fontSizes.m}px;
  border: ${props => `1px solid ${props.theme.colors.darkgreen}`};
  border-radius: 4px;
  :hover,
  :focus {
    cursor: pointer;
    border-color: ${props => props.theme.colors.orange};
  }
`;

export const ErrorText = styled(ErrorMessage)`
  width: 100%;
  margin: 0 ;
  font-size: ${props => props.theme.fontSizes.s}px;
  color: ${props => props.theme.colors.orange};
`;