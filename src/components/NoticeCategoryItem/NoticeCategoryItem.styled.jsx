import styled from 'styled-components';

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

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
`;

export const ImageWrapper = styled.div` /**обгортка для картинки */
  width: 100%;
  height: 288px;
  object-fit: cover;
`;

export const Image = styled.img`  /**сама картинка */
  
`;

export const CategoryName = styled.p` /**назва категорії що знаходиться на картинці */
  
`;

export const CheckBoxAddToFavorite = styled.div`  /**сердечко для додавання до улюбленних. Кастомний чекбокс???*/
  
`;

export const DescriptionWrapper = styled.div`  /**обгортка для всього вмісту що знаходиться нижче */
  
`;

export const Title = styled.h3` /**заголовок, опис картки */
  
`;

export const DescriptionInner = styled.div` /**обгортка для опису */
  
`;

export const DescriptionTextContainer = styled.div` /**обгортка для опису. В середині них буде DescriptionText */
  
`;

export const DescriptioтText = styled.p`  /**текст опису */
  
`;

export const Button = styled.button` /**кнопка.  Вже напевно хтось робив, можна перевикористати*/
  
`;