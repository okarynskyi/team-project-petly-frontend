import {
  NewsH1,
  H2,
  NewsListBox,
  NewsListItem,
  NewsListText,
  Div,
 
} from './NewsPage.styled.jsx';

export const NewsPage = () => {
  return (
    <main>
      <NewsH1>News</NewsH1>
      
    <form  id="search-form">
      <input "
      type="text" name="searchQuery"
      autocomplete="off"
        placeholder="Search"
        />
    </form>
        <NewsListBox>
          <NewsListItem >
            <div>
              <div>
                тут должен быть градиент
              </div>
              <H2>Обережно, кліщі! Як уберегти улюбленця</H2>
                <NewsListText>Травневі прогулянки з улюбленцем не лише
                  приємні, але й потребують пильності. З початком
                  теплої пори року активізуються кліщі, і треба бути
                  уважним, щоб уберегти свого песика чи котика від
                  дуже серйозних неприємностей зі здоров`ям.
                </NewsListText>
                <Div>
                  <p>20/02/2021</p>
                  <a href="" target="_blank">Read more</a>
                </Div>
            </div>
          </NewsListItem>
        </NewsListBox>
    </main>
  );
};
