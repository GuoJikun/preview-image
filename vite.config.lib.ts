import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [vue()],
  publicDir: false,
  appType: 'custom',
  build: {
    outDir: 'lib',
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    },
    lib: {
      entry: resolve(__dirname, './src/components/preview-image/index.ts'),
      name: 'foxPreviewImage',
      fileName: (format) => {
        if (format === 'es') {
          return 'preview-image.mjs'
        }
        return `preview-image.js`
      }
    },
    cssCodeSplit: false
  }
})
