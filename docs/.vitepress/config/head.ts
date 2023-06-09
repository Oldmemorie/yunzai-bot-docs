import type { HeadConfig } from 'vitepress';
import { metaData } from './constants';


export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: './阿库娅Q.png' }],
  ['link', { rel: 'stylesheet', href: `/styles/index.css` }],
  ['script', { src: 'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js' }],
  ['meta', { name: 'author', content: '旧忆 残梦' }],
  ['meta', { name: 'keywords', content: '基于vitepress书写的yunzai bot 构建文档' }],]


  