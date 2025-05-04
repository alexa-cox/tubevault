import React from 'react';
import { NavLink } from 'react-router-dom';
import { COPYRIGHT_STATEMENT, DISCLAIMER } from '../../utils';
import { Logo } from '../common';
import styles from './nav.module.css';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTopWrapper}>
        <div className={styles.footerLogoColumn}>
          <Logo width={100} />
          <p className={styles.logoDescription}>
            Your personal, distraction-free YouTube gallery
          </p>
        </div>
        <div className={styles.footerLinksWrapper}>
          <div className={styles.footerNavColumn}>
            <h6 className={styles.footerHeader}>Tube Vault</h6>
            <ul className={styles.footerLinkList}>
              <li>
                <NavLink
                  to='/gallery'
                  className={styles.footerLink}
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/profile'
                  className={styles.footerLink}
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/auth/login'
                  className={styles.footerLink}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/auth/register'
                  className={styles.footerLink}
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.footerLegalColumn}>
            <h6 className={styles.footerHeader}>Legal</h6>
            <ul className={styles.footerLinkList}>
              <li>
                <NavLink
                  to='/privacy'
                  className={styles.footerLink}
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/terms'
                  className={styles.footerLink}
                >
                  Terms of Use
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/disclaimer'
                  className={styles.footerLink}
                >
                  Disclaimer
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/ccpa'
                  className={styles.footerLink}
                >
                  CCPA
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/ccpa-do-not-sell'
                  className={styles.footerLink}
                >
                  Do Not Sell My Personal Information
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.footerResourcesColumn}>
            <h6 className={styles.footerHeader}>Resources</h6>
            <ul className={styles.footerLinkList}>
              <li>
                <a
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.footerLink}
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.footerLink}
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href='https://medium.com/@alexa-cox'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.footerLink}
                >
                  Medium
                </a>
              </li>
              <li>
                <a
                  href='https://www.alexandriataylorcox.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.footerLink}
                >
                  My Portfolio
                </a>
              </li>
              <li>
                <a
                  href='https://www.youtube.com/watch?v=rEa99-NQ9Bk'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.footerLink}
                >
                  Inspo Tutorial
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottomWrapper}>
        <p>{COPYRIGHT_STATEMENT}</p>
        <p>{DISCLAIMER}</p>
      </div>
    </div>
  );
}

export default Footer;
