import styled from 'styled-components';
import { device } from 'Device';

export const StyledWrapper = styled.div`
  display: grid;
  gap: 12px;
  justify-content: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 32px 32px;
  }

  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;