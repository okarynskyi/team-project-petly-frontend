import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
