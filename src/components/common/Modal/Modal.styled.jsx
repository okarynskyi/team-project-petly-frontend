import styled from 'styled-components';

export const ModalStyled = styled.div`
height: 100vh;
width: 100vw;
background-color: rgba(17, 17, 17, 0.6);
backdrop-filter: blur(10px);
position: fixed;
top: 0;
left: 0;
overflow-y: scroll;
overflow-x: hidden;
z-index: 1000;
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
  /* height: 400px;
  width: 600px; */
transform: scale(0.5);
transition: 0.5s all;
&.active {
  transform: scale(1);
}
`
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

`