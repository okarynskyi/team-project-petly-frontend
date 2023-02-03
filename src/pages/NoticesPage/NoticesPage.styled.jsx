import styled from 'styled-components';
import { device } from 'Device';

export const GlobalBox = styled.div`
`;

export const Wrapper = styled.div`
`;

export const Box = styled.div`
`;

export const Title = styled.h1`
font-family: ${p => p.theme.fonts.main};
font-weight: ${p => p.theme.fontWeights.fw700};
font-size: ${p => p.theme.fontSizes.fs24};
line-height: 1.37;
color: ${p => p.theme.colors.mainText};
margin-top: 70px;
margin-bottom: 28px;
text-align: center;

@media ${device.tablet} {
  font-size: ${p => p.theme.fontSizes.fs48};
  margin-bottom: 40px;
  }
`;