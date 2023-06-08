import type { HeadConfig } from 'vitepress';
import { metaData } from './constants';


export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: './阿库娅Q.png' }],
  ['link', { rel: 'stylesheet', href: `/styles/index.css` }],
  ['meta', { name: 'author', content: '旧忆 残梦' }],
  ['meta', { name: 'keywords', content: '基于vitepress书写的yunzai bot 构建文档' }],

]