import styled from 'styled-components';

export const InputFileWrap = styled.div`
  position: relative;
  margin-top: 10px;
  label {
    display: inline-block;
  }
`;

export const InputFile = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
`;

export const AddImgIcon = styled.span`
  width: 71px;
  height: 71px;
  background: #fdf7f2;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 71px;
    height: 71px;
  }
  svg {
    width: 43px;
    height: 43px;
    fill: rgba(17, 17, 17, 0.6);
  }
`;

export const PrevievImg = styled.img`
  margin-top: 8px;
  width: 71px;
  height: 71px;
  border-radius: 20px;
  @media (min-width: 768px) {
    margin-top: 12px;
    width: 71px;
    height: 71px;
  }
`;
