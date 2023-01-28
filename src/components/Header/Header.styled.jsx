// import styled from 'styled-components';

// export const HeaderStyled = styled.header`
//   position: sticky;
//   width: 100%;
//   top: 0;
//   z-index: 5;
//   display: flex;
//   gap: 36px;
//   background-color: ${p => p.theme.colors.background};
//   padding: 16px;
//   box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
// `;

import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding-top: 16px;
  @media (min-width: 768px) {
    padding-top: 24px;
  }
  @media (min-width: 1280px) {
    padding-top: 20px;
  }
`;
