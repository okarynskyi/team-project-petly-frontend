import styled from 'styled-components';
import { device } from 'Device';
import { CircleBtn } from 'components/common/CircleBtn.styled';
import { HiOutlinePlus } from 'react-icons/hi';

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
