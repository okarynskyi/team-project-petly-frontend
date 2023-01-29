import styled from "styled-components";

export const Section = styled.section`
  background-color: ${p => p.theme.colors.background};
  width: 100%;
  height: 100%;
  padding: 42px 0 100px;
  @media screen and (min-width: 768px) {
    padding: 88px 0 100px;
  }
  @media screen and (min-width: 1280px) {
    padding: 60px 0 100px;
  }
`;

export const NewsH1 = styled.h1`
font-family: 'Manrope';
font-weight: 700;
font-size: ${props => props.theme.fontSizes.fs48};
line-height: 1.37;
color: #111111;
margin-top: 69px;
margin-bottom: 40px;
text-align: center;
`;

export const NewsForm = styled.form`
margin-bottom: 60px;
text-align: center;
`;
export const NewsInput = styled.input`
width: 608px;
height: 44px;
left: 336px;
top: 232px;
background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 20px;
border: none;
`;

export const NewsListBox = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const NewsListItem = styled.li`
width: 395px;
height: 254px;
padding-left: 16px;
`;

export const NewsH2 = styled.h2`
font-family: 'Manrope';
font-weight: 700;
font-size: ${props => props.theme.fontSizes.fs24};
line-height: 1.37;
color: #111111;
margin-top: 4px;
margin-bottom: 16px;
`;

export const NewsListText = styled.p`
font-family: 'Manrope';
font-weight: 400;
font-size: ${props => props.theme.fontSizes.fs16};
line-height: 1.37;
color: #111321;
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

export const DataP = styled.p`
height: 22px;
`;

