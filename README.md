# preview-image

Vue 图片预览组件

## 安装

```
npm i fox-preview-image
# or
yarn add fox-preview-image
```

## 引入组件

```
import foxPreviewImage from "fox-preview-image";

Vue.use(foxPreviewImage)
```

## 基础使用

```
<fox-preview-image v-model="visiable" :src="imageSrc" width="90vw" height="90vh" z-index="9000"></fox-preview-image>
```

## 演示地址

[GITHUB](https://guojikun.github.io/preview-image/)

[码云](https://guojikun_admin.gitee.io/preview-image/)

## API

| 属性             | 说明                         | 参数类型     | 默认值 |
| ---------------- | :--------------------------- | :----------- | :----- |
| src              | 预览图片的地址               | String/Array | -      |
| visiable/v-model | 是否显示预览窗口             | Boolean      | false  |
| z-index          | 预览窗口的层级-css 的 zIndex | Number       | 9000   |

## 更新日志

### v1.0.0

-   feat: 旋转
-   feat: 放大，缩小（0.5-2）
-   feat: 多张图片可以传数组 eg：['http://xxxx.com/a.png','http://xxxx.com/b.png']
