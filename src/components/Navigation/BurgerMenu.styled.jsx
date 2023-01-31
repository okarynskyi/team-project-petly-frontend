import styled from 'styled-components';
import { HiX } from 'react-icons/hi';

export const NavStyled = styled.nav`
  position: absolute;
  background-color: ${props => props.theme.colors.background};
  z-index: 50;
  padding: 16px 20px;
  width: 100%;
  top: 0;
  right: 50%;
  transform: translateX(50%);
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  margin: 5px auto;
  @media (min-width: 768px) {
    padding: 24px 32px;
  }
`;

export const WrapLogo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 46px;
  button {
    padding: 0;
  }
  @media (min-width: 768px) {
    margin-bottom: 88px;
  }
`;

export const WrapNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin-bottom: 46px;
  @media (min-width: 768px) {
    margin-bottom: 88px;
  }
`;
export const BtnClose = styled.button`
  border: none;
  background: transparent;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
export const CloseIcon = styled(HiX)`
  width: 32px;
  height: 32px;

`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: ${props => props.theme.colors.inputText};
  backdrop-filter: blur(10px);
  overflow: auto;
`;
