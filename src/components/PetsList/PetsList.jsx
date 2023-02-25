import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectPetsInfo } from 'redux/user/userSelectors';
import { formatBirthDate } from 'helpers/formatDate';
import {
  CardPet,
  ImgPet,
  WrapperInfo,
  InfoPet,
  ListPets,
  EmptyListPet,
} from './PetsList.styled';
import { DeletePet } from './DeletePet';
import { Loader } from '../Loader';

export const PetsList = () => {
  const pets = useSelector(selectPetsInfo);
  const [loadPet, setLoadPet] = useState();

  useEffect(() => {
    setLoadPet(false);
  }, [pets]);

  return (
    <>
      {pets.length === 0 && <EmptyListPet>Please add pet.</EmptyListPet>}
      {!loadPet ?
      (pets && (
        <ListPets>
          {pets.map(pet => (
            <CardPet key={pet._id}>
              <ImgPet src={pet.petsPhotoURL} alt={pet.name} />
              <WrapperInfo>
                <DeletePet _id={pet._id}
                >
                </DeletePet>
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
                  Comments: <span>{pet.comments}</span>
                </InfoPet>
              </WrapperInfo>
            </CardPet>
          ))}
        </ListPets>
      )) : (<Loader />)}
    </>
  );
};
