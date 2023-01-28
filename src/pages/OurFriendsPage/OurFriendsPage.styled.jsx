import styled from 'styled-components';
import { device } from 'Device';

export const Section = styled.section`
  background-color: ${p => p.theme.colors.background};
  width: 100%;
  height: 100%;
  padding: 42px 0 100px;
  @media ${device.tablet} {
    padding: 88px 0 100px;
  }
  @media ${device.desktop} {
    padding: 60px 0 100px;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media ${device.mobile} {
    width: 490px;
  }
  @media ${device.tablet} {
    width: 768px;
    padding: 0 32px;
  }
  @media ${device.desktop} {
    width: 1280px;
    padding: 0 16px;
  }
`;

export const StyledTitle = styled.h1`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw700};
  font-size: ${p => p.theme.fontSizes.fs24};
  text-align: center;
  line-height: 33px;
  color: ${p => p.theme.colors.black};
  margin-bottom: 28px;

  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.fs48};
    line-height: 66px;
    margin-bottom: 40px;
  }
  @media ${device.desktop}{
    margin-bottom: 60px;
  }
`;