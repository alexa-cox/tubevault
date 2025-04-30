import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ImageIcon } from './Icons';
import { CSS_CLASSES } from '../../utils/cssConstants';
import styles from './imageFallback.module.css';

/**
 * Fallback component displayed when an image fails to load
 *
 * @param {Object} props - Component props
 * @param {number} props.width - Width of the fallback container
 * @param {number} props.height - Height of the fallback container
 * @param {string} [props.className] - Additional CSS class names
 * @param {string} [props.altText] - Custom accessibility text
 * @returns {JSX.Element} Fallback component
 */
function ImageFallback({
  width,
  height,
  className,
  altText = CSS_CLASSES.FALLBACK.DEFAULT_ALT_TEXT,
}) {
  return (
    <div
      className={classNames(styles.fallbackContainer, className)}
      style={{ width, height }}
      role='img'
      aria-label={altText}
    >
      <ImageIcon className={styles.fallbackIcon} />
    </div>
  );
}

ImageFallback.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string,
  altText: PropTypes.string,
};

export default React.memo(ImageFallback);
