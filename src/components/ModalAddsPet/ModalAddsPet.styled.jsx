import styled from 'styled-components';
import { device } from 'Device';
import { CircleBtn } from 'components/common/CircleBtn.styled';
import { HiOutlinePlus } from 'react-icons/hi';
import {
  FormFormik,
  BoxInput,
  InputFormik,
  ErrorText,
} from '../../components/LoginForm/LoginForm.styled';

export const FormAdd = styled(FormFormik)`
  @media screen and (max-width: 767px) {
    button {
      margin: 0 auto;
      width: 240px;
      font-weight: ${props => props.theme.fontWeights.fw500};
      letter-spacing: 0.04em;
      /* overflow-y: scroll;
      overflow-x: hidden; */
      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }
  @media ${device.tablet} {
    width: 448px;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: row-reverse;
      gap: ${props => props.theme.space[3]}px;
    }
    button {
      width: 180px;
      margin: 0;
    }
  }
`;
export const BowInputs = styled(BoxInput)`
  margin-bottom: ${props => props.theme.space[5]}px;
  flex-direction: column;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 6px;
  }
`;
export const Error = styled(ErrorText)`
  position: absolute;
  left: 0;
  bottom: -20%;
  text-align: start;
  margin-top: ${props => props.theme.space[0]}px;
  color: ${props => props.theme.colors.accent};
  @media ${device.tablet} {
  }
`;

export const InputStyled = styled(InputFormik)`
  margin-top: ${props => props.theme.space[1]}px;
  width: 240px;
  font-weight: ${props => props.theme.fontWeights.fw500};
  letter-spacing: 0.04em;
  @media ${device.tablet} {
    width: 448px;
  }
`;

export const StyledComment = styled(InputFormik)`
  margin-top: ${props => props.theme.space[1]}px;
  width: 240px;
  font-weight: ${props => props.theme.fontWeights.fw500};
  letter-spacing: 0.04em;
  min-height: 100px;
  border-radius: ${props => props.theme.radii.br20};
  padding: 16px;
  resize: none;
  @media ${device.tablet} {
    width: 394px;
  }
`;

export const LabelStyled = styled.label`
  position: relative;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.fw500};
  font-size: ${props => props.theme.fontSizes.fs18};
  line-height: 1.47;
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs24};
    line-height: 1.08;
  }
`;

export const TextAddPhoto = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.fw500};
  letter-spacing: -0.01em;
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs20};
  }
`;
export const LabelEdd = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 208px;
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.radii.br20};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    cursor: pointer;
    transform: scale(0.8);
  }
  @media ${device.tablet} {
    width: 182px;
    height: 182px;
  }
`;
export const Preview = styled.img`
  width: 208px;
  height: 208px;
  @media ${device.tablet} {
    width: 182px;
    height: 182px;
  }
`;
export const WrapperModalAddPet1 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 40px 20px;
  overflow-y: auto;
  width: 100%;
  padding-top: ${props => props.theme.space[3]}px;
  @media ${device.mobileOnly} {
    max-height: 530px;
  }
  @media ${device.tablet} {
    width: 620px;
    max-height: 570px;
    padding: 40px 75px;
  }
`;
export const WrapperModalAddPet2 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 40px 20px;
  overflow-y: auto;
  width: 100%;
  padding-top: ${props => props.theme.space[3]}px;
  @media ${device.mobileOnly} {
    max-height: 670px;
  }
  @media ${device.tablet} {
    width: 620px;
    max-height: 662px;
    padding: 40px 75px;
  }
`;
export const TitleModal = styled.h3`
  margin-bottom: 24px;
  text-align: center;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.fw500};
  font-size: ${props => props.theme.fontSizes.fs24};
  line-height: 1.36;
  @media ${device.tablet} {
    font-size: 36px;
  }
`;

export const WrapperAddPet = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  > p {
    font-weight: ${props => props.theme.fontWeights.fw500};
    font-size: ${props => props.theme.fontSizes.fs20};
    line-height: 27px;
    color: ${props => props.theme.colors.mainText};
  }
`;
export const AddPetBtn = styled(CircleBtn)`
  background-color: ${props => props.theme.colors.accent};
  padding: 0;
  width: 40px;
  height: 40px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: pointer;
    background-color: ${props => props.theme.colors.hoverAccent};
    transform: scale(1.2);
  }
  @media ${device.tablet} {
    width: 40px;
    height: 40px;
  }
`;
const IconPlus = ({ className }) => <HiOutlinePlus className={className} />;
export const StyledPlus = styled(IconPlus)`
  color: ${props => props.theme.colors.white};
  width: 24px;
  height: 24px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.2);
  }
  @media ${device.tablet} {
    width: 24px;
    height: 24px;
  }
`;
export const ModalButton = styled.button`
  position: absolute;
  display: flex;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: 0;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
export const WrapperModalAddPet = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 40px 20px;
  overflow-y: auto;
  width: 100%;
  padding-top: ${props => props.theme.space[3]}px;
  @media ${device.mobileOnly} {
    max-height: 510px;
  }
  @media ${device.tablet} {
    width: 620px;
    max-height: 570px;
    padding: 40px 75px;
  }
`;