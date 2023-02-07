import styled from 'styled-components';
import { backgroundImg } from './HomePageImg';
import { device } from 'Device';

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 58px);
  min-height: 497px;
  margin: 0 auto;
  overflow: hidden;
  background-color: ${p => p.theme.colors.background};
  background-image: url('${backgroundImg.mob}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 100%;

  @media ${device.tablet} and (${device.beforeDesktop}) {
    height: 1193px;
    background-image: url('${backgroundImg.tab}');
  }
  @media ${device.desktop} {
    position: fixed;
    height: calc(100vh - 78px);
    min-height: 690px;
    margin-top: 20px;
    background-image: url('${backgroundImg.desk}');
    background-size: 1178px 538px;
  }
`;

export const MainPage = styled.div`
  position: absolute;
  bottom: 0;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 60px;
  margin: 0 auto;

  @media ${device.tablet} and (${device.beforeDesktop}) {
    width: 704px;
    height: 100%;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${device.desktop} {
    width: 1280px;
    flex-direction: row;
  }
`;

export const MainImage = styled.img`
  width: 280px;
  display: block;
  height: 327px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
  @media ${device.tablet} and (${device.beforeDesktop}) {
    width: 645px;
    height: 715px;
  }
  @media ${device.desktop} {
    margin-top: 60px;
    background-image: url('${backgroundImg.union}');
    background-size: 92px 89px;
    background-repeat: no-repeat;
    background-position: left 10px top 50px;
    width: 590px;
    height: 640px;
  }
`;

export const MainTitle = styled.h1`
  font-size: ${p => p.theme.fontSizes.fs32};
  font-weight: 700;
  line-height: 44px;
  width: 280px;

  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.fs68};
    line-height: 100px;
    width: 588px;
    padding-top: 88px;
  }

  @media ${device.desktop} {
    font-size: ${p => p.theme.fontSizes.fs68};
    line-height: 100px;
    padding-top: 92px;
  }
`;
