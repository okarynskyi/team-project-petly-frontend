import { Outlet } from 'react-router-dom';
import FilterNoticesButton from '../../components/FilterNoticesButton/FilterNoticesButton';
import NoticesCategoryList from '../../components/NoticesCategoriesList/NoticesCategoriesList';
import { SearchBar } from '../../components/NoticesSearchBar/SearchBar';
import { Box, GlobalBox, Title, Wrapper } from './NoticesPage.styled';
import { Container } from 'components/common/Container.styled';
// import { useDispatch } from 'react-redux';
// import operations from 'redux/notices/noticesOperations';

const NoticesPage = () => {

  // const dispatch = useDispatch();

  // const searchPets = query => {
  //   dispatch(operations.getByQuery(query));
  // };

  return (
    <GlobalBox>
      <Container>
      <Wrapper>
        <Box>
          <Title>Find your favorite pet</Title>
          <SearchBar
          // submitForm={searchPets}
          />
          <FilterNoticesButton /> 
        </Box>
          <NoticesCategoryList />
      </Wrapper>
        <Outlet />
        </Container>
    </GlobalBox>
    
  );
};

export default NoticesPage;