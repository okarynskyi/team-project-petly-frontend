import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  selectIsGetCurrentUser,
  selectIsLoading,
} from 'redux/auth/authSelectors';
import { getCurrentUser } from 'redux/auth/authOperations';
import { SharedLayout } from './SharedLayout';
import { Loader } from './Loader';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';

const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const UserPage = lazy(() => import('pages/UserPage/UserPage'));
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage')
);
const HomePage = lazy(() => import('pages/HomePage/HomePage'));

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
        <Suspense>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
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
              <Route
                path="/news"
                element={
                  <PublicRoute>
                    <NewsPage />
                  </PublicRoute>
                }
              />
              <Route
                path="notices/:categoryName"
                element={
                  <PublicRoute>
                    <NoticesPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/friends"
                element={
                  <PublicRoute>
                    <OurFriendsPage />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
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
