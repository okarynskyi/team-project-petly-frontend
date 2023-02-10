import { Error } from '../ModalAddNotice.styled';
import { CommentWrap, LabelComment } from './CommentField.styled';
import { Field } from 'formik';

export const CommentField = ({ touched, errors, name, validate }) => {
  return (
    <CommentWrap>
      <LabelComment>
        <div>
          Comments<span>*</span>:
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
      </LabelComment>
    </CommentWrap>
  );
};
