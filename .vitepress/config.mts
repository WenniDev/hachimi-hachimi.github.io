import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hachimi",
  description: "Game enhancement and translation mod for UM:PD",
  head: [
    ['link', { rel: "shortcut icon", href: "/favicon.ico"}]
  ],
  themeConfig: {
    logo: "/assets/logo.png",

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Screenshots', link: '/#screenshots' },
      { text: 'Docs', link: '/docs' }
    ],

    sidebar: [
      {
        text: "Hachimi",
        collapsed: false,
        base: "/docs/hachimi/",
        items: [
          {
            text: 'About',
            link: "about"
          },
          {
            text: 'Getting Started',
            link: "getting-started"
          },
          {
            text: 'Troubleshooting',
            link: "troubleshooting"
          },
          {
            text: 'Built-in GUI',
            link: "built-in-gui"
          },
          {
            text: 'Config',
            link: "config"
          },
          {
            text: 'FAQs',
            link: "faqs"
          }
        ]
      },
      {
        text: "Translation guide",
        collapsed: false,
        base: "/docs/translation-guide/",
        items: [
          {
            text: 'About',
            link: "about"
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hachimi-Hachimi/Hachimi' },
      { icon: 'discord', link: 'https://discord.gg/BVEt5FcxEn' }
    ]
  }
})
