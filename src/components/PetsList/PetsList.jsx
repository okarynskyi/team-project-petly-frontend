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
import cat from '../../staticImages/cat.jpg';

export const PetsList = () => {
  const pets = useSelector(selectPetsInfo);
  const [loadPet, setLoadPet] = useState();
    useEffect(() => {
      setLoadPet(false);
      console.log(pets);
  }, [pets]);
  return (
    <>
      {pets.length === 0 && <EmptyListPet>Please, add pet.</EmptyListPet>}
      {loadPet && <h1>load..</h1>}
      {pets && (
        <ListPets>
          {pets.map(pet => (
            <CardPet key={pet._id}>
              {pet.petsPhotoURL ? (
                <ImgPet src={pet.petsPhotoURL} alt={pet.name} />
              ) : (
                <ImgPet src={cat} alt={pet.name} />
              )}
              <WrapperInfo>
                <DeletePet _id={pet._id} />
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
      )}
    </>
  );
};

// const petsFromBack = [
//   {
//     _id: '63d6364d0ae399c680890db1',
//     name: 'Tuzik',
//     birthday: '2004-01-01T00:00:00.000Z',
//     breed: 'German Shepherd',
//     petsPhotoURL: cat,
//     comment: 'It"s fine cat',
//     owner: '63d597e17ca822bddfedb390',
//   },
//   {
//     _id: '63d6364d0ae399c680890db2',
//     name: 'Tuzik',
//     birthday: '2004-01-01T00:00:00.000Z',
//     breed: 'German Shepherd',
//     petsPhotoURL: cat,
//     comment: 'It"s nice cat',
//     owner: '63d597e17ca822bddfedb390',
//   },
// ];
