import styled from 'styled-components';
import { device } from 'Device';
import { HiPencil, HiCheck } from 'react-icons/hi';

export const FormStyle = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;

export const LabelUserInfo = styled.label`
  font-family: ${props => props.theme.fonts.main};
  text-transform: capitalize;
  font-style: normal;
  font-size: ${props => props.theme.fontSizes.fs12};
  letter-spacing: 0.04em;
  @media ${device.tablet} {
    font-weight: ${props => props.theme.fontWeights.fw500};
    font-size: ${props => props.theme.fontSizes.fs18};
  }
`;
export const InputUserInfo = styled.input`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.fs12};
  line-height: 1.33;
  letter-spacing: 0.04em;
  width: 160px;
  margin-right: 12px;
  padding: 4px 0 4px 18px;
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.radii.br40};
  border: 1px solid ${props => props.theme.colors.inputBackground};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs18};
    line-height: 1.39;
    margin-right: 24px;
    padding-left: 12px;
    width: 216px;
  }
`;
//дізнатися,як винести спільне в окрему частинку,
//а потім перевикористати и ValueText and ValueEmailTel, IconPencil and IconCheck

export const ValueText = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.fs12};
  line-height: 1.33;
  letter-spacing: 0.04em;
  width: 160px;
  margin-right: 12px;
  padding: 4px 0 4px 18px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs18};
    line-height: 1.39;
    margin-right: 24px;
    padding-left: 12px;
    width: 216px;
  }
`;
export const ValueEmailTel = styled.a`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.fs12};
  line-height: 1.33;
  letter-spacing: 0.04em;
  width: 160px;
  margin-right: 12px;
  padding: 4px 0 4px 18px;
  color: ${props => props.theme.colors.mainText};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: pointer;
    color: ${props => props.theme.colors.accent};
  }
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs18};
    line-height: 1.39;
    margin-right: 24px;
    padding-left: 12px;
    width: 216px;
  }
`;
const IconPencil = ({ className }) => <HiPencil className={className} />;
export const StyledPencil = styled(IconPencil)`
  color: ${props => props.theme.colors.accent};
  width: 13px;
  height: 13px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.2);
    color: ${props => props.theme.colors.hoverAccent};
  }
  @media ${device.tablet} {
    width: 20px;
    height: 20px;
  }
`;
const IconCheck = ({ className }) => <HiCheck className={className} />;
export const StyledCheck = styled(IconCheck)`
  color: ${props => props.theme.colors.accent};
  width: 13px;
  height: 13px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.2);
    color: ${props => props.theme.colors.hoverAccent};
  }
  @media ${device.tablet} {
    width: 20px;
    height: 20px;
  }
`;
export const ValidWrapper = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0;
  right: -200px;
  background-color: white;
  @media ${device.tablet} {
  }
`;
