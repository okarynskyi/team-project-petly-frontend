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

export const RegisterFormStepOne = () => {
  return (
    <BoxInput>
      <Label>
        <InputFormik name="email" type="text" placeholder="Email" />
        <FormError name="email" />
      </Label>
      <Label>
        <InputFormik name="password" placeholder="Password" />
        <FormError name="password" />
      </Label>
      <Label>
        <InputFormik name="confirmPassword" placeholder="Confirm password" />
        <FormError name="confirmPassword" />
      </Label>
    </BoxInput>
  );
};
