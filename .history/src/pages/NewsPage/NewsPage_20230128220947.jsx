import {
  newsListBox,
 
} from './NewsPage.styled.jsx';

export const NewsPage = () => {
  return (
    <main>
      <h1>News</h1>
        <newsListBox>
          <li>
            <div>
              <div>
                тут 
              </div>
              <h2>Обережно, кліщі! Як уберегти улюбленця</h2>
                <p>Травневі прогулянки з улюбленцем не лише
                  приємні, але й потребують пильності. З початком
                  теплої пори року активізуються кліщі, і треба бути
                  уважним, щоб уберегти свого песика чи котика від
                  дуже серйозних неприємностей зі здоров`ям.
                </p>
                <div>
                  <p>20/02/2021</p>
                  <a href="" target="_blank">Read more</a>
                </div>
            </div>
          </li>
        </newsListBox>
    </main>
  );
};
