import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
// import { Footer } from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-auto">
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
