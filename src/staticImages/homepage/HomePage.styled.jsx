import styled from 'styled-components';
import backgroundImg from '../../staticImages/homepage/Frame-desk.png';
import backgroundTab from '../../staticImages/homepage/background-tab.png';
import unionImg from '../../staticImages/homepage/Union.png';

export const Main = styled.main`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-color: ${p => p.theme.colors.background};
    width: 100%;
    height: 100vh;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url('${backgroundTab}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom -2px;
    width: 100%;
    height: 1193px;
  }
  @media screen and (min-width: 1280px) {
    background-image: url('${backgroundImg}');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
  }
`;

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    min-width: 320px;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 768px;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    flex-direction: row;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const MainImage = styled.img`
  width: 320px;
  height: 337px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 645px;
    height: 715px;
  }
  @media screen and (min-width: 1280px) {
    background-image: url('${unionImg}');
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
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.fs68};
    line-height: 100px;
    width: 588px;
    padding-top: 88px;
  }

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.fs68};
    line-height: 100px;
    padding-top: 92px;
  }
`;
