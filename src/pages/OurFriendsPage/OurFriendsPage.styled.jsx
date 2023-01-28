import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${p => p.theme.colors.background};
  border: 3px solid red;
  width: 100%;
  height: 100%;
  padding: 42px 0 100px;
  @media screen and (min-width: 768px) {
    padding: 88px 0 100px;
  }
  @media screen and (min-width: 1280px) {
    padding: 60px 0 100px;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  border: 3px solid blue;

  @media screen and (min-width: 320px) {
    width: 490px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media  screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
  }
`;

export const StyledTitle = styled.h1`
  font-family: 'Manrope';
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontWeights.l};
  text-align: center;
  line-height: 33px;
  color: #000000;
  border: 3px solid green;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;