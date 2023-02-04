import { ErrorMessage } from 'formik';
import { BoxInput, InputFormik, Label } from '../RegisterForm/RegisterForm.styled';

export const ModalAddPetOne = () => {
  return (
    <BoxInput>
      <Label>
        Name pet
        <InputFormik name="name" type="text" placeholder="Type name pet" />
        <ErrorMessage name="name" />
      </Label>
      <Label>
        {' '}
        Date of birth
        <InputFormik
          name="birthday"
          type="date"
          placeholder="Type date of birth"
        />
        <ErrorMessage name="birthday" />
      </Label>
      <Label>
        Breed
        <InputFormik name="breed" placeholder="Type breed" />
        <ErrorMessage name="breed" />
      </Label>
    </BoxInput>
  );
};
