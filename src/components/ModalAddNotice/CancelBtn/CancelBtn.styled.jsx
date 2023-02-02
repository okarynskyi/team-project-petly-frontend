import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 0;
  width: 100%;
  font-size: 16px;
  line-height: calc(22 / 16);
  letter-spacing: 0.04em;
  color: #111111;
  border: 2px solid #f59256;
  border-radius: 40px;
  transition: color 300ms linear;
  :hover,
  :focus {
    color: #f59256;
  }
  @media (min-width: 768px) {
    width: 180px;
  }
`;
