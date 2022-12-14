import { defineConfig } from 'vite'
// @ts-ignore
import ElementPlus from 'unplugin-element-plus/vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueTsx from '@vitejs/plugin-vue-jsx'
import { join } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
      ],
      imports: ['vue'],
      dts: 'src/auto-import.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vueTsx(),
    ElementPlus(),
  ],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
      com: join(__dirname, 'src/components'),
      styl: join(__dirname, 'src/styl'),
      view: join(__dirname, 'src/styl'),
    },
  },
})
