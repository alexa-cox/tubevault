import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { useNavigationHandler } from '../../hooks';
import { ROLES, TAB_INDEXES } from '../../utils';
import EnhancedImage from './EnhancedImage';
import styles from './logo.module.css';
import { APP_NAME } from '../../utils';

/**
 * @file Logo component with navigation and error handling
 * @module Logo
 * @see {@link logo.module.css} for associated styles
 */

/**
 * Logo Component
 * @component
 * @description Renders the application logo with navigation functionality and error handling.
 * Clicking or keyboard interaction returns user to homepage. Falls back to placeholder if image fails to load.
 *
 * @param {Object} props - Component props
 * @param {number} [props.width=50] - Width applied to logo image
 * @param {number} [props.height] - Height applied to logo image, defaults to width
 * @param {string} [props.className] - Additional classes merged with .logo
 * @see {logo.module.css} .logoWrapper for container styles
 * @see {logo.module.css} .logo for image styles
 */

function Logo({ width = 50, height = width, className }) {
  const { navigationProps } = useNavigationHandler({ path: '/' });

  return (
    <div
      className={styles.logoWrapper}
      {...navigationProps}
      aria-label='Return to homepage'
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
