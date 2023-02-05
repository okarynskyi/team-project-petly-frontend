import styled from 'styled-components';

export const RadioBtnWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 8px;
`;

export const LabelRadioBtn = styled.label`
  position: relative;
  display: block;
  padding: 8px 28px;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-size: 14px;
  line-height: calc(19 / 14);
  letter-spacing: 0.04em;
  color: ${p => {
    if (p.category === p.value) {
      return '#ffffff';
    }
    return '#000';
  }};
  background-color: ${p => {
    if (p.category === p.value) {
      return '#F59256';
    }
    return 'fff';
  }};

  transition: all 300ms linear;
  cursor: pointer;
  :hover,
  :focus {
    color: #fff;
    background-color: #f59256;
  }
`;

export const InputRadio = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;
