import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';
import { Logo } from '../common';

const PublicNav = () => {
  return (
    <nav>
      <div className={styles.navContainer}>
        <div className={styles.navWrapper}>
          <Logo />
          <div className={styles.navLinksWrapper}>
            <NavLink
              className={`${styles.navLink} ${styles.publicNavLink}`}
              to='/gallery'
            >
              Gallery
            </NavLink>
            <NavLink
              className={`${styles.navLink} ${styles.publicNavLink}`}
              to='/profile'
            >
              Profile
            </NavLink>
            <NavLink
              className={`${styles.navLink} ${styles.publicNavLink}`}
              to='/auth/login'
            >
              Login
            </NavLink>
            <NavLink
              className={`${styles.navLink} ${styles.publicNavLink}`}
              to='/auth/register'
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PublicNav;
