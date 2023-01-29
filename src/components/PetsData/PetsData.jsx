// import { useState, useEffect } from "react";
import { PetsList } from 'components/PetsList/PetsList';
import {
  AddPetBtn,
  WrapperTitlePets,
  WrapperAddPet,
  TitleSectionPets,
} from './PetsData.styled';
import { HiOutlinePlus } from 'react-icons/hi';

export const PetsData = () => {
  return (
    <div>
      <WrapperTitlePets>
        <TitleSectionPets>My pets:</TitleSectionPets>
        <WrapperAddPet>
          <p>Add pet </p>
          <AddPetBtn>
            <HiOutlinePlus color="white" size="24px" />
          </AddPetBtn>
        </WrapperAddPet>
      </WrapperTitlePets>
      <PetsList></PetsList>
    </div>
  );
};
