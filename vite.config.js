import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfigPaths from 'vite-jsconfig-paths'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [react(), jsconfigPaths(), viteCompression()],
  server: {
    port: 8000
  }
})
