import PreviewImage from './src/index.vue'
import type { App } from 'vue'

PreviewImage.install = (app: App) => {
  app.component(PreviewImage.name as string, PreviewImage)
}

export default PreviewImage
