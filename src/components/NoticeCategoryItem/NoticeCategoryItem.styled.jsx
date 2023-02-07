import styled from 'styled-components';
import { device } from 'Device';
import { ReactComponent as Icon } from 'staticImages/heart.svg';

export const Item = styled.li`
  /**загальний ітем нашої картки */
  position: relative;
  width: 280px;
  height: 606px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 40px 40px;

  @media ${device.tablet} {
    width: 336px;
    height: 606px;
  }
  @media ${device.desktop} {
    width: 288px;
    height: 606px;
  }
`;

export const ImageWrapper = styled.div`
  /**обгортка для картинки */
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const Image = styled.img`  /**сама картинка */
 width: 288px;
height: 288px;
background-color: #D3D3D3; // временный фон удалить когда карточки на 100% готовы

  @media ${device.tablet} {
    width: 336px;
    height: 288px;
  }
  @media ${device.desktop} {
    width: 288px;
    height: 288px;
  }
`;

export const CategoryName = styled.p`
  /**назва категорії що знаходиться на картинці */
  position: absolute;
  top: 0;
  width: 158px;
  height: 28px;
  margin-top: 20px;
  padding-left: 20px;
  border-radius: 0px 40px 40px 0px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.fs12};
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs12};
  color: ${p => p.theme.colors.black};
  line-height: 16px;
`;

export const SvgWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
`;

export const AddToFavoriteBtn = styled(Icon)`
  cursor: pointer;
  &:hover,
  &:focus {
    fill: orange;
  }
`;

export const RemoveFromFavoriteBtn = styled(Icon)`
  fill: orange;
  cursor: pointer;
`;

export const DescriptionWrapper = styled.div`
  /**обгортка для всього вмісту що знаходиться нижче */
`;

export const Title = styled.h3`
  /**заголовок, опис картки */
  font-weight: ${p => p.theme.fontWeights.fw700};
  font-size: ${p => p.theme.fontSizes.fs28};
  line-height: 1.35;
  color: ${p => p.theme.colors.mainText};
  margin-bottom: 20px;
  margin-left: 20px;
  width: 231px;
  height: 76px;
  overflow: hidden;
`;

export const DescriptionInner = styled.div`
  /**обгортка для опису */
  display: flex;
`;

export const DescriptionTextContainer = styled.div`
  /**обгортка для опису. В середині них буде DescriptionText */
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const DescriptionText = styled.p`
  /**текст опису */
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 1.37;
  color: ${p => p.theme.colors.mainText};

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;


export const ButtonDiv = styled.div`
 position: absolute;
 bottom: 0;
 /* display: flex;
 flex-direction: column; */
`;

export const Button = styled.button`
  /**кнопка.  Вже напевно хтось робив, можна перевикористати*/
  width: 248px;
  height: 38px;
  background: #ffffff;
  border: ${p => p.theme.borders.main};
  box-shadow: 7px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 40px;
  margin: 0 auto;
  display: block;
  margin-bottom: 12px;
  cursor: pointer;
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.accent};
`;
