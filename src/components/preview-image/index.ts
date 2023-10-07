import PreviewImage from './src/index.vue'
import type { App } from 'vue'

const install = (app: App) => {
  app.component(PreviewImage.name, PreviewImage)
}

export default install

export const FoxPreviewImage = PreviewImage
