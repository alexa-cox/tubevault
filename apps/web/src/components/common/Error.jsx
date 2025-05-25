import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { ROLES } from '../../utils/a11y';
import styles from './error.module.css';

/**
 * @file Error component for displaying error messages with retry functionality
 * @module Error
 * @see {@link error.module.css} for associated styles
 */

/**
 * Error component with configurable message display and retry action
 * @component
 * @param {Object} props - Component props
 * @param {string} props.message - Error message displayed in .errorMessage
 * @param {Function} [props.onRetry] - Callback that triggers .errorAction button
 * @param {Object} [props.style] - Custom styles applied to .errorContainer
 * @param {string} [props.className] - Additional classes merged with .errorContainer
 * @param {Function} [props.onError] - Error logging callback
 */

const Error = memo(({ message, onRetry, style, className, onError }) => {
  // Log error if logging callback provided
  React.useEffect(() => {
    if (onError) onError(message);
  }, [message, onError]);

  return (
    <div
      className={classNames(styles.errorContainer, className)}
      style={style}
      role={ROLES.ALERT}
      aria-live='polite'
    >
      <p className={styles.errorMessage}>{message}</p>
      {onRetry && (
        <button
          className={styles.errorAction}
          onClick={onRetry}
          aria-label='Retry action'
        >
          Try Again
        </button>
      )}
    </div>
  );
});

Error.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  onError: PropTypes.func,
};

Error.defaultProps = {
  message: 'Something went wrong',
};

// Display name for debugging
Error.displayName = 'Error';

export default Error;
