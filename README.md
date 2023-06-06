

# 旧忆 残梦

## 开始
# 克隆本仓库
```sh
git clone https://github.com/OldmemoriesResidualdreams/oldmemoriesresidualdreams.github.io.git
```

# 2.安装 PNPM
```sh
npm install pnpm -g
```
# 3.设置淘宝镜像源
```sh
pnpm config set registry https://registry.npmmirror.com/
```

# 4.安装依赖
```sh
pnpm install
```

# 5.dev 运行，访问：http://localhost:5173
```sh
pnpm dev
```
# 6.打包
```sh
pnpm build
```

 文件存放位置：docs/.vitepress/dist,如果是部署到 GitHub Pages，可以利用 GitHub Actions，在 push 到 GitHub 后自动部署打包
 详情见：.github/workflows/deploy-pages.yml，根据个人需要删减工作流配置
 数据

# 7.部署
## 7.1 push 到 GitHub 仓库，部署到 GitHub Pages：需要在仓库设置中启用 GitHub Pages（本仓库采用此种部署方式）
## 7.2 在其他平台部署, 例如：Gitee Pages、Vercel、Netlify、个人虚拟主机、个人服务器等



## License

- 文章遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和声明
- 源码遵循 [MIT](https://github.com/Oldmemorie/Oldmemorie.github.io/blob/main/LICENSE) 许可协议
- Copyright © 2019-2022 旧忆 残梦
