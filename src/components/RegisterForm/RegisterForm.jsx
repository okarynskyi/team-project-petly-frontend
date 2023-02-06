import React from 'react';
import { FormikWizard } from 'formik-wizard-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { logIn, signUp } from '../../redux/auth/authOperations';
import { Link } from 'react-router-dom';
import { RegisterFormStepOne } from './RegisterFormStepOne';
import { RegisterFormStepTwo } from './RegisterFormStepTwo';
import {
  TitleAuthSection,
  AuthWrapper,
  FormFormik,
  Question,
  BtnWrap,
  BackBtn,
  RegistrBtn,
  NextBtn,
} from './RegisterForm.styled';

export const passwordRegexp = /^\S*$/;
export const nameRegexp = /^[a-zA-Z]{2,20}$/;
export const locationRegexp = /[A-Z][a-z]*,\s[A-Z][a-z]*/;
export const phoneRegexp = /^\+[1-9]{1}[0-9]{3,14}$/;
export const emailRegexp =
  /^[^-._]{1}[A-Za-z0-9._-]{1,}@[^-._]{1}[A-Za-z0-9.-]{0,}\.[A-Za-z]{2,4}$/;

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = values => {
    dispatch(logIn(values)).then(resp => {
      if (resp.meta.requestStatus === 'fulfilled') {
        navigate('/user', { replace: true });
      }
      return;
    });
  };

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    location: '',
    phone: '',
  };

  const schemaStepOne = yup.object({
    email: yup
      .string()
      .trim(true)
      .min(7, 'Email must consist at least 7 symbols')
      .max(63, 'Email must contain no more than 63 symbols')
      .matches(
        emailRegexp,
        'Please, enter a valid e-mail. For example, "mango@gmail.com"'
      )
      .required('E-mail is required'),
    password: yup
      .string()
      .trim(true)
      .min(7, 'Password must consist at least 7 symbols')
      .max(32, 'Password must contain no more than 32 symbols')
      .matches(passwordRegexp, 'Please, enter a valid password')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref('password')],
        'This password doesn`t match the previous one'
      )
      .required('Please, confirm your password'),
  });

  const schemaStepTwo = yup.object({
    name: yup
      .string()
      .min(2, 'Name must contain at least 2 symbol')
      .max(20, 'Name must contain no more than 20 symbols')
      .matches(
        nameRegexp,
        'Please, enter a valid name. For example, "Mango" or "Poly"'
      )
      .required('Name is required'),
    location: yup
      .string()
      .matches(
        locationRegexp,
        'Please, enter a valid location. For example, "Brovary, Kyiv" or "Akhtyrka, Sumy"'
      )
      .required('Location is required'),
    phone: yup
      .string()
      .min(13, 'Not enough of symbols entered')
      .matches(
        phoneRegexp,
        'Please, enter the phone number in the format +xxxxxxxxxxxx'
      )
      .required('Phone is required'),
  });

  const handleSubmit = (
    { name, email, password, location, phone },
    { resetForm }
  ) => {
    const values = { email, password };
    dispatch(signUp({ name, email, password, location, phone })).then(resp => {
      if (resp.meta.requestStatus === 'fulfilled') {
        loginUser(values);
        resetForm();
      }
    });
  };

  return (
    <>
      <FormikWizard
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnNext
        activeStepIndex={0}
        steps={[
          {
            component: RegisterFormStepOne,
            validationSchema: schemaStepOne,
          },
          {
            component: RegisterFormStepTwo,
            validationSchema: schemaStepTwo,
          },
        ]}
      >
        {({ renderComponent, handlePrev, handleNext, isLastStep }) => (
          <AuthWrapper>
            <div>
              <TitleAuthSection>Registration</TitleAuthSection>
              <FormFormik>
                {renderComponent()}

                {!isLastStep ? (
                  <NextBtn type="button" onClick={handleNext}>
                    Next
                  </NextBtn>
                ) : (
                  <BtnWrap>
                    <RegistrBtn type="submit">Register</RegistrBtn>
                    <BackBtn type="button" onClick={handlePrev}>
                      Back
                    </BackBtn>
                  </BtnWrap>
                )}
              </FormFormik>
              <Question>
                Already have an account? <Link to="/login">Login</Link>
              </Question>
            </div>
          </AuthWrapper>
        )}
      </FormikWizard>
    </>
  );
};
