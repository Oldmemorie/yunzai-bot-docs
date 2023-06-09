import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';
import { metaData } from './config/constants';
import { head } from './config/head';
import { markdown } from './config/markdown';
import { themeConfig } from './config/theme';


export default withMermaid(
  defineConfig({
    
    base: '/yunzai-bot-docs/',
    lang: metaData.lang,
    title: metaData.title,
    description: metaData.description,
    
    ignoreDeadLinks: true,
    cleanUrls: true,
    lastUpdated: true, // 显示最后更新时间

    head, // <head>内标签配置
    markdown: markdown, // Markdown配置

    themeConfig, // 主题配置
  }),
);




