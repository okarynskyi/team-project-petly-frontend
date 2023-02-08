import styled from 'styled-components';
import { Field } from 'formik';

export const PriceWrap = styled.div`
  margin-top: 10px;
`;

export const InputField = styled(Field)`
  padding: 12px 20px 12px 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(19 / 14);
  color: rgba(27, 27, 27, 0.6);
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  outline: none;
  transition: border-color 300ms linear;
  appearance: textfield;
  border-radius: ${p => {
    if (p.islistopen) {
      return '20px 20px 0px 0px';
    }
    return '40px';
  }};
  border-bottom: ${p => {
    if (p.islistopen) {
      return 'none';
    }
    return '1px solid rgba(245, 146, 86, 0.5)';
  }};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  :hover,
  :focus {
    appearance: none;
    -moz-appearance: textfield;
  }
  :focus {
    border-color: #f59256;
  }
`;
