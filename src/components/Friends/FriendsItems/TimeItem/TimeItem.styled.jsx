import styled from 'styled-components';
import { device } from 'Device';
import { StyledListItem, StyledItemTitle } from '../FriendsItems.styled';

export const StyledTimeItem = styled.div`
  font-family: ${p => p.theme.fonts.main};
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: ${p => p.theme.colors.black};
`
export const StyledTimeWrapper = styled(StyledListItem)`
  position: relative;
  cursor: default;
`
export const StyledTimeTitle = styled(StyledItemTitle).attrs(props => ({
  color: props.isOpen ? '#FF6101' : '#000000',
}))`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs12};
  line-height: 16px;
  align-items: center;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${props => props.color};

  &:hover {
    color: ${p => p.theme.colors.hoverAccent};
  }

   @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.fs14};
    line-height: 19px;
  }

  @media ${device.desktop} {
    font-size: ${p => p.theme.fontSizes.fs16};
    line-height: 22px;
  }
`

export const StyledTimeBox = styled.p.attrs(props => ({
  color: props.isOpen ? '#FF6101' : '#000000',
}))`
  transition: color cubic: '250ms cubic-bezier(0.4, 0, 0.2, 1)';
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs12};
  line-height: 16px;
  align-items: center;
  height|: 38px;
  width: 138px;
  color: ${props => props.color};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${StyledTimeWrapper}:hover & {
    color: ${p => p.theme.colors.hoverAccent};
  }

  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.fs14};
    line-height: 19px;
  }

  @media ${device.desktop} {
    font-size: ${p => p.theme.fontSizes.fs16};
    line-height: 22px;
  }
`
export const StyledBoxWrapper = styled.div.attrs(props => ({
  opacity: props.isOpen ? '1' : '0',
  pointerEvents: props.isOpen ? 'unset' : 'none',
}))`  
  transition: opacity '250ms cubic-bezier(0.4, 0, 0.2, 1)';
  pointer-events: ${props => props.pointerEvents};
  opacity: ${props => props.opacity};
  position: absolute;
  min-width: 120px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: 1px solid #F59256;
  background-color: ${p => p.theme.colors.white};
  padding: 12px;
`