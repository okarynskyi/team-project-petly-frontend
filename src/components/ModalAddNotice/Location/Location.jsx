import { Label } from '../ModalAddNotice.styled';
import { Field } from 'formik';

export const Location = ({ name, placeholder, validate }) => {
  return (
    <Label>
      Location
      <Field
        type="text"
        placeholder={placeholder}
        name={name}
        validate={validate}
      />
    </Label>
  );
};
