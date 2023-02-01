import styled from 'styled-components';
import { device } from 'Device';

export const AuthSection = styled.section`
  padding-top: 44px;
  @media ${device.tablet} {
    padding-top: 204px;
  }
  @media ${device.desktop} {
    padding-top: 80px;
  }
`;
export const AuthWrapper = styled.div`
  @media ${device.tablet} {
    background: ${props => props.theme.colors.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: ${props => props.theme.radii.br40};
    padding: 65px 75px 40px 75px;
    width: 608px;
    margin: 0 auto;
  }
  @media ${device.desktop} {
    width: 618px;
    padding: 60px 80px;
  }
`;
export const TitleAuthSection = styled.h2`
  margin-bottom: ${props => props.theme.space[5]}px;
  text-align: center;
  font-family: ${props => props.theme.fonts.main};
  line-height: 1.37;
  letter-spacing: 0.04em;
  @media ${device.tablet} {
    font-weight: ${props => props.theme.fontWeights.fw500};
    font-size: ${props => props.theme.fontSizes.fs36};
  }
`;
