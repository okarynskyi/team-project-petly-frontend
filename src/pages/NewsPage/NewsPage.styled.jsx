import styled from 'styled-components';
import { device } from 'Device';

export const Section = styled.section`
  background-color: ${p => p.theme.colors.background};
  width: 100%;
  height: 100%;
  padding: 42px 0 100px;
  @media ${device.tablet} {
    padding: 88px 0 100px;
  }
  @media ${device.desktop} {
    padding: 60px 0 100px;
  }
`;

export const NewsH1 = styled.h1`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw700};
  font-size: ${p => p.theme.fontSizes.fs24};
  line-height: 1.37;
  color: ${p => p.theme.colors.mainText};
  margin-bottom: 28px;
  text-align: center;

  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.fs48};
    margin-bottom: 40px;
  }
`;

export const NewsListBoxUl = styled.ul`
  display: grid;
  gap: 40px;
  justify-content: center;
  margin-top: 40px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 32px 60px;
    margin-top: 60px;
  }

  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }
`;

export const Line = styled.div`
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;

  @media ${device.tablet} {
    width: 280px;
    height: 8px;
  }

  @media ${device.desktop} {
    width: 340px;
    height: 8px;
  }
`;

export const NewsH2 = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw700};
  font-size: ${p => p.theme.fontSizes.fs24};
  line-height: 1.37;
  color: ${p => p.theme.colors.mainText};
  margin-top: 4px;
  margin-bottom: 16px;
  height: 66px;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const NewsListText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw400};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 1.37;
  color: ${p => p.theme.colors.newsText};
  height: 174px;
  margin-bottom: 22px;
  -webkit-line-clamp: 8;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${device.tablet} {
    height: 130px;
    margin-bottom: 42px;
    -webkit-line-clamp: 6;
  }

  @media ${device.desktop} {
    height: 110px;
    -webkit-line-clamp: 5;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DataP = styled.p`
  height: 22px;
`;

export const A = styled.a`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 1.37;
  color: ${p => p.theme.colors.accent};
  text-decoration: underline;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus  {
    color: ${p => p.theme.colors.hoverAccent};
  }
`;
