import styled from 'styled-components';
import { device } from 'Device';

export const StyledItem = styled.div`
  width: 100%
  min-height: 192px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.br20};

  @media ${device.tablet} {
    min-height: 246px;
  }

  @media ${device.desktop} {
    min-height: 287px;
  }
`

export const StyledTitle = styled.a`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw700};
  font-size: ${p => p.theme.fontSizes.fs12};
  line-height: 16px;
  text-align: center;
  margin-bottom: 12px;
  text-decoration: underline;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: ${p => p.theme.colors.accent};

  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.fs16};
    line-height: 22px;
    margin-bottom: 16px;
  }

  @media ${device.desktop} {
    line-height: 27px;
  }
`

export const StyledWrapper = styled.div`
  display: flex;
`

export const ImgWrapper = styled.div`
  min-width: 110px;
  margin-right: 12px;

  @media ${device.tablet} {
    min-width: 120px;
    margin-right: 14px;
  }

  @media ${device.desktop} {
    min-width: 158px;
    margin-right: 16px;
  }
`
export const StyledImg = styled.img`
  width: 110px;
  object-position: center;

  @media ${device.tablet} {
    width: 120px;
  }

  @media ${device.desktop} {
    width: 158px;
  }
`
export const StyledList = styled.ul``;

export const StyledListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`

export const StyledItemTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs12};
  line-height: 16px;
  align-items: center;
  color: ${p => p.theme.colors.mainText};

  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.fs14};
    line-height: 19px;
  }

  @media ${device.desktop} {
    font-size: ${p => p.theme.fontSizes.fs16};
    line-height: 22px;
  }
`