import styled from 'styled-components';

export const ModalStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.4);
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
  border-radius: 12px;
  background-color: white;
  height: 400px;
  width: 600px;
transform: scale(0.5);
transition: 0.5s all;
&.active {
  transform: scale(1);
}
`
