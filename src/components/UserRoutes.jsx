// import { lazy, Suspense } from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import OffersPage from '../pages/OffersPage';
import PageNotFound from '../pages/PageNotFound';

// const Layout = lazy(() => import('./Layout/Layout'));
// const HomePage = lazy(() => import('../pages/HomePage'));
// const ProfilePage = lazy(() => import('../pages/ProfilePage'));
// const SignInPage = lazy(() => import('../pages/SignInPage'));
// const SignUpPage = lazy(() => import('../pages/SignUpPage'));
// const ForgotPasswordPage = lazy(() => import('../pages/ForgotPasswordPage'));
// const OffersPage = lazy(() => import('../pages/OffersPage'));
// const PageNotFound = lazy(() => import('../pages/PageNotFound'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="offers" element={<OffersPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
