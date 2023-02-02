import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  line-height: calc(26 / 18);
  color: #111111;

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

export const BtnWrapper = styled.div`
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
