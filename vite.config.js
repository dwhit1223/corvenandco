import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        monthlyBookkeeping: fileURLToPath(
          new URL('./monthly-bookkeeping/index.html', import.meta.url)
        ),
        bookkeepingCleanup: fileURLToPath(
          new URL('./bookkeeping-cleanup/index.html', import.meta.url)
        ),
      },
    },
  },
})
