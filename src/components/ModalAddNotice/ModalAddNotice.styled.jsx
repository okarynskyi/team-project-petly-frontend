import styled from 'styled-components';
import { Form } from 'formik';

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  line-height: calc(26 / 18);
  color: #111111;
  span {
    color: #f59256;
  }
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(26 / 24);
    gap: 12px;
  }
`;

export const Error = styled.div`
  position: absolute;
  left: 0;
  bottom: -20%;
  color: red;
  font-size: 12px;
`;

export const Title = styled.h3`
  font-size: 24px;
  line-height: calc(33 / 24);
  color: #111111;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: calc(49 / 36);
  }
`;

export const Subtitle = styled.p`
  margin-top: 20px;
  font-size: 16px;
  line-height: calc(22 / 16) 22px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #111111;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: calc(27 / 20);
  }
`;

export const FormStyled = styled(Form)`
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 28px;
  }
`;

export const InputFieldWrap = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    gap: 28px;
  }
`;

export const BtnWrap = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
