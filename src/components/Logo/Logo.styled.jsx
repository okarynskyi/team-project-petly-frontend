import styled from 'styled-components';

export const LogoStyled = styled.p`
  display: inline-block;
  font-family: ${p => p.theme.fonts.logo};
  font-weight: ${p => p.theme.fontWeights.fw700};
  font-size: ${p => p.theme.fontSizes.fs28};
  line-height: 1.5;
  letter-spacing: 0.07em;
  color: ${p => p.theme.colors.mainText};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.fs32};
  }
`;

export const LogoAccentStyled = styled.span`
  color: ${p => p.theme.colors.accent};
`;
