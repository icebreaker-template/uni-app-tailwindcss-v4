import { defineConfig } from "vite";
import process from 'node:process'

const isH5 = process.env.UNI_PLATFORM === 'h5'
const isApp = process.env.UNI_PLATFORM === 'app'
const WeappTailwindcssDisabled = isH5 || isApp
import uni from "@dcloudio/vite-plugin-uni";
import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite'
import tailwindcss from '@tailwindcss/postcss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from '@uni-helper/vite-plugin-uni-components'
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    // 改成 mts，则爆 uni is not a function
    AutoImport({
      imports: [
        'vue',
        'uni-app',
      ],
    }),
    Components({
      resolvers: [WotResolver()]
    }),
    uni(),
    UnifiedViteWeappTailwindcssPlugin(
      {
        rem2rpx: true,
        disabled: WeappTailwindcssDisabled
      }
    )
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(
          {
            base: __dirname
          }
        )
      ]
    }
  }
});
