import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 0;
  width: 100%;
  font-size: 16px;
  line-height: calc(22 / 16);
  letter-spacing: 0.04em;
  color: #ffffff;
  background-color: ${p => {
    if (p.disabled) {
      return 'gray';
    }
    return '#F59256';
  }};
  border: 2px solid
    ${p => {
      if (p.disabled) {
        return 'gray';
      }
      return '#F59256';
    }};
  border-radius: 40px;
  transition: color 300ms linear, background-color 300ms linear;
  :hover,
  :focus {
    color: ${p => {
      if (p.disabled) {
        return '#fff';
      }
      return '#F59256';
    }};
    background-color: ${p => {
      if (p.disabled) {
        return 'gray';
      }
      return '#fff';
    }};
  }
  @media (min-width: 768px) {
    width: 180px;
  }
`;
