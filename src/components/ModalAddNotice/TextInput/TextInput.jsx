import { InputField } from './TextInput.styled';

export const TextInput = ({ name, placeholder, validate }) => {
  return (
    <>
      <InputField
        type="text"
        placeholder={placeholder}
        name={name}
        validate={validate}
      />
    </>
  );
};
