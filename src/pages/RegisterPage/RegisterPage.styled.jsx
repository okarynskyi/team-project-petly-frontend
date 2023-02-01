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
