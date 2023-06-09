import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
{
  text: '指导',
    link: '/courses/menu1/介绍/01-什么是Yunzai bot.md',
    activeMatch: '/courses/menu1/介绍/01-什么是Yunzai bot.md'
  },
 
  {
    text: 'FAQ',
    link: '/courses/FAQ/FAQ.md',
    activeMatch: '/courses/FAQ/FAQ.md'
  },
  {
    text: '关于',
    items: [
      { text: '关于文档', link: '/about/index', activeMatch: '/about/index' },
      { text: '关于我', link: '/about/me', activeMatch: '/about/me' }
    ],
    activeMatch: '/about/' // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  },
 
 
 
  
  
];