import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Field } from 'formik';

export const RegisterFormStepOne = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };
  return (
    <>
      <label>
        <Field name="email" type="text" placeholder="Email" />
      </label>
      <label>
        <Field
          name="password"
          type={passwordShown ? 'text' : 'password'}
          placeholder="Password"
        />
        <span onClick={togglePassword}>
          {passwordShown ? <FaEye /> : <FaEyeSlash />}
        </span>
      </label>
      <label>
        <Field
          name="confirmPassword"
          type={confirmPasswordShown ? 'text' : 'password'}
          placeholder="Confirm password"
        />
        <span onClick={toggleConfirmPassword}>
          {confirmPasswordShown ? <FaEye /> : <FaEyeSlash />}
        </span>
      </label>
    </>
  );
};
