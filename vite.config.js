import { defineConfig } from 'vite'

export default defineConfig({
  // server: {
  //   watch: {
  //     ignored: ['!**/node_modules/.vite/**']
  //   }
  // },
  // The watched package must be excluded from optimization,
  // so that it can appear in the dependency graph and trigger hot reload.
  optimizeDeps: {
    force: true,
    // exclude: ['video.js']
  }
})
