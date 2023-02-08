import styled from 'styled-components';
import { device } from 'Device';

import EmailTo from 'components/common/EmailTo/EmailTo';
import CallTo from 'components/common/CallTo/CallTo';
import { ReactComponent as Favorite } from '../../staticImages/heart2.svg';

export const ModalBox = styled.div`
  background: ${p => p.theme.colors.white};
  width: 280px;
  padding: 60px 20px 40px;
  border-radius: 20px;
  top: 5%;
  height: 530px;
  overflow-x: hidden;
  overflow-y: scroll;

  @media ${device.tablet} {
    width: 704px;
    padding: 32px 40px 32px 20px;
    top: 10%;
    overflow-y: hidden; 
}
`

export const WrapperForDesc = styled.div`
  width: 240px;

  @media ${device.tablet} {
    display: flex;
    gap: 20px;
    width: auto;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  margin: auto;

  @media ${device.tablet} {
    width: 290px;
    height: 330px;
  }
`

export const FilterTitleBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 160px;
  height: 28px;
  position: absolute;
  border-radius: 0px 40px 40px  0px;
  background: #ffffff99;
  top: 20px;
  backdrop-filter: blur(2px);
`

export const FitlerTitle = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs12};
  line-height: 16px;
  margin: 0;
  color: ${p => p.theme.colors.mainText};
`

export const ImgModal = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;
  object-fit: cover;

  @media ${device.tablet} {
    width: 290px;
    height: 330px;
  }
  `

export const ModalTitle = styled.h2`
  width: 195px; 
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw700};
  font-size: ${p => p.theme.fontSizes.fs24};
  line-height: 33px;
  color: ${p => p.theme.colors.black};
  margin: 0px;
  padding-top: 16px;

  @media ${device.tablet} {
    width: 268px;
    font-size: ${p => p.theme.fontSizes.fs28};
    line-height: 38px;
    padding-top: 0;
  }
`

export const ListWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 16px;

  @media ${device.tablet} {
    padding-top: 20px;
    gap: 55px;
  }
`

export const FirstList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  &:last-child {
    padding-bottom: 0px;
  }
`

export const SecondList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const Items = styled.li`
  padding-bottom: 8px;

  &:last-child {
    padding-bottom: 0;
  }
`

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw600};
  font-size: ${p => p.theme.fontSizes.fs14};
  margin: 0;
  line-height: 19px;
  color: ${p => p.theme.colors.black};

  @media ${device.tablet} {
    line-height: 22px;
    font-size: ${p => p.theme.fontSizes.fs16};
  }
`

export const ListItemDescr = styled.p`
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs14};
  margin: 0;
  line-height: 19px;
  color: ${p => p.theme.colors.black};

  @media ${device.tablet} {
    line-height: 22px;
    font-size: ${p => p.theme.fontSizes.fs16};
  }
`

export const Comment = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw600};
  font-size: ${p => p.theme.fontSizes.fs14};
  line-height: 19px;
  magrin: 0;
  padding-top: 28px;
  color: ${p => p.theme.colors.black};

  @media ${device.tablet} {
    line-height: 24px;
    font-size: ${p => p.theme.fontSizes.fs16};
  }
`

export const CommentSpan = styled.span`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.fs14};

  @media ${device.tablet} {
    line-height: 24px;
    font-size: ${p => p.theme.fontSizes.fs16};
  }
`

export const ButtonsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 40px 0 0 0;
  gap: 12px;

  @media ${device.tablet} {
    flex-direction: row-reverse;
    justify-content: flex-start;
    padding-top: 32px;
  }
`

export const ContactItem = styled.li`
  width: 240px;
  height: 40px;
  border-radius: 40px;
  background-color: rgb(245, 146, 86);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    width: 160px;
  }
`

export const Tel = styled(CallTo)`
  text-decoration: none;
`

export const ButtonTel = styled(CallTo)`
  color: white;
  &:hover,
  &:focus {
    color: white;
  }
`

export const Email = styled(EmailTo)``;

export const Btn = styled.button`
  width: 240px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid rgb(245, 146, 86);
  background: ${p => p.theme.colors.white};

  @media ${device.tablet} {
    width: 160px;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContactText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 22px;
  margin: 0;
  color: ${p => p.theme.colors.white};
` 

export const ButtonText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 22px;
  margin: 0;
  padding-right: 10px;
  color: ${p => p.theme.colors.mainText};
`

export const PetsFavoriteSvg = styled(Favorite)`
  width: 16px;
  height: 16px;
`