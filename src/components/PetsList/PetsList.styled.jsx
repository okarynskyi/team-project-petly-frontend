import styled from 'styled-components';
import { device } from 'Device';
import { CircleBtn } from 'components/common/CircleBtn.styled';
import { HiTrash } from 'react-icons/hi';

export const ListPets = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 280px;
  gap: ${props => props.theme.space[3]}px;
  @media ${device.tablet} {
    width: 704px;
  }
  @media ${device.desktop} {
    width: 820px;
  }
`;
export const CardPet = styled.li`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  gap: ${props => props.theme.space[3]}px;
  background: ${props => props.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: ${props => props.theme.radii.br20};
  padding: ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px
    ${props => props.theme.space[5]}px;
  @media ${device.tablet} {
    flex-direction: row;
    gap: ${props => props.theme.space[4]}px;
    padding: ${props => props.theme.space[3]}px;
    border-radius: ${props => props.theme.radii.br40};
  }
`;
export const ImgPet = styled.img`
  border-radius: ${props => props.theme.radii.br20};
  @media ${device.tablet} {
    border-radius: ${props => props.theme.radii.br40};
    width: 160px;
  }
`;
export const WrapperInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 240px;
  flex-direction: column;
  gap: 12px;
  @media ${device.tablet} {
    width: 470px;
  }
  @media ${device.desktop} {
    width: 580px;
  }
`;
export const InfoPet = styled.div`
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.fw500};
  font-size: ${props => props.theme.fontSizes.fs14};
  letter-spacing: 0.04em;
  > span {
    font-weight: ${props => props.theme.fontWeights.fw400};
    line-height: 1.57;
  }
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs16};
  }
`;
export const CircleBtnTrash = styled(CircleBtn)`
  width: 38px;
  height: 38px;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.inputText};
  }
`;
const IconTrash = ({ className }) => <HiTrash className={className} />;
export const StyledTrash = styled(IconTrash)`
  color: ${props => props.theme.colors.inputText};
  width: 20px;
  height: 20px;
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
export const EmptyListPet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: rgba(245, 146, 86, 0.3);
  border-radius: ${props => props.theme.radii.br40};
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.fw400};
  font-size: ${props => props.theme.fontSizes.fs18};
  line-height: 1.57;
  letter-spacing: 0.04em;
  color: rgba(245, 146, 86, 0.9);
  @media ${device.tablet} {
    height: 300px;
  }
  @media ${device.desktop} {
    font-size: ${props => props.theme.fontSizes.fs24};
    height: 582px;
  }
`;
