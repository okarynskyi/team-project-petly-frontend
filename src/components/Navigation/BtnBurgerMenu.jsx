import { BtnMenuBox, BtnMenuLine } from './BtnBurgerMenu.styled';

export const BtnMenu = ({ onClick }) => {
  return (
    <BtnMenuBox onClick={onClick}>
      <BtnMenuLine />
      <BtnMenuLine />
      <BtnMenuLine />
    </BtnMenuBox>
  );
};
