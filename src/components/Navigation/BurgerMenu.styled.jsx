import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

export const NavStyled = styled.nav`
  position: absolute;
  background-color: rgba(253, 247, 242, 1);
  z-index: 50;
  padding: 16px 20px;
  width: 320px;
  top: 0;
  right: 50%;
  transform: translateX(50%);
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  margin: 5px auto;
  @media (min-width: 768px) {
    padding: 24px 32px;
    width: 748px;
  }
`;

export const Div1 = styled.div`
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

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin-bottom: 46px;
  @media (min-width: 768px) {
    margin-bottom: 88px;
  }
`;

export const CloseIcon = styled(CgClose)`
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
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  overflow: auto;
`;
