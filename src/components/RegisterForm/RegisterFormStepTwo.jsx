import { ErrorMessage } from 'formik';
import { BoxInput, InputFormik, Label, ErrorText } from './RegisterForm.styled';

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={() => <ErrorText>valid {name} is required</ErrorText>}
    />
  );
};

export const RegisterFormStepTwo = () => {
  return (
    <BoxInput>
      <Label>
        <InputFormik name="name" placeholder="Name" />
        <FormError name="name" />
      </Label>
      <Label>
        <InputFormik name="location" placeholder="Location. Example: City, Region" />
        <FormError name="location" />
      </Label>
      <Label>
        <InputFormik name="phone" placeholder="Mobile phone. Example +380 ..." maxLength="13" />
        <FormError name="phone" />
      </Label>
    </BoxInput>
  );
};
