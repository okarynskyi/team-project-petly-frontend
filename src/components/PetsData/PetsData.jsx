// import { useState, useEffect } from "react";
import { PetsList } from 'components/PetsList/PetsList';
import {
  AddPetBtn,
  WrapperTitlePets,
  WrapperAddPet,
  TitleSectionPets,
  StyledPlus,
} from './PetsData.styled';

export const PetsData = () => {
  return (
    <div>
      <WrapperTitlePets>
        <TitleSectionPets>My pets:</TitleSectionPets>
        <WrapperAddPet>
          <p>Add pet </p>
          <AddPetBtn>
            <StyledPlus />
          </AddPetBtn>
        </WrapperAddPet>
      </WrapperTitlePets>
      <PetsList></PetsList>
    </div>
  );
};
