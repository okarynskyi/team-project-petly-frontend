import {
  H1,
  H2,
  NewsListBox,
  NewsListItem,
  NewsListText,
  Div,
 
} from './NewsPage.styled.jsx';

export const NewsPage = () => {
  return (
    <main>
      <H1>News</H1>
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
