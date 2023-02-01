import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsGetCurrentUser,
  selectIsLoading,
} from '../redux/auth/authSelectors';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { SharedLayout } from './SharedLayout';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader';
import { getCurrentUser } from '../redux/auth/authOperations';
import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';
import NoticesCategoryList from '../components/NoticesCategoriesList/NoticesCategoriesList';
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const OurFriendsPage = lazy(() =>
  import('../pages/OurFriendsPage/OurFriendsPage')
);
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsGetCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    !isFetchingCurrentUser && (
      <>
        <SharedLayout />
        <Suspense>
          <Routes>
            <Route index element={<HomePage />} />
            <Route
              path="/news"
              element={
                <PublicRoute>
                  <NewsPage />
                </PublicRoute>
              }
            />

            <Route path="/notices" element={<NoticesPage />}>
              <Route index path="sell" element={<NoticesCategoryList />} />
              <Route path="lost-found" element={<NoticesCategoryList />} />
              <Route path="in-good-hands" element={<NoticesCategoryList />} />
            </Route>
            <Route
              path="/friends"
              element={
                <PublicRoute>
                  <OurFriendsPage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/user"
              element={
                <PrivateRoute>
                  <UserPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<p>Page not found.</p>} />
          </Routes>
        </Suspense>
        <ToastContainer
          autoClose={2000}
          position="top-center"
          theme="colored"
        />
      </>
    )
  );
};
