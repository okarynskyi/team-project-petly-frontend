import styled from "styled-components";
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
margin-top: 69px;
margin-bottom: 40px;
text-align: center;

@media ${device.tablet} {
  font-size: ${p => p.theme.fontSizes.fs48}; 
  }
`;

// export const NewsForm = styled.form`
// text-align: center;
// `;

// export const NewsInput = styled.input`
// width: 280px;
// height: 40px;
// background-color: ${p => p.theme.colors.white};
// box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
// border-radius: 20px;
// border: none;
// padding: 0 12px;
// margin-bottom: 40px;

// @media ${device.tablet} {
//   width: 608px;
//   height: 44px;
//   padding: 0 20px;
//   margin-bottom: 60px;
//   }

// @media ${device.desktop} {
//   width: 608px;
//   height: 44px;
//   }
// `;

// export const NewsButton = styled.button`
//  width: 40px;
//   height: 40px;
//   border-radius: 20px;
// `;

export const NewsListBoxUl = styled.ul`
  display: grid;
  gap: 40px;
  justify-content: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 32px 60px;
  }

  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }
`;


export const Line = styled.div`
width: 200px;
height: 4px;
background: linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%);
border-radius: 40px;

@media ${device.tablet} {
  width: 280px;
  height: 8px;
  }

@media ${device.desktop}{
  width: 340px;
  height: 8px;
  }
`;

export const NewsDiv = styled.div`
width: 280px;
height: 300px;
overflow: hidden;
margin-bottom: 20px;

@media ${device.tablet} {
  width: 336px;
  height: 276px;
  margin-bottom: 40px;
  }
  
@media ${device.desktop}{
  width: 395px;
  height: 254px;
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
`;

export const NewsListText = styled.p`
font-family: ${p => p.theme.fonts.main};
font-weight: ${p => p.theme.fontWeights.fw400};
font-size: ${p => p.theme.fontSizes.fs16};
line-height: 1.37;
color: ${p => p.theme.colors.newsText};
margin-bottom: 40px;
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
`;