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
          },
          {
            text: 'Auto translation',
            link: "auto-translation"
          }
        ]
      },
      {
        text: "Translation guide",
        collapsed: false,
        base: "/docs/translation-guide/",
        items: [
          {
            text: 'Welcome',
            link: "welcome"
          },
          {
            text: 'Translation system',
            link: "translation-system"
          },
          {
            text: "Using ZokuZoku",
            link: "using-zokuzoku"
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hachimi-Hachimi/Hachimi' },
      { icon: 'discord', link: 'https://discord.gg/BVEt5FcxEn' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi'
    },
    de: {
      label: 'Deutsch',
      lang: 'de'
    },
    'zh-cn': {
      label: '简体中文',
      lang: 'zh-cn'
    },
    'zh-tw': {
      label: '繁體中文',
      lang: 'zh-tw'
    },
    id: {
      label: 'Bahasa Indonesia',
      lang: 'id'
    },
    fr: {
      label: 'Français',
      lang: 'fr'
    }
  }
})
