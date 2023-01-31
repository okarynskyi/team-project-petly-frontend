// import { useState, useEffect } from "react";
import { PetsList } from 'components/PetsList/PetsList';
import {
  WrapperTitlePets,
  WrapperAddPet,
  TitleSectionPets,
} from './PetsData.styled';
import { AddNoticeButton } from 'components/AddNoticeButton/AddNoticeButton';
export const PetsData = () => {
  return (
    <div>
      <WrapperTitlePets>
        <TitleSectionPets>My pets:</TitleSectionPets>
        <WrapperAddPet>
          <p>Add pet </p>
          <AddNoticeButton></AddNoticeButton>
        </WrapperAddPet>
      </WrapperTitlePets>
      <PetsList></PetsList>
    </div>
  );
};
