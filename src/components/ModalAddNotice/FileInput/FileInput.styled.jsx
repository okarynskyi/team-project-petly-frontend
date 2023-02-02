import styled from 'styled-components';

export const InputFile = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
`;

export const AddImgIcon = styled.span`
  width: 50px;
  height: 50px;
  background: #fdf7f2;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    fill: rgba(17, 17, 17, 0.6);
  }
`;

export const PrevievImg = styled.img`
  margin-top: 8px;
  width: 50px;
  height: 50px;
  border-radius: 20px;
`;
