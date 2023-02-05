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

export const ModalBox = styled.div`
  border: 3px solid blue;
  width: 280px;
  height: 530px;
  padding: 40px 20px;
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    width: 704px;
}

  // @media ${device.desktop}{
      
  // }
`;

export const ImgModal = styled.img`
  border: 3px solid green;
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;
  background: ${p => p.theme.colors.accent};

  @media ${device.tablet} {
    width: 288px;
    height: 328px;
  }
  `

export const FilterTitleBox = styled.div`
  width: 158px;
  height: 28px;
  position: absolute;
  border-radius: 0px 40px 40px  0px;
  background: #ffffff99;
  backdrop-filter: blur(2px);
  border: 3px solid red;

  display: flex;
  align-items: center;
  justify-content: center;
  top: 141px;
  left: 43px;
`

export const FitlerTitle = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs12};
  line-height: 16px;
  align-items: center;
  color: ${p => p.theme.colors.mainText};
`

export const ModalTitle = styled.h2`
  border: 3px solid cyan;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw700};
  font-size: ${p => p.theme.fontSizes.fs24};
  line-height: 33px;
  color: ${p => p.theme.colors.black};

  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.fs28};
    line-height: 38px;
  }
`
export const ModalList = styled.ul`
  border: 3px solid maroon;
`
export const ModalListItem = styled.li`
  border: 3px solid limegreen;
`
