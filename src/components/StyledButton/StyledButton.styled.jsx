import styled from 'styled-components';

// Оскільки ширина кнопок на макетах різна, при використанні компонента кнопки в своєму компоненті ОБОВ'ЯЗКОВО передавайте пропс size з шириною вашої кнопки, вона автоматично буде передана в min-width. Наприклад <StyledButton size="180px">Cancel</StyledButton>

export const StyledButton = styled.button`
  padding: 8px 41px;
  min-width: ${props => props.size};
  background-color: ${props => props.theme.colors.background};
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 40px;
  font-size: 20px;
  line-height: 1.35;
`;

export const AccentButton = styled(StyledButton)`
  background-color: ${props => props.theme.colors.accent};
  min-width: ${props => props.size};
  color: #ffff;
`;
