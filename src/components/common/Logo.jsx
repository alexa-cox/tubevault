import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { useNavigationHandler } from '../../hooks';
import { APP_NAME, scrollToSection } from '../../utils';
import EnhancedImage from './EnhancedImage';
import styles from './logo.module.css';
import { useLocation } from 'react-router-dom';

/**
 * @file Logo component with navigation and error handling
 * @module Logo
 * @see {@link logo.module.css} for associated styles
 */

/**
 * Logo Component
 * @component
 * @description Renders the application logo with navigation functionality and error handling.
 * Clicking or keyboard interaction returns user to homepage or scrolls to top if already on homepage.
 *
 * @param {Object} props - Component props
 * @param {number} [props.width=50] - Width applied to logo image
 * @param {number} [props.height] - Height applied to logo image, defaults to width
 * @param {string} [props.className] - Additional classes merged with .logo
 */

function Logo({ width = 50, height = width, className }) {
  const location = useLocation();

  // Custom navigation handler that checks current location
  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If already on home page, scroll to top
      scrollToSection('hero');
    } else {
      // If on another page, navigate to home
      window.location.href = '/';
    }
  };

  const { navigationProps } = useNavigationHandler({
    callback: handleLogoClick,
  });

  return (
    <div
      className={styles.logoWrapper}
      {...navigationProps}
      aria-label='Return to top of homepage'
    >
      <EnhancedImage
        src='/images/logo.svg'
        alt={`${APP_NAME} Logo`}
        width={width}
        height={height}
        className={classNames(styles.logo, className)}
        fallbackClassName={className}
      />
    </div>
  );
}

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

export default memo(Logo);
