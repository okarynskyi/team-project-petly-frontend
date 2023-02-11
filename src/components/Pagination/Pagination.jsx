import * as React from 'react';
// import { useLocation } from 'react-router-dom';
import { PaginationNotice } from './PaginationNotice.styled';

const PaginationNotices = ({ page, totalPages, setSearch, search }) => {
  const fixPage = () => {
    if (page === null) {
      return 1;
    }
    return Number(page);
  };
  const fixedPage = fixPage();

  return (
    <PaginationNotice
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',
        marginBottom: '40px',
      }}
      count={totalPages}
      page={fixedPage}
      onChange={(e, value) => {
        search
          ? setSearch({ page: value, text: search })
          : setSearch({ page: value });

        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 1300);
      }}
      boundaryCount={1}
      // showFirstButton
      // showLastButton
      // size="large"
    />
  );
};

export default PaginationNotices;