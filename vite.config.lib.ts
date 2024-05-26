import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      tsconfigPath: './tsconfig.json',
      outDir: 'types'
    }),
    VueDevTools()
  ],
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
      entry: resolve(
        fileURLToPath(new URL('./src', import.meta.url)),
        'components/preview-image/index.ts'
      ),
      name: 'foxPreviewImage',
      fileName: (format: string) => {
        if (format === 'es') {
          return 'preview-image.mjs'
        }
        return `preview-image.js`
      }
    }
  }
})
