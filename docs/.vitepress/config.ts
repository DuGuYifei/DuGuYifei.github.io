import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  title: 'Liu Yifei - About Me',
  description: 'Liu Yifei 的个人网站',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DuGuYifei' },
      { icon: 'leetcode', link: 'https://leetcode.cn/u/duguyifei' },
      { icon: 'bilibili', link: 'https://b23.tv/HRbF8sa' },
      { icon: 'gmail', link: 'mailto:chnliuyifei@gmail.com' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/yifeiliu-tobi/' },
    ],

    footer: {
      message: 'Hope you enjoy it! 😊',
      copyright: 'Copyright © 2025-present DuGuYifei Based on VitePress',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
