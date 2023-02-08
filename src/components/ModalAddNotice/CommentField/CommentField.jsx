import { Label, Error } from '../ModalAddNotice.styled';
import { CommentWrap, CommentInputField } from './CommentField.styled';

export const CommentField = ({ touched, errors, name, validate }) => {
  return (
    <CommentWrap>
      <Label>
        <div>
          Comments<span>*</span>:
        </div>
        <CommentInputField
          as="textarea"
          placeholder="Type comment"
          name={name}
          validate={validate}
        />
        {touched.comments && errors.comments && (
          <Error>{errors.comments}</Error>
        )}
      </Label>
    </CommentWrap>
  );
};
