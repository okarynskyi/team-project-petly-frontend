import {
  WrapperAddPet,
  StyledPlus,
  AddPetBtn,
  WrapperModalAddPet,
} from './ModalAddsPet.styled';
import {
  AccentButton,
  StyledButton,
} from 'components/common/StyledButton/StyledButton.styled';
import { useState } from 'react';
// import { Form } from 'formik';
// import * as yup from 'yup';
import { nanoid } from 'nanoid';
// import { useDispatch } from 'react-redux';
import Modal from '../common/Modal/Modal';
// import {
//   FormFormik,
//   InputFormik,
//   ErrorText,
//   BoxInput,
// } from '../LoginForm/LoginForm.styled';
// import { addPet } from '../../redux/user/userOperations';

const ModalAddPet = () => {
  const [modalActive, setModalActive] = useState(false);
  const nameId = nanoid();
  const dateId = nanoid();
  const breedId = nanoid();
  // const dispatch = useDispatch();
  // const schema = yup.object({
  //   name: yup
  //     .string()
  //     .min(7, 'Email must consist of at least 7 symbols')
  //     .max(63, 'Email must contain no more than 63 symbols')
  //     .required('Name is required'),
  //   breed: yup
  //     .string()
  //     .min(7, 'Email must consist of at least 7 symbols')
  //     .max(63, 'Email must contain no more than 63 symbols')
  //     .required('Breed is required'),
  //   birthday: yup
  //     .date()
  //     .required('Date is required'),
  // });
  // const initialValues = {
  //   name: '',
  //   birthday: '',
  //   breed: '',

  // };
  const handleSubmit = ({ name, birthday, breed, petsPhotoURL, comments }) => {
    // dispatch(
    //   addPet({ name, birthday, breed, imageURL: petsPhotoURL, comments })
    // );
    console.log({ name, birthday, breed, petsPhotoURL, comments });
  };

  return (
    <main>
      <WrapperAddPet>
        <p>Add pet </p>
        <AddPetBtn onClick={() => setModalActive(true)}>
          <StyledPlus />
        </AddPetBtn>
      </WrapperAddPet>
      <Modal active={modalActive} setActive={setModalActive}>
        <WrapperModalAddPet>
          <h3>Add pet</h3>
          {/* <FormFormik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
          > */}
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor={nameId}>
                  Name pet
                  <input
                    type="text"
                    name="name"
                    id={nameId}
                    placeholder="Type name pet"
                  />
                </label>
                {/* <ErrorText name="name" component="p" /> */}
                <label htmlFor={dateId}>
                  Date of birth{' '}
                  <input
                    type="date"
                    name="birthday"
                    id={dateId}
                    placeholder="Type date of birth"
                  />
                </label>
                {/* <ErrorText name="date" component="p" /> */}
                <label htmlFor={breedId}>
                  Breed{' '}
                  <input
                    type="text"
                    name="breed"
                    id={breedId}
                    placeholder="Type breed"
                  />
                </label>
                {/* <ErrorText name="date" component="p" /> */}
              </div>
              <AccentButton type="submit" size="180px">
                Next
              </AccentButton>
              <StyledButton type="button" size="180px">
                Cancel
              </StyledButton>
            </form>{' '}
          {/* </FormFormik> */}
        </WrapperModalAddPet>
      </Modal>
    </main>
  );
};
export default ModalAddPet;
