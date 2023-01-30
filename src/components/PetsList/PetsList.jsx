// import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { formatBirthDate } from 'helpers/formatDate';
import cat from '../../staticImages/cat.jpg';
import {
  CardPet,
  ImgPet,
  WrapperInfo,
  InfoPet,
  CircleBtnTrash,
  ListPets,
  StyledTrash,
} from './PetsList.styled';

const petsFromBack = [
  {
    _id: '63d6364d0ae399c680890db1',
    name: 'Tuzik',
    birthday: '2004-01-01T00:00:00.000Z',
    breed: 'German Shepherd',
    petsPhotoURL: cat,
    comment: 'It"s fine cat',
    owner: '63d597e17ca822bddfedb390',
  },
  {
    _id: '63d6364d0ae399c680890db2',
    name: 'Tuzik',
    birthday: '2004-01-01T00:00:00.000Z',
    breed: 'German Shepherd',
    petsPhotoURL: cat,
    comment: 'It"s nice cat',
    owner: '63d597e17ca822bddfedb390',
  },
];



export const PetsList = ({ pets = petsFromBack }) => {
  return (
    <>
      {pets && (
        <ListPets>
          {pets.map(pet => (
            <CardPet key={pet._id}>
              <ImgPet src={pet.petsPhotoURL} alt={pet.name} />
              <WrapperInfo>
                <CircleBtnTrash>
                  <StyledTrash />
                </CircleBtnTrash>
                <InfoPet>
                  Name: <span>{pet.name}</span>{' '}
                </InfoPet>
                <InfoPet>
                  Date of birth: <span>{formatBirthDate(pet.birthday)}</span>
                </InfoPet>
                <InfoPet>
                  Breed: <span>{pet.breed}</span>
                </InfoPet>
                <InfoPet>
                  Comments: <span>{pet.comment}</span>
                </InfoPet>
              </WrapperInfo>
            </CardPet>
          ))}
        </ListPets>
      )}
    </>
  );
};

PetsList.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      breed: PropTypes.string.isRequired,
      birthday: PropTypes.string.isRequired,
      petsPhotoURL: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ),
};
