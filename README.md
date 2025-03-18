# 静态网站项目

这是一个由多个HTML页面组成的静态网站项目，可以通过GitHub Actions自动部署到GitHub Pages。

## 项目结构

```
.
├── index.html          # 网站首页
├── about.html          # 关于我们页面
├── services.html       # 服务页面
├── contact.html        # 联系我们页面
├── css/                # CSS样式文件夹
│   └── style.css       # 主要样式文件
├── js/                 # JavaScript文件夹
│   └── main.js         # 主要脚本文件
└── .github/workflows/  # GitHub Actions工作流配置
    └── deploy.yml      # 自动部署配置
```

## 功能特点

- 多页面静态网站，页面之间可以通过链接自由导航
- 响应式设计，适配各种设备屏幕
- 使用纯HTML、CSS和JavaScript构建，无需后端服务
- 通过GitHub Actions自动部署到GitHub Pages

## 如何使用

1. 克隆此仓库到本地：
   ```
   git clone https://github.com/你的用户名/静态网站项目.git
   ```

2. 进行修改和自定义：
   - 编辑HTML文件内容
   - 修改CSS样式
   - 更新JavaScript功能

3. 提交更改并推送到GitHub：
   ```
   git add .
   git commit -m "更新网站内容"
   git push origin main
   ```

4. GitHub Actions将自动部署更改到GitHub Pages

## 部署说明

本项目使用GitHub Actions自动部署到GitHub Pages。工作流配置文件位于`.github/workflows/deploy.yml`。

当你推送更改到`main`分支时，GitHub Actions会自动触发部署流程，将网站部署到`gh-pages`分支。

## 访问网站

部署完成后，你可以通过以下URL访问你的网站：

```
https://你的用户名.github.io/仓库名/
```

## 自定义域名（可选）

如果你想使用自定义域名，可以在GitHub仓库设置中配置：

1. 在仓库中创建一个名为`CNAME`的文件，内容为你的域名
2. 在你的域名提供商处添加DNS记录，将域名指向GitHub Pages

## 许可证

[MIT](LICENSE)