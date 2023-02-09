import { useState, useEffect } from 'react';
import { getNews } from 'services/apiService.js';
import { Container } from 'components/common/Container.styled.jsx';
import {
  Section,
  NewsH1,
  NewsListBoxUl,
  Line,
  NewsH2,
  NewsListText,
  Div,
  DataP,
  A,
} from './NewsPage.styled.jsx';
import { SearchBar } from '../../components/common/SearchBar/SearchBar';
import { dateConverter } from 'helpers/formatDate.js';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getNews()
      .then(data => data.data)
      .then(results => {
        setNews(results.news);
      });
  }, []);

  const handlerSearchInput = e => {
    setInputValue(e.target.value);
  };

  const handlerSearchSubmit = e => {
    e.preventDefault();
    setSearchValue(inputValue);
  };

  const handlerSearchReset = e => {
    e.preventDefault();
    setInputValue('');
    setSearchValue('');
  };

  const filtredNews = news.filter(({ title }) =>
    title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <main>
      <Section>
        <Container>
          <NewsH1>News</NewsH1>
          <SearchBar
            value={inputValue}
            onChange={handlerSearchInput}
            onSubmit={handlerSearchSubmit}
            onReset={handlerSearchReset}
            searchValue={searchValue.trim()}
          />
          {filtredNews && (
            <NewsListBoxUl>
              {filtredNews.map(item => (
                <li key={item._id}>
                  <Line></Line>
                  <NewsH2>{item.title}</NewsH2>
                  <NewsListText>{item.description}</NewsListText>
                  <Div>
                    <DataP>{dateConverter(item.date)}</DataP>
                    <A href={item.url} target="_blank">
                      Read more{' '}
                    </A>
                  </Div>
                </li>
              ))}
            </NewsListBoxUl>
          )}
        </Container>
      </Section>
    </main>
  );
};

export default NewsPage;
