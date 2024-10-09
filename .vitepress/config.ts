import { defineConfig } from 'vitepress'
import { getLocales } from './locales'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir:"./packages",
  lang:"zh",
  locales:getLocales(),
  // rewrites:{
  //   '/zh/components/button/button.zh.md':'/components/button/button.zh.md'
  // },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
