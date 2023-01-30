import styled from 'styled-components';

export const ModalStyled = styled.div`
height: 100vh;
width: 100vw;
background-color: rgba(17, 17, 17, 0.6);
backdrop-filter: blur(10px);
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
opacity: 0;
pointer-events: none;
transition: 0.5s;
&.active {
    opacity: 1;
    pointer-events: all;
  };
`
export const ModalStyledContent = styled.div`
  padding: 20px;
  border-radius: 40px;
  background-color: #FFFFFF;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  height: 400px;
  width: 600px;
transform: scale(0.5);
transition: 0.5s all;
&.active {
  transform: scale(1);
}
`
export const ModalButton = styled.button`
position: absolute;
display: flex;
top: 24px;
right: 24px;


`