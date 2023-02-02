// import { useState, useEffect } from "react";
import { PetsList } from 'components/PetsList/PetsList';
import {
  WrapperTitlePets,
  TitleSectionPets,
} from './PetsData.styled';
import  ModalAddPet  from '../ModalAddsPet/ModalAddsPet';

export const PetsData = () => {
  return (
    <div>
      <WrapperTitlePets>
        <TitleSectionPets>My pets:</TitleSectionPets>
        <ModalAddPet></ModalAddPet>
      </WrapperTitlePets>
      <PetsList></PetsList>
    </div>
  );
};
