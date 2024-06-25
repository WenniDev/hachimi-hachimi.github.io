import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hachimi",
  description: "Game enhancement and translation mod for UM:PD",
  themeConfig: {
    logo: "/assets/logo.png",

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' }
    ],

    sidebar: [
      {
        text: 'About Hachimi',
        link: "/docs/"
      },
      {
        text: 'Getting Started',
        link: "/docs/getting-started"
      },
      {
        text: 'Built-in GUI',
        link: "/docs/built-in-gui"
      },
      {
        text: 'Config',
        link: "/docs/config"
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hachimi-Hachimi/Hachimi' },
      { icon: 'discord', link: 'https://discord.gg/BVEt5FcxEn' }
    ]
  }
})
