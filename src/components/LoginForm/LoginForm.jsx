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
  InputWrapper,
} from './LoginForm.styled';
import { AccentButton } from 'components/common/StyledButton/StyledButton.styled';
import { toast } from 'react-toastify';

const passwordRegexp = /^[\S*]{7,32}$/;
const emailRegexp =
  /^[^-._]{1}[A-Za-z0-9._-]{1,}@[^-._]{1}[A-Za-z0-9.-]{0,}\.[A-Za-z]{2,4}$/;

export const LoginForm = () => {
  const loginId = nanoid();
  const passwordIdLogg = nanoid();
  const dispatch = useDispatch();
  
  const schema = yup.object({
    email: yup
      .string()
      .min(7, 'Email must contain at least 7 symbols')
      .max(63, 'Email must contain not more than 63 symbols')
      .matches(emailRegexp, 'Please, enter a valid e-mail')
      .required('E-mail is required'),
    password: yup
      .string()
      .min(7, 'Password must contain at least 7 symbols')
      .max(32, 'Password must contain not more than 32 symbols')
      .matches(passwordRegexp, 'Please, enter a valid password')
      .required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = ({ email, password }) => {
    dispatch(logIn({ email, password })).then((res) => {
      if (res.error) {
        toast.error("Wrong password or email!")
      } else {
        toast.success("Successfully logged in!")
      }
    })
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormFormik autoComplete="off">
        <BoxInput>
          <InputWrapper>
            <InputFormik
              type="text"
              name="email"
              id={loginId}
              placeholder="Email"
            />
            <ErrorText name="email" component="p" />
          </InputWrapper>
          <InputWrapper>
            <InputFormik
              type="password"
              name="password"
              id={passwordIdLogg}
              placeholder="Password"
            />
            <ErrorText name="password" component="p" />
          </InputWrapper>
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
