import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/curriculo/',
    plugins: [vue()],
    server: {
        usePolling: true
    },
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ["mixed-decls", "color-functions", "global-builtin", "import"],
            },
        },
    }
})