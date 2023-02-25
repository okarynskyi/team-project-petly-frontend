import styled, {keyframes} from 'styled-components';
import { device } from 'Device';

const rotateAnim = keyframes`
0% {
transform: scale(0.5);
}
100% {
  transform: scale(1);
}
`
export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  overflow-y: scroll;
  overflow-x: hidden;
  transition: 0.5s;
  align-items: center;
justify-content: center;
  display: flex;
  opacity: 0;
pointer-events: none;
transition: 1s;
&.active {
    opacity: 1;
    pointer-events: all;
  };
`

export const ModalContentDellLogout = styled.div`
position: absolute;
  padding: 20px;
  border-radius: 40px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
/* transform: scale(0.5); */
transition: 0.5s all;
/* &.active {
  animation: ${rotateAnim}
    1s infinite linear
  transform: scale(1);
} */
`
export const ModalContent = styled.div`
  position: absolute;
  
  /* left: 50%; */

  /* transform: translate(-50%, -5%); */
  background: ${p => p.theme.colors.white};
  border-radius: 40px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);


  transform: scale(0.5);
transition: 1s all;
&.active {
  transform: scale(1);
}
`
export const ModalContentAddPets1 = styled(ModalContent)`
  top: 15%;
  height: 530px;
  width: 280px;

  @media ${device.tablet} {
    height: 570px;
    width: 620px;
  }`

export const ModalContentAddPets2 = styled(ModalContent)`
  top: 15%;
  height: 670px;
  width: 280px;
  @media ${device.tablet} {
    height: 662px;
    width: 608px;
  }
`
export const ModalContentAddNotice = styled(ModalContent)`
  top: 5%;
  height: 700px;
  width: 280px;
  @media ${device.tablet} {
    width: 608px;
  }

`;
export const ModalContentLearnMore = styled(ModalContent)`
//   width: 280px;
  padding: 60px 20px 40px 20px;
  top: 5%;
  height: 530px;
  overflow-x: hidden;
  overflow-y: scroll;

  @media ${device.tablet} {
    width: 704px;
    padding: 32px 40px 32px 20px;
    top: 10%;
    overflow-y: hidden;
  }

`;
export const WrapperModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  overflow-y: auto;
  width: 100%;
`;
export const WrapperModalAddPet1 = styled(WrapperModal)`
padding: 30px 20px;
  @media ${device.tablet} {
    width: 620px;
    height: 100%;
    padding: 40px 75px;
  }
`;
export const WrapperModalAddPet2 = styled(WrapperModal)`
  padding: 20px 20px;
  @media ${device.tablet} {
    width: 620px;
    height: 100%;
    padding: 40px 75px;
  }
`;
export const WrapperModalAddNotice = styled(WrapperModal)`
  padding: 10px 20px;
  @media ${device.tablet} {
    width: 608px;
    padding: 10px 75px;
  }
`;

export const ModalButton = styled.button`
z-index: 1;
position: absolute;
display: flex;
top: 16px;
right: 16px;
background-color: transparent;
border: 0;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: pointer;
  transform: scale(1.2);
  }
`;
