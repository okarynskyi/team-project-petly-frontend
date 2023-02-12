import styled from 'styled-components';
import { Pagination } from '@mui/material';

export const PaginationNotice = styled(Pagination)`

  color: ${props => props.theme.colors.accent};
  .MuiPagination-ul {
    justify-content: center;
  };

  .MuiPaginationItem-page.Mui-selected {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
    box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 1);
    font-weight: 600;
    &:hover,
    &:focus {
            background-color: ${props => props.theme.colors.hoverAccent};
          }};

  .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root {
    color: ${props => props.theme.colors.accent};
    background-color: ${props => props.theme.colors.white};
    &:hover,
    &:focus {
            background-color: ${props => props.theme.colors.hoverAccent};
            color: ${props => props.theme.colors.white};
  }};
`