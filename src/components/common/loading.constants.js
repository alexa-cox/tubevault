/**
 * @file Loading component constants and configuration
 * @module loading.constants
 * @see {@link Loading.jsx} for component implementation
 * @see {@link loading.module.css} for associated styles
 */

/**
 * Available spinner size options that map to CSS classes
 * @enum {string}
 * @see {loading.module.css} .spinner--small, .spinner--large
 */
export const SPINNER_SIZES = {
  SMALL: 'small', // Maps to .spinner--small
  DEFAULT: 'default',
  LARGE: 'large', // Maps to .spinner--large
};

/**
 * Spinner visual variants that determine appearance
 * @enum {string}
 * @see {loading.module.css} .spinner--dots
 */
export const SPINNER_VARIANTS = {
  CIRCLE: 'circle', // Default border animation
  DOTS: 'dots', // Custom dots animation
};

/**
 * Animation speed presets used by --spinner-speed CSS variable
 * @enum {string}
 */
export const ANIMATION_SPEED = {
  SLOW: '1.5s',
  DEFAULT: 'var(--transition-base)',
  FAST: '0.5s',
};

/**
 * Accessibility text for loading states
 * @enum {string}
 */
export const LOADING_TEXT = {
  ARIA_LABEL: 'Loading content',
  VISUALLY_HIDDEN: 'Please wait while content loads',
};

/**
 * Default delay before showing loading state
 * @constant {number} milliseconds
 */
export const DEFAULT_DELAY = 200;
