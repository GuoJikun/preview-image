# preview-image

Vue 图片预览组件

> vue2.x 请使用 @1.x 版本

[Github](https://github.com/GuoJikun/preview-image)
[New issue](https://github.com/GuoJikun/preview-image/issues/new)

## 安装

```
npm i fox-preview-image
# or
yarn add fox-preview-image
```

## 引入组件

```
import foxPreviewImage from "fox-preview-image";
import "fox-preview-image/lib/style.css";
Vue.use(foxPreviewImage)
```

## 基础使用

```
<fox-preview-image v-model="visiable" :src="imageSrc" z-index="9000"></fox-preview-image>
```

## 演示地址

[GITHUB](https://guojikun.github.io/preview-image/)

[码云](https://guojikun_admin.gitee.io/preview-image/)

## API

| 属性             | 说明                         | 参数类型     | 默认值 |
| ---------------- | :--------------------------- | :----------- | :----- |
| src              | 预览图片的地址               | String/Array | -      |
| visiable/v-model | 是否显示预览窗口             | Boolean      | false  |
| initial-index | 默认显示图片的下标             | Number      | 0  |
| z-index          | 预览窗口的层级-css 的 zIndex | Number       | 9000   |

## 更新日志

### v2.4.0

*   feat:
    -   增加默认显示第几张图片的功能

### v2.3.0

*   feat:
    -   增加显示当前图片下标的功能(仅在多图下显示)

### v2.0.0

*   feat:
    -   增加 vue3 支持（安装：npm i fox-preview-image@next）

### v1.1.3

*   refactor:

    -   删除冗余代码

### v1.1.2

*   fix：

    -   修复火狐浏览器拖拽失效的问题

### v1.1.1

*   feat：
    -   支持鼠标滚轮放大缩小

### v1.1.0

*   feat：
    -   增加缩放倍数显示

### v1.0.2

*   fix:
    -   修复当预览的图片为 1 张时扔显示左右切换按钮的问题

### v1.0.1

*   fix:
    -   修复拖拽时图片未完全跟随鼠标的 bug

### v1.0.0

*   feat:
    -   旋转
    -   放大，缩小（0.5-2）
    -   多张图片可以传数组 eg：['http://xxxx.com/a.png','http://xxxx.com/b.png']
