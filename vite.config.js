import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/main.ts', import.meta.url)),
      name: 'vite-template',
      fileName: 'vite-template',
      formats: ['es'],
    },
    target: 'esnext',
    minify: false,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    }
  },
  resolve: {
    alias: [
      { find: '@ns', replacement: fileURLToPath(new URL('./NetscriptDefinitions.d.ts', import.meta.url)) }
    ],
  },
})
