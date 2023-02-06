import styled from 'styled-components';
import { Form, Field } from 'formik';
import { device } from 'Device';
import { AccentButton } from '../common/StyledButton/StyledButton.styled';

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

export const FormFormik = styled(Form)`
  width: 100%;
  margin: 0 auto;
  button {
    width: 280px;
    font-weight: ${props => props.theme.fontWeights.fw500};
    letter-spacing: 0.04em;
  }
  @media (min-width: 768px) {
    > button {
      width: 458px;
    }
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  button {
    width: 280px;
    letter-spacing: 0.04em;
  }
  @media (min-width: 768px) {
    > button {
      width: 458px;
    }
  }
`;

export const BackBtn = styled(AccentButton)`
  margin-top: ${props => props.theme.space[2]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  color: ${props => props.theme.colors.mainText};
  background-color: ${props => props.theme.colors.background};
  border: ${props => props.theme.borders.main};
  width: 458px;
`;

export const RegistrBtn = styled(AccentButton)`
  margin-top: ${props => props.theme.space[5]}px;
  width: 458px;
`;

export const NextBtn = styled(AccentButton)`
  display: flex;
  justify-content: center;
  margin: ${props => props.theme.space[5]}px auto;
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
export const ErrorText = styled.p`
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

export const AuthSection = styled.section`
  padding-top: 44px;
  @media ${device.tablet} {
    padding-top: 204px;
  }
  @media ${device.desktop} {
    padding-top: 80px;
  }
`;
export const AuthWrapper = styled.div`
  @media ${device.tablet} {
    background: ${props => props.theme.colors.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: ${props => props.theme.radii.br40};
    padding: 65px 75px 40px 75px;
    width: 608px;
    margin: 0 auto;
  }
  @media ${device.desktop} {
    width: 618px;
    padding: 60px 80px;
  }
`;
export const TitleAuthSection = styled.h2`
  margin-bottom: ${props => props.theme.space[5]}px;
  text-align: center;
  font-family: ${props => props.theme.fonts.main};
  line-height: 1.37;
  letter-spacing: 0.04em;
  @media ${device.tablet} {
    font-weight: ${props => props.theme.fontWeights.fw500};
    font-size: ${props => props.theme.fontSizes.fs36};
  }
`;
