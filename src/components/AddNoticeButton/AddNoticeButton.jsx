
import { AddPetBtn, StyledPlus } from './AddNoticeButton.styled';

export const AddNoticeButton = ({onClick}) => {
  return (
      <AddPetBtn  onClick={onClick}>
        <StyledPlus />
      </AddPetBtn>
  );
};
