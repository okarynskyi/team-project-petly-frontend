import styled from 'styled-components';
import { device } from 'Device';

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

export const Item = styled.li` /**загальний ітем нашої картки */
  position: relative;
  width: 288px;
  height: 606px;    
  background: #FFFFFF;
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

export const ImageWrapper = styled.div` /**обгортка для картинки */
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const Image = styled.img`  /**сама картинка */
 width: 288px;
height: 288px;
background-color: blue; // временный фон удалить когда карточки на 100% готовы

  @media ${device.tablet} {
    width: 336px;
    height: 288px; 
  }
  @media ${device.desktop} {
    width: 288px;
    height: 288px; 
  }
`;

export const CategoryName = styled.p` /**назва категорії що знаходиться на картинці */
  position: absolute;
  top: 0;
  padding: 20px;
  border-radius:   0px 40px 40px  0px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  margin-bottom: 20px;
`;

export const CheckBoxAddToFavorite = styled.button`  /**сердечко для додавання до улюбленних. Кастомний чекбокс???*/
  position: absolute;
  top: 0;
`;

export const DescriptionWrapper = styled.div`  /**обгортка для всього вмісту що знаходиться нижче */
  
`;

export const Title = styled.h3` /**заголовок, опис картки */
  font-weight: ${p => p.theme.fontWeights.fw700};
  font-size: ${p => p.theme.fontSizes.fs28};
  line-height: 1.35;
  color: ${p => p.theme.colors.mainText};
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const DescriptionInner = styled.div` /**обгортка для опису */
  display: flex;
`;

export const DescriptionTextContainer = styled.div` /**обгортка для опису. В середині них буде DescriptionText */
  margin-left: 20px;
  margin-bottom: 50px;
`;

export const DescriptionText = styled.p`  /**текст опису */
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 1.37;
  color: ${p => p.theme.colors.mainText};
  margin-bottom: 8px;
`;

export const Button = styled.button` /**кнопка.  Вже напевно хтось робив, можна перевикористати*/
  width: 248px;
  height: 38px;
  background: #FFFFFF;
  border: ${p => p.theme.borders.main};
  box-shadow: 7px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 40px;
  margin: 0 auto;
  display: block;
  margin-bottom: 32px;
  cursor: pointer;
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.accent};
`;