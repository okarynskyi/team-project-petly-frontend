import styled from "styled-components";

export const NewsH1 = styled.h1`
font-size: ${props => props.theme.fontSizes.fs48};
margin-bottom: 144px;
text-align
`;

export const H2 = styled.h2`

`;

export const NewsListBox = styled.ul`
  margin-top: 20px;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const NewsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc((100% - 60px) / 4);
`;

export const NewsListText = styled.p`
  margin-top: 16px;
  margin-bottom: 40px;
`;

export const Div = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;