import styled from 'styled-components';
import { device } from 'Device';

export const Button = styled.button`
  width: 248px;
  height: 38px;
  background: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.main};
  border-radius: ${p => p.theme.radii.br40};
  align-items: center;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.accent};
  margin: auto 16px 12px 16px;
 
  &:last-of-type {
    margin-bottom: 32px;
  }

  @media ${device.tablet} {
    margin-right: 44px;
    margin-left: 44px;
  }

  @media ${device.desktop} {
    margin-right: 20px;
    margin-left: 20px;
  }
`;