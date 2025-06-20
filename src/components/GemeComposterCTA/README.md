# GemeComposterCTA 组件

这是一个用于在博客文章中展示 GEME Composter 产品导购信息的通用组件。

## 使用方法

### 1. 在 Markdown 文件中导入组件

```markdown
---
title: "你的文章标题"
description: "文章描述"
---

import GemeComposterCTA from '@site/src/components/GemeComposterCTA'

# 你的文章内容

## 某个章节

<GemeComposterCTA />

继续你的文章内容...
```

### 2. 组件特性

- **响应式设计**: 在移动设备和桌面设备上都有良好的显示效果
- **统一样式**: 保持与品牌一致的设计风格
- **易于维护**: 集中管理产品信息和链接
- **SEO 友好**: 包含适当的结构化标记

### 3. 组件内容

组件包含以下信息：

- GEME Kitchen Composter 产品图片
- 产品标题和特价信息
- 产品特性列表
- 购买按钮

### 4. 自定义样式

如果需要自定义样式，可以通过传入`className`属性：

```markdown
<GemeComposterCTA className="custom-styles" />
```

然后在你的 CSS 文件中定义`.custom-styles`类。

## 文件结构

```
src/components/GemeComposterCTA/
├── index.js          # 组件主文件
├── styles.module.css # 组件样式
└── README.md         # 使用说明
```

## 注意事项

- 确保`/img/geme-kitchen-composter.png`图片文件存在于`static/img/`目录中
- 组件中的链接指向`https://www.geme.bio/product/geme`
- 如需更新产品信息，请修改`index.js`文件中的相应内容
