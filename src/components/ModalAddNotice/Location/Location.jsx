import { Label } from '../ModalAddNotice.styled';
import { InputField } from '../TextInput/TextInput.styled';

export const Location = ({ name, placeholder, validate }) => {
  return (
    <Label>
      <div>
        Location<span>*</span>:
      </div>

      <InputField
        type="text"
        placeholder={placeholder}
        name={name}
        validate={validate}
      />
    </Label>
  );
};
