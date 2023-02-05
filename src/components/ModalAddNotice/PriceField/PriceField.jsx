import { Label, Error } from '../ModalAddNotice.styled';
import { PriceWrap, InputField } from './PriceField.styled';

export const PriceField = ({
  touched,
  errors,
  name,
  placeholder,
  required = false,
  min,
}) => {
  return (
    <PriceWrap>
      <Label>
        <div>
          Price<span>*</span>:
        </div>
        <InputField
          name={name}
          type="number"
          placeholder={placeholder}
          required={required}
          min={min}
        />
        {touched.price && errors.price && <Error>{errors.price}</Error>}
      </Label>
    </PriceWrap>
  );
};
