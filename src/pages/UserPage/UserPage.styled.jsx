import styled from 'styled-components';
import { device } from 'Device';

export const TitleSectionUser = styled.h2`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.fw500};
  font-size: ${props => props.theme.fontSizes.fs20};
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.black};
  margin-bottom: ${props => props.theme.space[2]}px; //18 было
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs28};
    line-height: 38px;
    color: ${props => props.theme.colors.mainText};
    margin-bottom: ${props => props.theme.space[5]}px;
  }
  @media ${device.desktop} {
    margin-bottom: 24px;
  }
`;

export const SectionUser = styled.section`
  padding-top: 60px;
  padding-bottom: 80px;

  @media ${device.tablet} {
    padding-top: 88px;
    padding-bottom: 100px;
  }
  @media ${device.desktop} {
    padding-top: 70px;
    padding-bottom: 40px;
  }
`;
export const WrapperDesctop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: ${props => props.theme.space[5]}px;
  @media ${device.desktop} {
    flex-direction: row;
  }
`;
