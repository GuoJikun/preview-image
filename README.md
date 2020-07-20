# preview-image

Vue 图片预览组件

## 安装

```
npm i owl-preview-image
# or
yarn add owl-preview-image
```

## 引入组件

```
import owlPreviewImage from "owl-preview-image";

Vue.use(owlPreviewImage)
```

## 基础使用

```
<owl-preview-image v-model="visiable" :src="imageSrc" width="90vw" height="90vh" z-index="9000"></owl-preview-image>
```

## [Demo 演示地址](https://github.com/guojikun/preview-image)

## API

| 属性             | 说明                         | 参数类型 | 默认值 |
| ---------------- | :--------------------------- | :------- | :----- |
| src              | 预览图片的地址               | String   | -      |
| visiable/v-model | 是否显示预览窗口             | Boolean  | false  |
| width            | 预览窗口的宽度               | String   | 100vw  |
| height           | 预览窗口的高度               | String   | 100vh  |
| z-index          | 预览窗口的层级-css 的 zIndex | Number   | 9000   |
