# Related Articles 组件

## 使用方法

### 1. 在博客文章中导入组件

```jsx
import RelatedArticles from '@site/src/components/RelatedArticles'
```
### 2. 在博客内容中使用组件
```jsx
<RelatedArticles
  slugs={[
  "article-slug-1",
  "article-slug-2",
  "article-slug-3"
  ]}
/>
```
### 3. 参数说明

| 参数        | 类型       | 默认值      | 说明                 |
| ----------- | ---------- | ----------- | -------------------- |
| `slugs`     | `string[]` | `[]`        | 相关文章的 slug 数组 |
| `className` | `string`   | `undefined` | 自定义 CSS 类名      |

### 4. 示例

```jsx
import RelatedArticles from "@site/src/components/RelatedArticles";

<RelatedArticles
  slugs={[
    "how-to-grow-tomatoes-safely",
    "are-tomatoes-safe-to-eat-now",
    "garden-soil-vs-compost-pros-and-cons",
  ]}
/>;
```

## 数据源

组件会自动从 Docusaurus 的全局数据中获取所有博客文章，然后根据提供的 slugs 进行过滤。

### 文章数据结构

每篇文章需要包含以下 frontmatter 字段：

```yaml
---
title: "文章标题"
tags: [tag1, tag2, tag3]
picture: "https://example.com/image.jpg"
slug: "article-slug"
---
```

## 样式定制

组件使用 CSS Modules，你可以通过以下方式自定义样式：

1. 修改 `styles.module.css` 文件
2. 通过 `className` 属性添加自定义类
3. 使用 CSS 变量覆盖默认样式

## 响应式断点

- **桌面端**: 2列网格布局
- **平板端** (≤1024px): 2列布局，字体和间距调整
- **中等屏幕** (≤768px): 2列布局，进一步缩小字体
- **手机端** (≤480px): 2列布局，最小字体和间距

## 注意事项

1. 确保传入的 slugs 在博客文章中存在
2. 文章必须有完整的 frontmatter 信息（title, tags, picture, slug）
3. 组件会自动处理不存在的文章（返回 null）
4. 图片使用懒加载优化性能
