import styled from 'styled-components';
import { backgroundImg } from './HomePageImg';
import { device } from 'Device';
import decorLeft from '../../staticImages/homepage/decorLeft.png';
import decorRigth from '../../staticImages/homepage/decorRigth.png';
import { GiTakeMyMoney } from 'react-icons/gi';

export const Section = styled.section`
  position: relative;
  margin: 0 auto;
  padding-top: 45px;
  background-color: ${p => p.theme.colors.background};
  background-image: url('${backgroundImg.mob}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 100%;
  @media ${device.tablet} {
    background-image: url('${backgroundImg.tab}');
    padding-top: 120px;
    background-position: 50% 100%;
  }
  @media ${device.desktop} {
    padding-top: 60px;
    background-image: url('${backgroundImg.desk}');
    background-size: 1178px;
  }
`;

export const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  background-image: url('${decorRigth}'), url('${decorLeft}');
  background-size: 70px, 70px;
  background-repeat: no-repeat;
  background-position: top left, top 75px right;
  > div {
    position: relative;
  }
  @media ${device.tablet} and (${device.beforeDesktop}) {
    height: 100%;
    justify-content: space-between;
    background-image: url('${decorRigth}'), url('${decorLeft}');
    background-size: 110px, 110px;
    background-position: top left, top 110px right;
  }
  @media ${device.desktop} {
    align-items: flex-start;
    flex-direction: row;
    background-image: none;
    > div {
      padding-top: 30px;
    }
  }
`;

export const MainImage = styled.img`
  width: 280px;
  margin-left: 40px;
  @media ${device.tablet} and (${device.beforeDesktop}) {
    width: 645px;
    margin-left: 100px;
  }
  @media ${device.desktop} {
    margin: 0;
    background-image: url('${backgroundImg.union}');
    background-size: 92px 89px;
    background-repeat: no-repeat;
    background-position: left 10px top 50px;
    width: 590px;
  }
`;

export const MainTitle = styled.h1`
  font-family: ${props => props.theme.fonts.logo};
  font-size: ${p => p.theme.fontSizes.fs24};
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  @media ${device.tablet} {
    font-size: 56px;
    margin-bottom: 20px;
  }
  @media ${device.desktop} {
    font-size: 50px;
  }
`;

export const Description = styled.p`
  font-size: ${p => p.theme.fontSizes.fs18};
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 16px;
  padding-right: 55px;
  padding-left: 10px;
  @media ${device.tablet} {
    font-size: 36px;
    line-height: 1.35;
    margin-bottom: 105px;
    padding-right: 65px;
  }
  @media ${device.desktop} {
    padding: 0;
    text-align: center;
    margin-bottom: 40px;
    font-size: 32px;
    line-height: 1.17;
  }
`;
export const TextReason = styled(Description)`
  padding-left: 74px;
  padding-right: 0;
  @media ${device.tablet} {
    margin-bottom: 16px;
    padding-left: 110px;
  }
  @media ${device.desktop} {
    padding: 0;
  }
`;

export const WrapperMission = styled.div`
  margin-bottom: 8px;
  width: 100%;
  height: auto;
  padding: 10px;
  border: 1px solid rgba(248, 191, 112, 0.856);
  border-radius: 20px;
  box-shadow: inset 0 0 15px 10px rgba(248, 191, 112, 0.856);
  > p {
    font-size: 26px;
    text-align: center;
  }
  @media ${device.tablet} {
    margin-bottom: 16px;
    > p {
      font-size: 42px;
    }
  }
`;
export const Donat = styled.a`
  font-family: ${props => props.theme.fonts.logo};
  box-shadow: 6px 6px 8px 2px rgba(99, 64, 15, 0.3);
  border: 1px solid ${props => props.theme.colors.hoverAccent};
  border-radius: 50%;
  padding: 6px 10px;
  background-color: #f6bf29e8;
  @media ${device.tablet} {
  }
`;
export const BoxDonat = styled.div`
  position: absolute;
  top: 350px;
  left: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-size: ${p => p.theme.fontSizes.fs18};
  font-weight: 500;
  line-height: 22px;
   color: #ffffffe8;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.fs24};
    top: 650px;
    left: 36px;
  }
  @media ${device.desktop} {
    top: 500px;
    left: 280px;
  }
`;
const IconMoney = ({ className }) => <GiTakeMyMoney className={className} />;
export const StyledMoney = styled(IconMoney)`
  color: #ffffffe8;
  width: 40px;
  height: 40px;
  @media ${device.tablet} {
    width: 110px;
    height: 110px;
  }
  @media ${device.desktop} {
    width: 85px;
    height: 85px;
  }
`;
