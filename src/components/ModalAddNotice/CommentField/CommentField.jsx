import { Field } from 'formik';
import { Label, Error } from '../ModalAddNotice.styled';

export const CommentField = ({ touched, errors, name, validate }) => {
  return (
    <div>
      <Label>
        <div>
          Comments <span>*</span>
        </div>
        <Field
          as="textarea"
          placeholder="Type comment"
          name={name}
          validate={validate}
        />
        {touched.comments && errors.comments && (
          <Error>{errors.comments}</Error>
        )}
      </Label>
    </div>
  );
};
