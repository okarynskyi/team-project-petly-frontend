import styled from 'styled-components';

export const ModalButton = styled.button`
  position: absolute;
  display: flex;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: 0;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.2);
  }
`;