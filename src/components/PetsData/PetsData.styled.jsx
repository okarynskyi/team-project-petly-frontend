import styled from 'styled-components';
import { device } from 'Device';
import { CircleBtn } from 'components/common/CircleBtn.styled';
import { TitleSectionUser } from '../../pages/UserPage/UserPage.styled';
import { HiOutlinePlus } from 'react-icons/hi';

export const WrapperTitlePets = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const TitleSectionPets = styled(TitleSectionUser)`
  @media ${device.tablet} {
    margin-bottom: 24px;
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
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: pointer;
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
