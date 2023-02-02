import styled from 'styled-components';
import { device } from 'Device';
import { AccentButton } from 'components/common/StyledButton/StyledButton.styled';

export const LogoutBtn = styled.button`
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.fw500};
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.inputText};
  background-color: transparent;
  border: none;
  position: absolute;
  right: 0;
  bottom: -66px;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[1]}px;
  margin-left: auto;
  margin-right: 6px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.accent};
    border-radius: ${props => props.theme.radii.br40};
  }
  @media ${device.tablet} {
    left: 20px;
    bottom: 0;
    right: auto;
  }
`;
export const WrapperQuit = styled.div`
  width: 240px;
  height: 240px;
  padding: 15px;
  font-size: 24px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media ${device.tablet} {
  }
`;
export const ButtonQuit = styled(AccentButton)`
  min-width: 60px;
  padding: 10px 15px;
  @media ${device.tablet} {
  }
`;
