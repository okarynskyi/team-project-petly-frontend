import {
  Section,
  NewsH1,
  NewsForm,
  NewsInput,
  NewsListBox,
  NewsListItem,
  Line,
  NewsH2,
  NewsListText,
  Div,
  DataP,
  A,
} from './NewsPage.styled.jsx';

export const NewsPage = () => {
  return (
    <main>
      <Section>
        <NewsH1>News</NewsH1>
      <NewsForm>
        <NewsInput type="text" name="" autocomplete="off" placeholder="Search"/>
      </NewsForm>
          <NewsListBox>
            <NewsListItem >
              <div>
                <Line>
            </Line>
                <NewsH2>Обережно, кліщі! Як уберегти улюбленця</NewsH2>
                  <NewsListText>Травневі прогулянки з улюбленцем не лише
                    приємні, але й потребують пильності. З початком
                    теплої пори року активізуються кліщі, і треба бути
                    уважним, щоб уберегти свого песика чи котика від
                    дуже серйозних неприємностей зі здоров`ям.
                  </NewsListText>
                  <Div>
                    <DataP>20/02/2021</DataP>
                    <A href="" target="_blank">Read more</A>
                  </Div>
              </div>
            </NewsListItem>
        </NewsListBox>
        </Section>
    </main>
  );
};