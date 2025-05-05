import React from 'react';
import Footer from '../components/Navigation/Footer';
import PublicNav from '../components/Navigation/PublicNav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <header>
        <PublicNav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
