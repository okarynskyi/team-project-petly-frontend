import { Outlet } from 'react-router-dom';
import FilterNoticesButton from '../../components/FilterNoticesButton/FilterNoticesButton';
import NoticesCategoryList from '../../components/NoticesCategoriesList/NoticesCategoriesList';
import { SearchBar } from '../../components/NoticesSearchBar/SearchBar';
import { Box, GlobalBox, Title, Wrapper } from './NoticesPage.styled';
// import { useDispatch } from 'react-redux';

const NoticesPage = () => {

  // const dispatch = useDispatch();

  return (
    <GlobalBox>
      <Wrapper>
        <Box>
          <Title>Find your favorite pet</Title>
          <SearchBar
          // submitForm={search} 
          />
          <FilterNoticesButton /> 
        </Box>
        <NoticesCategoryList />
      </Wrapper>
      <Outlet />
    </GlobalBox>
  );
};

export default NoticesPage;