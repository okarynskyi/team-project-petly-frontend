import styled from 'styled-components';
import Datetime from 'react-datetime';

export const DateInput = styled(Datetime)`
  position: relative;
  font-size: 16px;
  line-height: calc(22 / 16);
  max-width: 90%;
  input {
    width: 90%;
    padding: 12px 20px 12px 14px;
    font-weight: 400;
    font-size: 14px;
    line-height: calc(19 / 14);
    color: rgba(27, 27, 27, 0.6);
    background-color: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
    outline: none;
    transition: border-color 300ms linear;

    :focus {
      border-color: #f59256;
    }
  }
`;
