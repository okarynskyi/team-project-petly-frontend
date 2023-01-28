import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { StyledButton } from '../StyledButton/StyledButton.styled';

export const AccountBtn = styled(StyledButton)`
  padding: 6px 37px;
  background-color: rgba(245, 146, 86, 1);
  color: rgba(255, 255, 255, 1);
  :hover {
    background-color: #ffffff;
    color: #111111;
  }
  :hover div {
    color: #f59256;
  }
  @media (min-width: 768px) {
    padding: 9px 28px;
    font-size: 16px;
  }
  div {
    position: relative;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    overflow: hidden;
    @media (min-width: 768px) {
      width: 23px;
      height: 23px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const UserCircle = styled(FaUserCircle)`
  width: 17px;
  height: 17px;
  @media (min-width: 768px) {
    width: 23px;
    height: 23px;
  }
`;
