import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spinner } from './Spinner';
import ProfilePage from '../pages/ProfilePage';
import CreateListingPage from '../pages/CreateListingPage';
import EditListingPage from '../pages/EditListingPage';
import ListingPage from '../pages/ListingPage';
import Category from '../pages/Category';

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
          <Route
            path="/category/:categoryName/:listingId"
            element={<ListingPage />}
          />
          <Route path="offers" element={<OffersPage />} />
          <Route path="category/:categoryName" element={<Category />} />
          <Route path="create-listing" element={<PrivateRoute />}>
            <Route path="/create-listing" element={<CreateListingPage />} />
          </Route>
          <Route path="edit-listing" element={<PrivateRoute />}>
            <Route
              path="/edit-listing/:listingId"
              element={<EditListingPage />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
