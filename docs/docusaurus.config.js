const {
  APP_INFO,
  OWNER_INFO,
  LEGAL_INFO,
  DOCS_CONFIG,
  BRAND_COLORS,
  SOCIAL_LINKS,
} = require('@tubevault/shared');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: APP_INFO.name,
  tagline: APP_INFO.tagline,
  favicon: 'img/favicon.ico',

  url: DOCS_CONFIG.baseUrl,
  baseUrl: '/',

  organizationName: OWNER_INFO.name.toLowerCase().replace(' ', '-'),
  projectName: APP_INFO.name.toLowerCase(),

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: `${SOCIAL_LINKS.github}/tree/main/docs/`,
        },
        blog: {
          showReadingTime: true,
          editUrl: `${SOCIAL_LINKS.github}/tree/main/docs/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: APP_INFO.name,
        logo: {
          alt: `${APP_INFO.name} Logo`,
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: '/jsdoc/index.html',
            label: 'Code Docs',
            position: 'left',
          },
          {
            href: '/storybook/web/index.html',
            label: 'Web Components',
            position: 'left',
          },
          {
            href: '/storybook/mobile/index.html',
            label: 'Mobile Components',
            position: 'left',
          },
          {
            href: '/api-docs/index.html',
            label: 'API Docs',
            position: 'left',
          },
          {
            href: SOCIAL_LINKS.github,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'API Reference',
                to: '/api-docs',
              },
            ],
          },
          {
            title: 'Components',
            items: [
              {
                label: 'Web Components',
                to: '/storybook/web',
              },
              {
                label: 'Mobile Components',
                to: '/storybook/mobile',
              },
              {
                label: 'Code Documentation',
                to: '/jsdoc',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: SOCIAL_LINKS.github,
              },
              {
                label: 'Contact',
                href: SOCIAL_LINKS.email,
              },
            ],
          },
        ],
        copyright: LEGAL_INFO.copyright,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
