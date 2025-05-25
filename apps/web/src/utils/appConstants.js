/**
 * Application-wide constants
 */

// Import from shared package
import { APP_INFO, OWNER_INFO, LEGAL_INFO } from '@tubevault/shared';

/**
 * Application name used throughout the UI
 * @constant
 * @type {string}
 */
export const APP_NAME = APP_INFO.name;

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
export const APP_OWNER = OWNER_INFO.company;

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

/*OWNER_INFO.company;*/

/**
 * Legal disclaimer regarding YouTube and Google trademarks
 * Used in footer, about pages, and legal documentation
 * @constant
 * @type {string}
 */
export const DISCLAIMER =
  'This website is not affiliated with, endorsed by, sponsored by, or officially connected with YouTube LLC or Google LLC. All YouTube names, logos, trademarks, and registered trademarks are the property of their respective owners.';

/**
 * Array of section IDs for the home page.
 * These IDs correspond to the HTML element IDs in the Home component
 * and are used for navigation and intersection observation.
 * @type {string[]}
 */
export const HOME_SECTIONS = [
  'hero',
  'features',
  'how-it-works',
  'pricing',
  'faq',
];

export const APP_URL = 'website.com';
export const APP_EMAIL = 'alexacox.atc@gmail.com';
export const LEGAL_EFFECTIVE_DATE = 'May 03, 2025';
export const APP_STATE = 'Florida';

export const PRIMARY_CTA = 'Get Started for Free';
