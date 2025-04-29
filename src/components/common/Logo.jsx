/**
 * Logo Component
 * @component
 * @description Renders the application logo with navigation functionality and error handling.
 * Clicking or keyboard interaction returns user to homepage. Falls back to placeholder if image fails to load.
 *
 * @param {Object} props - Component props
 * @param {number} [props.width=50] - Width of the logo in pixels
 * @param {number} [props.height] - Height of the logo in pixels, defaults to width if not specified
 * @param {string} [props.className] - Additional CSS classes to apply to the logo
 *
 * @example
 * // Basic usage with default size
 * <Logo />
 *
 * // Custom size
 * <Logo width={100} height={75} />
 *
 * // With additional styling
 * <Logo className="header-logo" width={80} />
 *
 * @typedef {Object} LogoStyles
 * @property {string} logoWrapper - Container class for the logo button wrapper
 * @property {string} logo - Class for the logo image element
 *
 * @returns {React.ReactElement} A clickable logo component with error handling
 */

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { useNavigationHandler, useImageErrorHandler } from '../../hooks';
import { ROLES, TAB_INDEXES } from '../../utils';
import ImageFallback from './ImageFallback';
import styles from './logo.module.css';

function Logo({ width = 50, height = width, className }) {
  const { handleClick, handleKeyPress } = useNavigationHandler();
  const { hasError, handleImageError } = useImageErrorHandler();

  return (
    <div
      className={styles.logoWrapper}
      role={ROLES.BUTTON}
      tabIndex={TAB_INDEXES.FOCUSABLE}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      aria-label='Return to homepage'
    >
      {hasError ? (
        <ImageFallback
          width={width}
          height={height}
          className={className}
        />
      ) : (
        <img
          style={{ width, height }}
          className={classNames(styles.logo, className)}
          src='/images/logo.svg'
          alt='Tube Valut Logo'
          onError={handleImageError}
        />
      )}
    </div>
  );
}

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

export default memo(Logo);
