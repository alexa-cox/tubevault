/**
 * Application-wide constants
 */

/**
 * Application name used throughout the UI
 * @constant
 * @type {string}
 */
export const APP_NAME = 'Tube Vault';

/**
 * Application short name (used for abbreviated displays)
 * @constant
 * @type {string}
 */
export const APP_SHORT_NAME = 'TV';

/**
 * Application version
 * @constant
 * @type {string}
 */
export const APP_VERSION = '1.0.0';

/**
 * Application owner (individual or company)
 * Used in legal documents, copyright notices, and about pages
 * @constant
 * @type {string}
 */
export const APP_OWNER = 'Alexandria Cox';

/**
 * Year the application was first created/launched
 * @constant
 * @type {number}
 */
export const APP_START_YEAR = 2025;

/**
 * Current year for copyright notices
 * @constant
 * @type {number}
 */
export const CURRENT_YEAR = new Date().getFullYear();

/**
 * Formatted copyright year range
 * Returns a single year if APP_START_YEAR equals current year,
 * otherwise returns a range (e.g., "2023-2024")
 * @constant
 * @type {string}
 */
export const COPYRIGHT_YEAR_DISPLAY =
  APP_START_YEAR === CURRENT_YEAR
    ? `${APP_START_YEAR}`
    : `${APP_START_YEAR}-${CURRENT_YEAR}`;

/**
 * Complete copyright statement
 * @constant
 * @type {string}
 */
export const COPYRIGHT_STATEMENT = `© ${COPYRIGHT_YEAR_DISPLAY} ${APP_OWNER}. All rights reserved.`;
