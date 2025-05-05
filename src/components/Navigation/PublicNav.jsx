import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSectionObserver } from '../../hooks/useSectionObserver';
import { HOME_SECTIONS } from '../../utils/appConstants';
import { scrollToSection } from '../../utils/scrollUtils';
import Button from '../common/Button';
import Logo from '../common/Logo';
import styles from './nav.module.css';

/**
 * Helper component for section navigation links
 * @param {Object} props - Component props
 * @param {string} props.section - Section ID to link to
 * @param {string} props.label - Display text for the link
 * @param {string} props.activeSection - Currently active section
 * @param {Function} [props.onMobileClick] - Optional callback for mobile menu
 */
const SectionLink = ({ section, label, activeSection, onMobileClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleClick = (event) => {
    event.preventDefault();

    if (isHomePage) {
      // If on home page, use the existing scrollToSection helper
      scrollToSection(section);
    } else {
      // If on another page, navigate to home with section anchor
      window.location.href = `/#${section}`;
    }

    // Call the mobile click handler if provided
    if (onMobileClick) onMobileClick();
  };

  return (
    <a
      className={classNames(styles.navLink, styles.publicNavLink, {
        [styles.activeLink]: isHomePage && activeSection === section,
      })}
      href={`#${section}`}
      onClick={handleClick}
    >
      {label}
    </a>
  );
};

/**
 * Public navigation component for the landing page
 * Includes section links and authentication options
 * Responsive with hamburger menu for mobile
 */
const PublicNav = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const activeSection = isHomePage ? useSectionObserver(HOME_SECTIONS) : null;
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={classNames(styles.navBar, styles.publicNavBar)}>
      <div className={styles.navContainer}>
        <div className={styles.navWrapper}>
          <Logo />

          {/* Desktop Navigation */}
          <div className={styles.navLinksWrapper}>
            <SectionLink
              section='features'
              label='Features'
              activeSection={activeSection}
            />
            <SectionLink
              section='how-it-works'
              label='How It Works'
              activeSection={activeSection}
            />
            <SectionLink
              section='pricing'
              label='Pricing'
              activeSection={activeSection}
            />
            <SectionLink
              section='faq'
              label='FAQ'
              activeSection={activeSection}
            />
          </div>

          <div className={styles.authLinksWrapper}>
            <NavLink
              className={classNames(styles.navLink, styles.publicNavLink)}
              to='/auth/login'
            >
              Login
            </NavLink>
            <Button
              as={NavLink}
              to='/auth/register'
              size='small'
              className={styles.signUpButton}
            >
              Sign Up
            </Button>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <div
              className={classNames(styles.hamburger, {
                [styles.open]: menuOpen,
              })}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={classNames(styles.mobileMenu, {
          [styles.mobileMenuOpen]: menuOpen,
        })}
      >
        <SectionLink
          section='features'
          label='Features'
          activeSection={activeSection}
          onMobileClick={closeMenu}
        />
        <SectionLink
          section='how-it-works'
          label='How It Works'
          activeSection={activeSection}
          onMobileClick={closeMenu}
        />
        <SectionLink
          section='pricing'
          label='Pricing'
          activeSection={activeSection}
          onMobileClick={closeMenu}
        />
        <SectionLink
          section='faq'
          label='FAQ'
          activeSection={activeSection}
          onMobileClick={closeMenu}
        />

        <div className={styles.authLinksWrapper}>
          <NavLink
            className={classNames(styles.navLink, styles.authLink)}
            to='/auth/login'
            onClick={closeMenu}
          >
            Login
          </NavLink>
          <Button
            as={NavLink}
            to='/auth/register'
            size='medium'
            className={styles.signUpButton}
            onClick={closeMenu}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default PublicNav;
