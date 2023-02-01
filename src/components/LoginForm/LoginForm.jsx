import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import {
  FormFormik,
  InputFormik,
  ErrorText,
  Question,
  BoxInput,
} from './LoginForm.styled';
import { AccentButton } from 'components/common/StyledButton/StyledButton.styled';

const passwordRegexp = /^[A-Za-z0-9!?#$%^&_\-*]{7,32}$/;
const emailRegexp =
  /^[^-._]{1}[A-Za-z0-9._-]{1,}@[^-._]{1}[A-Za-z0-9.-]{0,}\.[A-Za-z]{2,4}$/;

export const LoginForm = () => {
  const loginId = nanoid();
  const passwordIdLogg = nanoid();
  const dispatch = useDispatch();
  const schema = yup.object({
    email: yup
      .string()
      .min(7, 'Email must consist of at least 7 symbols')
      .max(63, 'Email must contain no more than 63 symbols')
      .matches(emailRegexp, 'Please, enter a valid e-mail')
      .required('E-mail is required'),
    password: yup
      .string()
      .min(7, 'Password must consist of at least 7 symbols')
      .max(32, 'Password must contain no more than 32 symbols')
      .matches(passwordRegexp, 'Please, enter a valid password')
      .required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = ({ email, password }) => {
    dispatch(logIn({ email, password }));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormFormik autoComplete="off">
        <BoxInput>
          <InputFormik
            type="text"
            name="email"
            id={loginId}
            placeholder="Email"
          />
          <ErrorText name="email" component="p" />
          <InputFormik
            type="password"
            name="password"
            id={passwordIdLogg}
            placeholder="Password"
          />
          <ErrorText name="password" component="p" />
        </BoxInput>
        <AccentButton type="submit" size="280px">
          Login
        </AccentButton>
        <Question>
          Don't have an account? <NavLink to="/register">Register</NavLink>
        </Question>
      </FormFormik>
    </Formik>
  );
};
