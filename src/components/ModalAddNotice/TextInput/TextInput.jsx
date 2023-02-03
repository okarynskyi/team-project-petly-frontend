import { Field } from 'formik';

export const TextInput = ({ name, placeholder, validate }) => {
  return (
    <>
      <Field
        type="text"
        placeholder={placeholder}
        name={name}
        validate={validate}
      />
    </>
  );
};
