import styled from 'styled-components';
import { device } from 'Device';
import { TitleSectionUser } from 'pages/UserPage/UserPage.styled';

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
