# GemeComposterCTA 组件

这是一个用于展示GEME堆肥机产品的CTA（Call-to-Action）组件，包含产品图片、特性列表和购买按钮。

## 基本用法

```jsx
import GemeComposterCTA from '@site/src/components/GemeComposterCTA';

export default function MyPage() {
  return (
    <div>
      <h1>我的页面</h1>
      <GemeComposterCTA />
    </div>
  );
}
```

## 属性配置

### 所有可配置属性

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `className` | string | - | 额外的CSS类名 |
| `href` | string | GEME产品链接 | 点击跳转的链接地址 |
| `imgSrc` | string | "/img/geme-kitchen-composter.png" | 产品图片路径 |
| `imgAlt` | string | "GEME Kitchen Composter" | 图片alt文本 |
| `productTitle` | string | "GEME, the Best Biowaste Composter" | 产品标题 |
| `features` | string[] | 默认特性列表 | 产品特性列表 |
| `buttonText` | string | "🛒 Shop GEME Composter Now" | 按钮文本 |

## 自定义示例

### 替换产品图片

如果你想使用自定义的产品图片，那么就传入`imgSrc`属性：

```jsx
<GemeComposterCTA 
  imgSrc="/img/custom-product-image.jpg"
/>
```

### 自定义产品标题

如果你想修改产品标题，那么就传入`productTitle`属性：

```jsx
<GemeComposterCTA 
  productTitle="GEME智能堆肥机 - 环保新选择"
/>
```

### 自定义产品特性

如果你想修改产品特性列表，那么就传入`features`属性：

```jsx
<GemeComposterCTA 
  features={[
    "✅ 智能控制，一键启动",
    "✅ 快速堆肥，6-8小时完成",
    "✅ 静音设计，无噪音干扰",
    "✅ 大容量19L，满足家庭需求"
  ]}
/>
```

### 自定义按钮文本

如果你想修改按钮文字，那么就传入`buttonText`属性：

```jsx
<GemeComposterCTA 
  buttonText="立即购买GEME堆肥机"
/>
```

### 自定义链接地址

如果你想修改点击跳转的链接，那么就传入`href`属性：

```jsx
<GemeComposterCTA 
  href="https://www.geme.bio/product/geme?utm_medium=blog&utm_source=geme_website&utm_campaign=special_offer"
/>
```

### 自定义图片alt文本

如果你想修改图片的alt文本，那么就传入`imgAlt`属性：

```jsx
<GemeComposterCTA 
  imgAlt="GEME智能厨房堆肥机产品展示"
/>
```

### 添加自定义CSS类

如果你想添加额外的CSS样式，那么就传入`className`属性：

```jsx
<GemeComposterCTA 
  className="my-custom-cta-styles"
/>
```

## 完整自定义示例

```jsx
<GemeComposterCTA 
  className="custom-cta-container"
  href="https://www.geme.bio/product/geme?utm_medium=blog&utm_source=geme_website&utm_campaign=winter_sale"
  imgSrc="/img/geme-winter-edition.png"
  imgAlt="GEME冬季特别版堆肥机"
  productTitle="GEME冬季特别版 - 温暖你的厨房"
  features={[
    "✅ 冬季特别版，温暖设计",
    "✅ 19L大容量，满足全家需求",
    "✅ 6-8小时快速堆肥",
    "✅ 静音无味，厨房必备"
  ]}
  buttonText="🔥 限时特价，立即抢购"
/>
```

## 样式定制

组件使用CSS Modules，样式文件位于 `styles.module.css`。你可以通过以下方式自定义样式：

1. 修改 `styles.module.css` 文件
2. 通过 `className` 属性添加额外的CSS类
3. 使用CSS-in-JS或其他样式解决方案

## 注意事项

- 所有链接都会在新标签页中打开（`target="_blank"`）
- 图片路径应该是相对于静态文件夹的路径（例如/img/geme-kitchen-composter.png）
- 特性列表支持emoji和特殊字符
- 组件完全响应式，适配各种屏幕尺寸 