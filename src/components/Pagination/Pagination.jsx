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
        marginTop: '20px',
        marginBottom: '20px',
      }}
      count={totalPages}
      page={fixedPage}
      onChange={(e, value) => {
        search
          ? setSearch({ page: value, text: search })
          : setSearch({ page: value });

        setTimeout(() => {window.scrollTo(0, 0)}, 1300);
      }}
      boundaryCount={1}
    />
  );
};

export default PaginationNotices;