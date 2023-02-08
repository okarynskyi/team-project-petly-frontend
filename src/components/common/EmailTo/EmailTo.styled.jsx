import styled from 'styled-components';

export const BoxLink = styled.a`
  color: ${p => p.theme.colors.black};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    color: ${p => p.theme.colors.hoverAccent};
  }
`;
