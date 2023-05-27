import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';
import { Spinner } from './Spinner';
import CreateListingPage from '../pages/CreateListingPage';

const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('../pages/HomePage'));
const SignInPage = lazy(() => import('../pages/SignInPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const ForgotPasswordPage = lazy(() => import('../pages/ForgotPasswordPage'));
const OffersPage = lazy(() => import('../pages/OffersPage'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));
const PrivateRoute = lazy(() => import('../components/PrivateRoute'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="offers" element={<OffersPage />} />
          <Route path="/create-listing" element={<CreateListingPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
