import React from 'react';
import { PublicNav, Footer } from '../components/navigation';
import styles from './mainLayout.module.css';

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.headerWrapper}>
            <PublicNav />
          </div>
        </div>
      </header>
      <div className='mainContainer'>
        <div className='mainWrapper'>
          <main>{children}</main>
        </div>
      </div>
      <footer>
        <div className='footerContainer'>
          <div className='footerWrapper'>
            <Footer />
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainLayout;
