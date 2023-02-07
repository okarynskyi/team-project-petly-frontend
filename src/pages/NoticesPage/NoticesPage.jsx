import { Outlet } from 'react-router-dom';
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoryList from '../../components/NoticesCategoriesList/NoticesCategoriesList';
import { SearchBar } from '../../components/NewsSearchBar/SearchBar';
import { Box, GlobalBox, Title, Wrapper } from './NoticesPage.styled';
import { Container } from 'components/common/Container.styled';
import { useState } from 'react';

import { useSearchParams } from 'react-router-dom';

const NoticesPage = () => {

  const [input, setInput] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handlerSearchSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: input });
    setSearchValue(input);
  };

  const handlerSearchReset = e => {
    e.preventDefault();
    setInput('');
    setSearchValue('');
    setSearchParams({ query: "" });
  };

  const handlerSearchInput = e => {
    setInput(e.target.value);
  };

  return (
    <GlobalBox>
      <Container>
      <Wrapper>
        <Box>
          <Title>Find your favorite pet</Title>
          <SearchBar
          value={input}
          onChange={handlerSearchInput}
          onSubmit={handlerSearchSubmit}
          onReset={handlerSearchReset}
          searchValue={searchValue.trim()}
          />
          <NoticesCategoriesNav /> 
        </Box>
          <NoticesCategoryList />
      </Wrapper>
        <Outlet />
        </Container>
    </GlobalBox>
    
  );
};

export default NoticesPage;