import styled from 'styled-components';

export const BtnMenuBox = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 7.5px 5px;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: none;
  border: 0;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-left: 25px;
  }
`;

export const BtnMenuLine = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.mainText};
`;
