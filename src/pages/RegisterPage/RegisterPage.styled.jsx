import styled from 'styled-components';
import { device } from 'Device';
import backgroundImg from 'staticImages/auth/background-desk.png';
import backgroundTabImg from 'staticImages/auth/background-tab.png';
import backgroundMobImg from 'staticImages/auth/background-mob.png';

export const AuthSection = styled.section`
  padding-top: 44px;
  height: calc(100vh - 42px);
  background-image: url('${backgroundMobImg}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  @media ${device.tablet} {
    padding-top: 100px;
    height: calc(100vh - 72px);
    background-image: url('${backgroundTabImg}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
  }
  @media ${device.desktop} {
    padding-top: 40px;
    height: calc(100vh - 68px);
    background-image: url('${backgroundImg}');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom 50px;
  }
`;
