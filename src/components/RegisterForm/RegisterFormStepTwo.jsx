import { Field } from 'formik';

export const RegisterFormStepTwo = () => {
  return (
    <>
      <label>
        <Field name="name" placeholder="Name" />
      </label>
      <label>
        <Field name="city" placeholder="City" />
      </label>
      <label>
        <Field name="phone" placeholder="Mobile phone" maxLength="13" />
      </label>
    </>
  );
};
