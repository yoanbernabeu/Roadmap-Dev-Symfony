// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Roadmap Dev Symfony',
  tagline: 'Une Roadmap collaborative pour devenir un⸱e dev Symfony !',
  url: 'https://yoanbernabeu.github.io/',
  baseUrl: '/Roadmap-Dev-Symfony/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yoanbernabeu', // Usually your GitHub org/user name.
  projectName: 'Roadmap-Dev-Symfony', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/yoanbernabeu/Roadmap-Dev-Symfony/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/yoanbernabeu/Roadmap-Dev-Symfony/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Roadmap Dev Symfony',
        logo: {
          alt: 'Roadmap Dev Symfony',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Roadmap',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/yoanbernabeu/Roadmap-Dev-Symfony',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Roadmap',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/yOyO38',
              },
            ],
          },
          {
            title: 'Bonus',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/yoanbernabeu/Roadmap-Dev-Symfony',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} | Roadmap Dev Symfony | Une Roadmap collaborative pour devenir un⸱e dev Symfony !`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
