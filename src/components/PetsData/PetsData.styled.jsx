import styled from 'styled-components';
import { device } from 'Device';
import { CircleBtn } from 'components/common/CircleBtn.styled';
import { TitleSectionUser } from '../../pages/UserPage/UserPage.styled';

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
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: #111111;
  }
`;

export const AddPetBtn = styled(CircleBtn)`
  background-color: ${props => props.theme.colors.accent};
  padding: 0;
  width: 40px;
  height: 40px;
  @media ${device.tablet} {
    width: 40px;
    height: 40px;
  }
`;
