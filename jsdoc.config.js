/**
 * JSDoc configuration for TubeVault monorepo
 * Generates unified documentation for all apps and packages
 */
module.exports = {
  source: {
    include: [
      './apps/web/src/',
      './apps/mobile/app/',
      './apps/mobile/components/',
      './apps/mobile/hooks/',
      './apps/mobile/constants/',
      './apps/server/src/',
      './packages/',
    ],
    includePattern: '\\.(js|jsx)$',
    exclude: [
      './node_modules/',
      './apps/*/node_modules/',
      './packages/*/node_modules/',
      './apps/*/build/',
      './apps/*/dist/',
      './docs/',
      './apps/*/.storybook/',
      './apps/*/coverage/',
      './apps/*/assets/',
    ],
  },

  opts: {
    destination: './docs/static/jsdoc/',
    recurse: true,
    readme: './README.md',
    package: './package.json',
  },

  plugins: ['plugins/markdown'],

  templates: {
    cleverLinks: false,
    monospaceLinks: false,
    default: {
      outputSourceFiles: true,
      includeDate: false,
    },
  },

  markdown: {
    parser: 'gfm',
  },
};
