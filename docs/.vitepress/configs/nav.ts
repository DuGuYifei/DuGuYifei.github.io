import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: 'Blogs', items: [
      { text: 'Project', link: 'https://project.liuyifei.tech' },
      { text: 'Notes', link: 'https://notes.liuyifei.tech' },
    ]
  },
  { text: 'CV', link: '/CV.pdf' },
]
