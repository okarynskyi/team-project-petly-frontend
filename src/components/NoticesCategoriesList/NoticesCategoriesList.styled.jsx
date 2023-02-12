import styled from 'styled-components';
import { device } from 'Device';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
`;

export const List = styled.ul`
  margin-left: 16px;
  margin-right: 16px;
  display: grid;
  gap: 32px;
  justify-content: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr; 
    gap: 32px;
  }

  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 32px;
  }
`
export const NotFound = styled.img`
  margin-left: auto;
  margin-right: auto;
  max-width: 230px;
  
  @media ${device.tablet} {
    max-width: 250px;
  };

  @media ${device.desktop} {
    max-width: 300px;
  };
`

export const Cat = styled.div`
    width: 90px;
    bottom: -33%;
    position: relative;
    animation: walk 7s linear infinite;

    > img {
      width: 90px;
    }

    @media ${device.tablet} {
      width: 300px;
    bottom: -50%;
    animation: walk 15s linear infinite;

    > img {
      width: 120px;
    }
  };

  @media ${device.desktop} {
    bottom: -57%;

    > img {
      width: 150px;
    }
  };
  
    

@keyframes walk {
  0%, 100% { 
    left: 0;    
    transform: translatex(-50%) scalex(1); 
  }
   49% { 
    left: 88%;
    transform: translatex(-50%) scalex(1); 
  }
    50% { 
     left: 88%; 
     transform: translatex(-50%) scalex(-1);  
  }
     99% { 
      left: 0;   
      transform: translatex(-50%) scalex(-1);      
    }
  }
`

export default List;