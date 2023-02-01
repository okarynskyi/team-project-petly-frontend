import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HomePage } from '../pages/HomePage/HomePage';
import { SharedLayout } from './SharedLayout';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader';
import { getAuthentication } from 'redux/auth/authSlice';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage/OurFriendsPage'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));

export const App = () => {
  const { isLoading } = useSelector(getAuthentication);

  return (
    <Suspense>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
  
            <Route path="register" element={
              <PublicRoute restricted redirectPath='/user'>
                <RegisterPage />
              </PublicRoute>
            } />
  
            <Route path="login" element={
              <PublicRoute restricted redirectPath='/user'>
                <LoginPage />
              </PublicRoute>
            } />
  
            <Route path="user" element={
              <PrivateRoute path="/login">
                <UserPage />
              </PrivateRoute>
            } />
            
            <Route path="friends" element={
              <PublicRoute>
                <OurFriendsPage />
              </PublicRoute>
            } />
  
            <Route path="news" element={
              <PublicRoute>
                <NewsPage />
              </PublicRoute>
            } />
  
            <Route path="notices/:categoryName" element={
              <PublicRoute>
                <NoticesPage />
              </PublicRoute>
            } />
  
          </Route>
  
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>  
      )}
      <ToastContainer autoClose={2000} position="top-center" theme="colored" />
    </Suspense>
  );
};
