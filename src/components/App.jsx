// import { lazy } from 'react';
import { HomePage } from '../pages/HomePage/HomePage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { OurFriendsPage } from '../pages/OurFriendsPage/OurFriendsPage';
import { NewsPage } from '../pages/NewsPage/NewsPage';
import { NoticesPage } from '../pages/NoticesPage/NoticesPage';
import { UserPage } from '../pages/UserPage/UserPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
// const OurFriendsPage = lazy(() => import('pages/OurFriendsPage/OurFriendsPage'));
// const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
// const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
// const UserPage = lazy(() => import('pages/UserPage/UserPage'));
// const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="notices/sell" element={<NoticesPage />} />

          <Route path="friends" element={<OurFriendsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} position="top-center" theme="colored" />
    </>
  );
};
