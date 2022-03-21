// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CTF Cheats",
  tagline: "A collection of tips & tricks about CTF",
  url: "https://francescopastore.github.io",
  baseUrl: "/ctf-cheats/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "francescopastore",
  projectName: "ctf-cheats",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/francescopastore/ctf-cheats",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "CTF Cheats",
        logo: {
          alt: "CTF Cheats logo",
          src: "img/icon.png",
        },
        items: [
          {
            to: '/docs/intro',    
            label: 'Docs',
            position: 'left',
            activeBaseRegex: `/docs/`,
          },
          {
            to: '/resources/_intro',  
            label: 'Resources',
            position: 'left',
            activeBaseRegex: `/resources/`,
          },
          {
            href: "https://github.com/francescopastore/ctf-cheats",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Made with ♥ using Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "resources",
        path: "resources",
        routeBasePath: "resources",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],
};

module.exports = config;
