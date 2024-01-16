# preview-image

Vue 图片预览组件

> vue2.x 请使用 @1.x 版本

[Github](https://github.com/GuoJikun/preview-image)
[New issue](https://github.com/GuoJikun/preview-image/issues/new)

## 安装

```bash
npm i fox-preview-image
# or
yarn add fox-preview-image
# or
pnpm add fox-preview-image
```

## 引入组件

```js
import foxPreviewImage from 'fox-preview-image'
import 'fox-preview-image/lib/style.css'
Vue.use(foxPreviewImage)
```

## 基础使用

```html
<fox-preview-image v-model="visiable" :src="imageSrc" z-index="9000"></fox-preview-image>
```

## 演示地址

[文档以及 demo 地址](https://blog.jikun.dev/docs/preview-image.html)

## API

| 属性               | 说明                         | 参数类型          | 默认值  |
| ------------------ | :--------------------------- | :---------------- | :------ |
| src                | 预览图片的地址               | `string/string[]` | -       |
| modelValue/v-model | 是否显示预览窗口             | `boolean`         | `false` |
| initial-index      | 默认显示图片的下标           | `number`          | `0`     |
| z-index            | 预览窗口的层级-css 的 zIndex | `number`          | `9000`  |
| showToolbar        | 控制 toolbar 的显示和隐藏    | `boolean`         | `true`  |

## 更新日志

### v2.9.0

Feat：

-   增加 `showToolbar` 属性，用于控制工具栏的显示和隐藏
-   移除了容器的圆角属性

Refactor:

-   重构了代码，将重复代码替换为函数
-   移除了 console 语句

### v2.8.0

Feat：

-   更改打包后文件的格式,es 格式文件后缀改为 `.mjs`

### v2.6.0

Feat:

-   增加下载功能
-   统一 icon

### v2.4.1

Fix:

-   修复 css 导入错误

### v2.4.0

Feat:

-   增加默认显示第几张图片的功能

### v2.3.0

Feat:

-   增加显示当前图片下标的功能(仅在多图下显示)

### v2.0.0

Feat:

-   增加 vue3 支持（安装：npm i fox-preview-image@next）

### v1.1.3

Refactor:

-   删除冗余代码

### v1.1.2

Fix：

-   修复火狐浏览器拖拽失效的问题

### v1.1.1

Feat：

-   支持鼠标滚轮放大缩小

### v1.1.0

feat：

-   增加缩放倍数显示

### v1.0.2

Fix:

-   修复当预览的图片为 1 张时扔显示左右切换按钮的问题

### v1.0.1

Fix:

-   修复拖拽时图片未完全跟随鼠标的 bug

### v1.0.0

Feat:

-   旋转
-   放大，缩小（0.5-2）
-   多张图片可以传数组 eg：['http://xxxx.com/a.png','http://xxxx.com/b.png']
