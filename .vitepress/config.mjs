import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Leo's Blog",
  description: "Leo's Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'DS_notes', link: '/Kafka' }
    ],

    sidebar: [
      {
        text: 'DS_notes',
        items: [
          { text: 'Kafka', link: '/Kafka' },
          { text: 'NLP', link: '/NLP' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
