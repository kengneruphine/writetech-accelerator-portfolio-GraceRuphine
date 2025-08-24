// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
//import * as Plugin from "@docusaurus/types/src/plugin";
import * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Grace’s Technical Writing Portfolio",
  tagline:
    "My portfolio for the WriteTech Accelerator Program, showcasing projects from each module and final deliverables.",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://writetech-accelerator-portfolio-gra.vercel.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          docItemComponent: "@theme/ApiItem",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/kengneruphine/writetech-accelerator-portfolio-GraceRuphine"
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/kengneruphine/writetech-accelerator-portfolio-GraceRuphine",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn"
        },
        theme: {
          customCss: "./src/css/custom.css"
        }
      })
    ]
  ],
plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          chimoney: {
            specPath: "docs/api-documentation/openapi/chimoney.yaml", //path to your OpenAPI spec file
            outputDir: "docs/api-documentation/reference", // where generated docs will go
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        }
      },
    ]
  ],

  themes: ["docusaurus-theme-openapi-docs"], // export theme components
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Gracy'Doc",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg"
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "profileSidebar",
            position: "left",
            label: "About Me"
          },
          {
            type: "docSidebar",
            sidebarId: "toolingSidebar",
            position: "left",
            label: "WriteTech Portfolio"
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/kengneruphine/writetech-accelerator-portfolio-GraceRuphine",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Personal",
            items: [
              {
                label: "About Me",
                to: "/docs/about-me",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/tcheukounang-grace-6a5169124/"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "X",
                href: "https://x.com/ruphine_kengne"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/kengneruphine/writetech-accelerator-portfolio-GraceRuphine"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Built by Grace Ruphine - WriteTech Accelerator Program 2025`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    })
};

export default config;
