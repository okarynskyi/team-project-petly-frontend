import styled from 'styled-components';
import { Field } from 'formik';

export const CommentWrap = styled.div`
  margin-top: 10px;
`;

export const CommentInputField = styled(Field)`
  padding: 12px 20px 12px 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(19 / 14);
  color: rgba(27, 27, 27, 0.6);
  background-color: #fdf7f2;
  border-radius: 10px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  outline: none;
  transition: border-color 300ms linear;

  :focus {
    border-color: #f59256;
  }
`;

export const LabelComment = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  line-height: calc(26 / 18);
  color: #111111;
  span {
    color: #f59256;
  }
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(26 / 24);
  }
`;
