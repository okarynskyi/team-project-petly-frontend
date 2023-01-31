import styled from 'styled-components';

// Оскільки ширина кнопок на макетах різна, при використанні компонента кнопки в своєму компоненті ОБОВ'ЯЗКОВО передавайте пропс size з шириною вашої кнопки, вона автоматично буде передана в min-width. Наприклад <StyledButton size="180px">Cancel</StyledButton>

export const StyledButton = styled.button`
  padding: 8px 41px;
  min-width: ${props => props.size};
  background-color: ${props => props.theme.colors.background};
  border: ${props => props.theme.borders.main};
  border-radius: ${props => props.theme.radii.br40};
  font-size: ${props => props.theme.fontSizes.fs20};
  line-height: 1.35;
  transition: color 250ms linear, border 250ms linear;

  &:hover,
  &:focus {
    border: ${props => props.theme.borders.accent};
    color: ${props => props.theme.colors.hoverAccent};
    cursor: pointer;
  }
`;

export const AccentButton = styled(StyledButton)`
  background-color: ${props => props.theme.colors.accent};
  min-width: ${props => props.size};
  color: ${props => props.theme.colors.white};
  border: none;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    border: none;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.hoverAccent};
  }
`;
