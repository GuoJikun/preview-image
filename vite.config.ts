import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const appType = command === 'serve' ? 'spa' : 'custom'
  console.log('appType:', appType)
  return {
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      dts({
        tsconfigPath: './tsconfig.app.json',
        compilerOptions: {
          declaration: true, // 生成相应的.d.ts文件
        },
        rollupTypes: true, // 将所有类型打包到一个文件中
        outDir: 'types',
        include: ['src/components/**/*'],
        entryRoot: 'src/components',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    publicDir: false,
    appType: appType,
    build: {
      outDir: 'lib',
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue',
          },
          exports: 'named',
        },
      },
      lib: {
        entry: resolve(fileURLToPath(new URL('./src', import.meta.url)), 'components/index.ts'),
        name: 'foxPreviewImage',
        cssFileName: 'style',
        fileName: (format: string) => {
          if (format === 'es') {
            return 'preview-image.mjs'
          }
          return `preview-image.js`
        },
      },
    },
  }
})
