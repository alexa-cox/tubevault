import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../common';
import styles from './nav.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <div className={`${styles.navLinksWrapper} ${styles.mainLinks}`}>
          <NavLink
            className={`${styles.navLink} ${styles.footerNavLink}`}
            to='/gallery'
          >
            Gallery
          </NavLink>
          <NavLink
            className={`${styles.navLink} ${styles.footerNavLink}`}
            to='/profile'
          >
            Profile
          </NavLink>
          <NavLink
            className={`${styles.navLink} ${styles.footerNavLink}`}
            to='/auth/login'
          >
            Login
          </NavLink>
          <NavLink
            className={`${styles.navLink} ${styles.footerNavLink}`}
            to='/auth/register'
          >
            Register
          </NavLink>
        </div>
        <div className={`${styles.navLinksWrapper} ${styles.legalLinks}`}>
          <NavLink
            className={`${styles.navLink} ${styles.footerNavLink}`}
            to='/privacy'
          >
            Privacy Policy
          </NavLink>
          <NavLink
            className={`${styles.navLink} ${styles.footerNavLink}`}
            to='/terms'
          >
            Terms of Use
          </NavLink>
          <NavLink
            className={`${styles.navLink} ${styles.footerNavLink}`}
            to='/disclaimer'
          >
            Disclaimer
          </NavLink>
          <NavLink
            className={`${styles.navLink} ${styles.footerNavLink}`}
            to='/ccpa'
          >
            CCPA
          </NavLink>
          <NavLink
            className={`${styles.navLink} ${styles.footerNavLink}`}
            to='/donotsell'
          >
            Do Not Sell My Personal Information
          </NavLink>
        </div>
        <div className={styles.copyrightWrapper}>
          <p>© {currentYear} Alexandria Cox. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
