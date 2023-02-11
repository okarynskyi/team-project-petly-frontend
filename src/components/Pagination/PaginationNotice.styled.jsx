import styled from 'styled-components';
import { Pagination } from '@mui/material';

export const PaginationNotice = styled(Pagination)`
  color: ${p => p.theme.colors.accent};
  .MuiPagination-ul {
    justify-content: center;
  }
  .MuiPaginationItem-page.Mui-selected {
    background-color: ${p => p.theme.colors.accent};
    box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 1);
    color: ${p => p.theme.colors.white};
    font-weight: 600;
  }
  .MuiPaginationItem-page.Mui-selected:hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  &.MuiButtonBase-root {
    background-color: ${p => p.theme.colors.accent};
  }
  &.MuiPagination-ul {
    color: ${p => p.theme.colors.white};
  }
  /* [aria-label='Go to first page'],
  [aria-label='Go to previous page'],
  [aria-label='Go to next page'],
  [aria-label='Go to last page'] {
    background-color: ${p => p.theme.colors.accent};
  }
  [aria-label='Go to first page']:hover,
  [aria-label='Go to previous page']:hover,
  [aria-label='Go to next page']:hover,
  [aria-label='Go to last page']:hover {
    background-color: ${p => p.theme.colors.accent};
  } */
`;