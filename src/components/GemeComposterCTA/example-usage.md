# GemeComposterCTA 组件使用示例

## 基本用法

在任何博客文章的 Markdown 文件中，你可以这样使用 GemeComposterCTA 组件：

```markdown
---
title: "你的文章标题"
description: "文章描述"
---

import GemeComposterCTA from '@site/src/components/GemeComposterCTA'

# 文章标题

## 第一个章节

这里是你的文章内容...

## 产品推荐章节

<GemeComposterCTA />

继续你的文章内容...
```

## 在不同位置使用

### 1. 在文章中间使用

```markdown
## 关于食物浪费的问题

食物浪费是一个严重的问题，每年全球有大量的食物被浪费...

<GemeComposterCTA />

通过使用 GEME Composter，你可以将食物垃圾转化为有用的堆肥...
```

### 2. 在文章结尾使用

```markdown
## 总结

通过以上方法，你可以有效地减少食物浪费...

<GemeComposterCTA />

---

感谢阅读！如果你有任何问题，请随时联系我们。
```

### 3. 在 FAQ 章节中使用

```markdown
## 常见问题

### Q: 如何处理变质的食物？

A: 变质的食物可以通过堆肥的方式处理...

<GemeComposterCTA />

### Q: 堆肥需要多长时间？

A: 使用 GEME Composter，通常需要 6-8 小时...
```

## 注意事项

1. **导入语句**: 确保在文件开头正确导入组件
2. **图片路径**: 组件会自动使用`/img/geme-kitchen-composter.png`
3. **链接**: 组件中的链接指向`https://geme.bio?utm_medium=blog&utm_source=geme_website&utm_campaign=general_seo_content&utm_content=how-long-do-apples-last-in-the-fridge`
4. **样式**: 组件使用 CSS 模块，样式是独立的

## 自定义样式（可选）

如果需要自定义样式，可以传入 className：

```markdown
<GemeComposterCTA className="my-custom-styles" />
```

然后在你的 CSS 文件中定义相应的样式。
