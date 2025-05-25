import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { useKeyboardHandler } from '../../hooks/useKeyboardHandler';
import { useClickHandler } from '../../hooks/useClickHandler';
import { ROLES, TAB_INDEXES } from '../../utils/a11y';
import styles from './button.module.css';

/**
 * Button component that can render as different elements (button, Link, etc.)
 */
const Button = forwardRef(function Button(
  {
    children,
    as: Component = 'button',
    variant = 'primary',
    size = 'medium',
    className,
    disabled = false,
    isLoading = false,
    startIcon,
    endIcon,
    onClick,
    ...props
  },
  ref
) {
  // Use the click handler hook for non-button elements
  const handleClick = useClickHandler(onClick);

  // Use the keyboard handler hook for non-button elements
  const handleKeyDown = useKeyboardHandler(handleClick);

  const buttonClasses = classNames(
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    isLoading && styles.loading,
    className
  );

  // Handle different component types (button, a, Link, etc.)
  const TagName = Component;

  // Prepare props based on component type
  const componentProps = { ...props };

  if (TagName === 'button') {
    // Button element props
    componentProps.type = props.type || 'button';
    componentProps.disabled = disabled;
    componentProps.onClick = onClick;
  } else {
    // Non-button element props
    if (disabled) {
      componentProps['aria-disabled'] = true;
      componentProps.tabIndex = TAB_INDEXES.NOT_FOCUSABLE;
    } else {
      componentProps.onClick = handleClick;
      componentProps.onKeyDown = handleKeyDown;
    }

    // Add role="button" for accessibility if not specified
    if (!componentProps.role) {
      componentProps.role = ROLES.BUTTON;
    }
  }

  return (
    <TagName
      className={buttonClasses}
      ref={ref}
      {...componentProps}
    >
      {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
      {isLoading ? (
        <span
          className={styles.spinner}
          role={ROLES.STATUS}
          aria-label='Loading'
          aria-busy='true'
        />
      ) : (
        children
      )}
      {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
    </TagName>
  );
});

Button.propTypes = {
  /** Button content */
  children: PropTypes.node.isRequired,
  /** Component to render as */
  as: PropTypes.elementType,
  /** Button variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'text', 'link']),
  /** Button size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Additional CSS class */
  className: PropTypes.string,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Loading state */
  isLoading: PropTypes.bool,
  /** Icon to display before text */
  startIcon: PropTypes.node,
  /** Icon to display after text */
  endIcon: PropTypes.node,
  /** Click handler */
  onClick: PropTypes.func,
  /** Button type (when rendered as button) */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
