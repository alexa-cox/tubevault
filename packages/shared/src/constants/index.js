/**
 * TubeVault Application Constants
 * Centralized constants used across all apps and documentation
 */

// App Identity
export const APP_INFO = {
  name: 'TubeVault',
  displayName: 'TubeVault',
  tagline: 'Your Personal Video Library',
  description: 'A comprehensive video management and organization platform',
  version: '1.0.0',
};

// Owner/Company Information
export const OWNER_INFO = {
  name: 'Alexa Cox',
  company: 'TubeVault', // Change to LLC name when ready
  email: 'contact@tubevault.com',
  website: 'https://tubevault.com',
  github: 'https://github.com/alexa-cox/tubevault',
};

// Legal Information
export const LEGAL_INFO = {
  copyright: `© ${new Date().getFullYear()} ${OWNER_INFO.company}`,
  license: 'GPL-3.0-only',
  licenseUrl: 'https://www.gnu.org/licenses/gpl-3.0.html',
};

// API Configuration
export const API_CONFIG = {
  development: {
    baseUrl: 'http://localhost:3001',
    apiVersion: 'v1',
  },
  production: {
    baseUrl: 'https://api.tubevault.com',
    apiVersion: 'v1',
  },
};

// Documentation URLs
export const DOCS_CONFIG = {
  baseUrl: 'https://docs.tubevault.com',
  paths: {
    api: '/api-docs',
    components: {
      web: '/storybook/web',
      mobile: '/storybook/mobile',
    },
    code: '/jsdoc',
  },
};

// Brand Colors (for consistent theming)
export const BRAND_COLORS = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
};

// Social Media Links
export const SOCIAL_LINKS = {
  github: OWNER_INFO.github,
  twitter: 'https://twitter.com/tubevault',
  discord: 'https://discord.gg/tubevault',
  email: `mailto:${OWNER_INFO.email}`,
};

// Default export with all constants
export default {
  APP_INFO,
  OWNER_INFO,
  LEGAL_INFO,
  API_CONFIG,
  DOCS_CONFIG,
  BRAND_COLORS,
  SOCIAL_LINKS,
};
