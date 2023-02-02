import { Error } from '../ModalAddNotice.styled';
import { Field } from 'formik';

export const PriceField = ({
  touched,
  errors,
  name,
  placeholder,
  required = false,
  min,
}) => {
  return (
    <div>
      <label>
        <div>
          Price <span>*</span>
        </div>
        <Field
          name={name}
          type="number"
          placeholder={placeholder}
          required={required}
          min={min}
        />
        {touched.price && errors.price && <Error>{errors.price}</Error>}
      </label>
    </div>
  );
};
