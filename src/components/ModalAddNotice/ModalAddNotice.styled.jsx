import styled from 'styled-components';
import { Form } from 'formik';
import { device } from 'Device';
import {
  WrapperAddPet,
  AddPetBtn,
} from '../../components/ModalAddsPet/ModalAddsPet.styled';
export const Label = styled.label`
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
    gap: 12px;
  }
`;

export const Error = styled.div`
  position: absolute;
  left: 0;
  bottom: -20%;
  color: red;
  font-size: 12px;
`;

export const Title = styled.h3`
  font-size: 24px;
  line-height: calc(33 / 24);
  color: #111111;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: calc(49 / 36);
  }
`;

export const Subtitle = styled.p`
  margin-top: 20px;
  font-size: 16px;
  line-height: calc(22 / 16) 22px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #111111;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: calc(27 / 20);
  }
`;

export const FormStyled = styled(Form)`
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 28px;
  }
`;

export const InputFieldWrap = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    gap: 28px;
  }
`;

export const BtnWrap = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
export const WrapperAddNotice = styled(WrapperAddPet)`
  position: fixed;
  top: 450px;
  right: 30px;
  /* z-index: 100; */
  /* :hidden {
  display:none;
} */
  @media ${device.tablet} {
    position: static;
    width: 135px;
    gap: 12px;
  }
`;
export const AddPetNotice = styled(AddPetBtn)`
  width: 80px;
  height: 80px;
  @media ${device.tablet} {
    position: static;
    width: 44px;
    height: 44px;
  }
`;
export const TextAdd = styled.p`
  color: white;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  @media ${device.tablet} {
    display: none;
  }
`;
export const TextAddLeft = styled.p`
  display: none;
  @media ${device.tablet} {
    display: block;
    width: 80px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: #111111;
  }
`;
