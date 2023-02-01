import { useState, useEffect } from 'react';
import { getNews } from 'services/apiService.js';
import { Container } from 'components/common/Container.styled.jsx';
// import { SearchBar } from 'components/NewsSearchBar/SearchBar';
import { SearchBar } from '../../components/NoticesSearchBar/SearchBar';
import {
  Section,
  NewsH1,
  // NewsForm,
  // NewsInput,
  // NewsButton,
  NewsListBoxUl,
  Line,
  NewsDiv,
  NewsH2,
  NewsListText,
  Div,
  DataP,
  A,
} from './NewsPage.styled.jsx';

const NewsPage = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    getNews().then(data => data.data).then(results => {
    setNews(results.news);
  // console.log(news);
      });
  }, [news]);
  
  function dateConverter(utcDate) {
    const date = new Date(utcDate);
    const day = date.getDay().toString().padStart(2, "0");
    const month = date.getMonth().toString().padStart(2, "0");
    const year = date.getFullYear();
    const convertedDate = [day, month, year].join('/');
    return convertedDate;
  }

  return (
    <main>
      <Section>
        <Container>
          <NewsH1>News</NewsH1>
          <SearchBar
            // submitForm={search} 
          />
            {/* <NewsForm>
              <NewsInput type="text" name="" autocomplete="off" placeholder="Search"/>
              <NewsButton type="submit">
                  <img src=""
                  alt="search"
                   />
              </NewsButton>
            </NewsForm> */}
            {news && (<NewsListBoxUl>
            {news.map(item => (
                <li key={item._id}>
                <Line></Line>
                  <NewsDiv>
                    <NewsH2>{item.title}</NewsH2>
                    <NewsListText>{item.description}</NewsListText>
                  </NewsDiv>
                  <Div>
                    <DataP>{dateConverter(item.date)}</DataP>
                    <A href={item.url} target="_blank" >Read more </A>
                  </Div>
              </li>
              ))};
            </NewsListBoxUl>)}

        </Container>
      </Section>
    </main>
  );
};

export default NewsPage;

