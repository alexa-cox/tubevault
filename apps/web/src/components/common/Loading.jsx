import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';
import { ROLES } from '../../utils/a11y';
import {
  ANIMATION_SPEED,
  DEFAULT_DELAY,
  LOADING_TEXT,
  SPINNER_SIZES,
  SPINNER_VARIANTS,
} from './loading.constants';
import styles from './loading.module.css';

/**
 * @file Loading spinner component with customizable animations
 * @module Loading
 * @requires loading.constants
 * @see {@link loading.module.css} for styling implementation
 */

/**
 * Loading spinner component with customizable size, variant, and animation
 * @component
 * @param {Object} props
 * @param {SPINNER_SIZES} [props.size] - Controls .spinner--small or .spinner--large classes
 * @param {SPINNER_VARIANTS} [props.variant] - Applies .spinner--dots for dots variant
 * @param {string} [props.className] - Additional classes for .container
 * @param {string} [props.color] - Sets --spinner-color CSS variable
 * @param {ANIMATION_SPEED} [props.speed] - Sets --spinner-speed CSS variable
 * @param {number} [props.delay] - Milliseconds before showing spinner
 */

const Loading = ({ size, variant, className, color, speed, delay }) => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!shouldShow) return null;

  return (
    <div className={classNames(styles.container, className)}>
      <div
        role={ROLES.STATUS}
        aria-label={LOADING_TEXT.ARIA_LABEL}
        aria-busy='true'
        className={classNames(
          styles.spinner,
          size === SPINNER_SIZES.SMALL && styles['spinner--small'],
          size === SPINNER_SIZES.LARGE && styles['spinner--large'],
          variant === SPINNER_VARIANTS.DOTS && styles['spinner--dots']
        )}
        style={{
          '--spinner-color': color,
          '--spinner-speed': speed,
        }}
      />
    </div>
  );
};

Loading.defaultProps = {
  size: SPINNER_SIZES.DEFAULT,
  variant: SPINNER_VARIANTS.CIRCLE,
  className: '',
  color: 'var(--accent)',
  speed: ANIMATION_SPEED.DEFAULT,
  delay: DEFAULT_DELAY,
};

Loading.propTypes = {
  size: PropTypes.oneOf(Object.values(SPINNER_SIZES)),
  variant: PropTypes.oneOf(Object.values(SPINNER_VARIANTS)),
  className: PropTypes.string,
  color: PropTypes.string,
  speed: PropTypes.oneOf(Object.values(ANIMATION_SPEED)),
  delay: PropTypes.number,
};

export default memo(Loading);
