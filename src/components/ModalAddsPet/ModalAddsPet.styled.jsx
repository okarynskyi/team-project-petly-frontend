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
import { HiddenInput } from 'components/UserData/UserData.styled';

export const FormAdd = styled(FormFormik)`
@media ${device.mobileOnly} {
  button {
    margin: 0 auto;
    width: 240px;
    font-weight: ${props => props.theme.fontWeights.fw500};
    letter-spacing: 0.04em;
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
      gap: 20px;
    }
     button {
      width: 180px;
      margin: 0;
    }
  }
`;
export const BowInputs = styled(BoxInput)`
  margin-bottom: 40px;
  flex-direction: column;
  @media ${device.tablet} {
>div{
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap:20px;
}
  }
`;
export const Error = styled(ErrorText)`
  text-align: start;
  margin-top: 4px;
  color: ${props => props.theme.colors.accent};
  @media ${device.tablet} {
  }
`;

export const Hidden = styled(HiddenInput)`
  position: absolute;
`;
export const InputStyled = styled(InputFormik)`
  margin-top: 8px;
  width: 240px;
  font-weight: ${props => props.theme.fontWeights.fw500};
  letter-spacing: 0.04em;
  @media ${device.tablet} {
    width: 448px;
  }
`;
export const InputStyledComment = styled(InputStyled)`
  min-height: 100px;
  border-radius: 20px;
  @media ${device.tablet} {
    width: 394px;
  }
`;

export const LabelStyled = styled.label`
margin:0;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.47;
  color: #111111;
   @media ${device.tablet} {
    font-weight: 500;
font-size: 24px;
line-height: 26px;
    
  }
`;

export const TextAddPhoto = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #000000;
 @media ${device.tablet} {
font-size: 20px;
line-height: 24px;
    
  }
`;
export const LabelEdd = styled.label`
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 208px;
  height: 208px;
  background: #fdf7f2;
  border-radius: 20px;
   @media ${device.tablet} {
    width: 182px;
  height: 182px;
  }
`;

export const WrapperModalAddPet = styled.div`
  width: 240px;

  padding-top: 20px;
  @media ${device.mobileOnly} {
  min-height: 510px;
  }
  @media ${device.tablet} {
    width: 568px;
    padding-bottom: 20px;
  }
`;
export const TitleModal = styled.h3`
  margin-bottom: 24px;
  text-align: center;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #111111;
  @media ${device.tablet} {
 font-size: 36px;
line-height: 49px;
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
