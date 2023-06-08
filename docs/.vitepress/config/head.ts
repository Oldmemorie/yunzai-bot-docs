import type { HeadConfig } from 'vitepress';
import { metaData } from './constants';


export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: './阿库娅Q.png' }],
  ['link', { rel: 'stylesheet', href: `/styles/index.css` }],
  ['meta', { name: 'author', content: 'Charles7c' }],
  ['meta', { name: 'keywords', content: '查尔斯的知识库, 知识库, 博客, Charles7c' }],

]