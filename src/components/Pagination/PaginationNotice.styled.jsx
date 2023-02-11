import styled from 'styled-components';
import { Pagination } from '@mui/material';

export const PaginationNotice = styled(Pagination)`
  color: ${props => props.theme.colors.accent};
  .MuiPagination-ul {
    justify-content: center;
  }
  .MuiPaginationItem-page.Mui-selected {
    background-color: ${props => props.theme.colors.accent};
    
    box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 1);
    color: ${props => props.theme.colors.white};
    font-weight: 600;
    &:hover,
    &:focus {
            background-color: ${props => props.theme.colors.hoverAccent};
            color: ${props => props.theme.colors.white};

          }
   
  }
  &.MuiButtonBase-root {
    /* background-color: ${props => props.theme.colors.inputText}; */
  }
  &.MuiPagination-ul {
    color: ${props => props.theme.colors.white};
    /* background-color: ${props => props.theme.colors.inputText}; */
  }
 
`;