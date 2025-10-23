import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/// <reference types="vitest/config" />
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    silent: false,
  },
})
