import styled from 'styled-components';

export const SexRadioWrap = styled.div`
  margin-top: 4px;
  margin-bottom: 10px;
  display: flex;
  gap: 40px;
  @media (min-width: 768px) {
    gap: 80px;
  }
`;

export const RadioSexLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: ${p => {
    if (p.sex === p.value) {
      return '#F59256';
    }
    return '#000';
  }};

  svg {
    transition: transform 250ms linear;
  }

  :hover svg,
  :focus svg {
    transform: scale(1.2);
  }

  @media (min-width: 768px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const InputRadio = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;
