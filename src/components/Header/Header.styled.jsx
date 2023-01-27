import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 5;
  display: flex;
  gap: 36px;
  background-color: ${p => p.theme.colors.background};
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;
