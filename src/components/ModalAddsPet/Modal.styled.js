import styled from 'styled-components';
import { device } from 'Device';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
  overflow-x: hidden;
`;
export const ModalContent = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -5%);
  height: 530px;
  width: 280px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  @media ${device.tablet} {
    height: 570px;
    width: 620px;
  }
`;
export const ModalContent2 = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -5%);
  height: 670px;
  width: 280px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  @media ${device.tablet} {
    height: 662px;
    width: 608px;
  }
`;
