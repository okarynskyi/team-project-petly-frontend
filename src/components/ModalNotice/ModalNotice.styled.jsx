import styled from 'styled-components';
import { device } from 'Device';

import EmailTo from 'components/common/EmailTo/EmailTo';
import CallTo from 'components/common/CallTo/CallTo';
// import { ReactComponent as IconClose } from '../../staticImages/close.svg';
// import { ReactComponent as Favorite } from '../../staticImages/heart.svg';
// import { ReactComponent as Delete } from '../../staticImages/delete.svg';

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
// done

export const ModalBox = styled.div`
  min-width: 280px;
  padding: 60px 20px 40px;
  position: relative;
  top: 5%;

  @media ${device.tablet} {
    padding: 32px 40px 32px 20px;
    top: 10%;
}
`;
// done

export const WrapperForDesc = styled.div`
  width: 240px;

  @media ${device.tablet} {
    display: flex;
    gap: 20px;
    width: auto;
  }
`;
// done

export const ImageWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  margin: auto;

  @media ${device.tablet} {
    width: 290px;
    height: 330px;
  }
`;
// done

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
// done

export const FitlerTitle = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs12};
  line-height: 16px;
  margin: 0;
`
// done

export const ImgModal = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;
  background: ${p => p.theme.colors.accent};

  @media ${device.tablet} {
    width: 290px;
    height: 330px;
  }
  `
// done

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
// done

export const ListWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 16px;

  @media ${device.tablet} {
    padding-top: 20px;
    gap: 55px;
  }
`;
// done

export const FirstList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  &:last-child {
    padding-bottom: 0px;
  }
`;
// done

export const SecondList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
// done

export const Items = styled.li`
  padding-bottom: 8px;

  &:last-child {
    padding-bottom: 0;
  }
`;
// done

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw600};
  font-size: ${p => p.theme.fontSizes.fs14};
  margin: 0;
  line-height: 19px;

  @media ${device.tablet} {
    line-height: 22px;
    font-size: ${p => p.theme.fontSizes.fs16};
  }
`;
// done

export const ListItemDescr = styled.p`
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs14};
  margin: 0;
  line-height: 19px;

  @media ${device.tablet} {
    line-height: 22px;
    font-size: ${p => p.theme.fontSizes.fs16};
  }
`
// done

export const Comment = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw600};
  font-size: ${p => p.theme.fontSizes.fs14};
  line-height: 19px;
  magrin: 0;
  padding-top: 28px;

  @media ${device.tablet} {
    line-height: 24px;
    font-size: ${p => p.theme.fontSizes.fs16};
  }
`;
// done

export const CommentSpan = styled.span`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.fs14};

  @media ${device.tablet} {
    line-height: 24px;
    font-size: ${p => p.theme.fontSizes.fs16};
  }
`;
// done

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
// done

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
// done

export const Tel = styled(CallTo)`
  text-decoration: none;
`;
// done

export const ButtonTel = styled(CallTo)`
  color: white;
  &:hover,
  &:focus {
    color: white;
  }
`;
// done

export const Email = styled(EmailTo)``;

export const Btn = styled.button`
  width: 240px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid rgb(245, 146, 86);

  @media ${device.tablet} {
    width: 160px;
  }
`
// done

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
// done

export const ContactText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 22px;
  margin: 0;
  color: ${p => p.theme.colors.white};
` 
// done

export const ButtonText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 22px;
  margin: 0;
  padding-right: 10px;
  color: ${p => p.theme.colors.mainText};
`
// done

export const PetsFavoriteSvg = styled.svg`
  width: 16px;
  height: 16px;
  
  @media ${device.tablet} {
    align-items: center;
  }
`;