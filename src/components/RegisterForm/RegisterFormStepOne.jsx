import { ErrorMessage } from 'formik';
import { BoxInput, InputFormik, Label, ErrorText } from './RegisterForm.styled';

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const RegisterFormStepOne = () => {
  return (
    <BoxInput>
      <Label>
        <InputFormik name="email" type="text" placeholder="Email" />
      </Label>
      <FormError name="email" />
      <Label>
        <InputFormik name="password" placeholder="Password" />
      </Label>
      <FormError name="password" />
      <Label>
        <InputFormik name="confirmPassword" placeholder="Confirm password" />
      </Label>
      <FormError name="confirmPassword" />
    </BoxInput>
  );
};
