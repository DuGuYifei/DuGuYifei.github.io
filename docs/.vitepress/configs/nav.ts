import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: 'Blogs', items: [
      { text: 'Project', link: 'https://project.liuyifei.tech' },
      { text: 'Notes', link: 'https://notes.liuyifei.tech' },
    ]
  },
  {
    text: 'CV', items: [
      { text: '中文', link: '/CV_20260228_zh.pdf' },
      { text: 'English', link: '/CV_20260228_en.pdf' }
    ]
  }
]
