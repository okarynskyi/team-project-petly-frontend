import styled from 'styled-components';
import { device } from 'Device';
import { ReactComponent as Icon } from 'staticImages/heart.svg';
// import heart from '../../staticImages/heart.svg';
// import heart2 from '../../staticImages/heart2.svg';
import { ReactComponent as Delete } from '../../staticImages/delete.svg';

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Trash = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
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
  transition: color, border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${p => p.theme.colors.accent};
  margin: auto 16px 12px 16px;
 
  &:only-of-type {
    margin-bottom: 32px;
  }

  &:hover,
  :focus  {
    border: ${p => p.theme.borders.accent};
    color: ${p => p.theme.colors.hoverAccent};
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

export const StyledTrash = styled(Delete)`
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-left: 9px;
  margin-right: 9px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Trash}:hover & {
    fill: ${p => p.theme.colors.hoverAccent};
  }
`;

// export const Wrapper = styled.div`
//   margin-left: auto;
//   margin-right: auto;
//   display: flex;
// `;

// export const List = styled.ul`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 280px;
// `;

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
  margin-bottom: 20px;
`;

export const Image = styled.img`  /**сама картинка */
 width: 288px;
  height: 288px;
  object-fit: cover;
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
 display: block;
 /* display: flex;
 flex-direction: column; */
`;