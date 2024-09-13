import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      include: [/\.vue$/, /\.vue\?vue/],
      dirs: ['./src/components'],
      resolvers: [PrimeVueResolver()],
      directoryAsNamespace: true,
    }),
    AutoImport({
      include: [
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: [
        'vue',
        'vue-router',
        {
          'axios': [['default', 'axios']],
          'pinia': ['mapState', 'mapGetters', 'mapMutations', 'mapActions'],
          '@vueuse/integrations/useIDBKeyval': ['useIDBKeyval'],
          '@vueuse/core': ['useCloned', 'useTimeAgo'],
        }
      ],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
