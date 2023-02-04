import styled from 'styled-components';
import { Container } from 'components/common/Container.styled';
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

export const StyledContainer = styled(Container)`
  width: 100%;

  @media ${device.tablet} {
    width: 768px;
  }
  @media ${device.desktop} {
    width: 1280px;
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