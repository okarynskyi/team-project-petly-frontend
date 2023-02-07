import styled from 'styled-components';
import { device } from 'Device';

export const Wrapper = styled.div`
margin-left: auto;
  margin-right: auto;
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
  max-width: 500px;
`
  ;

export default List;