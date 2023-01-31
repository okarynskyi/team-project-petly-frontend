import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { device } from 'Device';

export const FormFormik = styled(Form)`
  width: 100%;
  margin: 0 auto;
  button {
    margin: ${props => props.theme.space[5]}px auto;
    width: 280px;
    font-weight: ${props => props.theme.fontWeights.fw500};
    letter-spacing: 0.04em;
  }
  @media ${device.tablet} {
    > button {
      width: 458px;
    }
  }
`;
export const BoxInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.space[2]}px;
`;
export const InputFormik = styled(Field)`
  width: 280px;
  padding: 11px 0 11px 14px;
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.fs14};
  line-height: 1.35;
  letter-spacing: 0.04em;
  background: ${props => props.theme.colors.background};
  border: ${props => props.theme.borders.auth};
  border-radius: ${props => props.theme.radii.br40};
  :hover,
  :focus {
    cursor: pointer;
    border-color: ${props => props.theme.colors.accent};
  }
  @media ${device.tablet} {
    width: 448px;
    font-size: ${props => props.theme.fontSizes.fs18};
  }
  @media ${device.desktop} {
    width: 458px;
  }
`;
export const ErrorText = styled(ErrorMessage)`
  width: 100%;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.fs14};
  color: ${props => props.theme.colors.accent};
`;
export const Question = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.fs12};
  text-align: center;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.inputText};
  > a {
    text-decoration-line: underline;
    color: #3091eb;
  }
`;
