import { NotFoundImg, Cat } from './NotFound.styled';
import notFound from 'staticImages/notice/notFound.jpg';
import catgif from 'staticImages/catgif.gif';

const NotFound = () => {
  return (
    <>
      <NotFoundImg src={notFound} alt="defaut" />
      <Cat>
        <img alt="walking cat" src={catgif} />
      </Cat>
    </>
  );
};

export default NotFound;
