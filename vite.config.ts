/// <reference types="vitest" />

import { dirname, relative } from 'node:path'
import React from '@vitejs/plugin-react'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import { isDev, port, r } from './scripts/utils'
import packageJson from './package.json'

export const sharedConfig: UserConfig = {
  root: r('src'),
  resolve: {
    alias: {
      '~/': `${r('src')}/`,
    },
  },
  define: {
    __DEV__: isDev,
    __NAME__: JSON.stringify(packageJson.name),
    __vite_plugin_react_preamble_installed__: true,
  },
  plugins: [
    React(),
    AutoImport({
      imports: [
        'vue',
        {
          'webextension-polyfill': [['*', 'browser']],
        },
      ],
      dts: r('src/auto-imports.d.ts'),
    }),

    // https://github.com/antfu/unplugin-icons
    Icons(),

    // https://github.com/unocss/unocss
    UnoCSS(),

    {
      name: 'assets-rewrite',
      enforce: 'post',
      apply: 'build',
      transformIndexHtml(html, { path }) {
        return html.replace(
          /"\/assets\//g,
          `"${relative(dirname(path), '/assets')}/`
        )
      },
    },
  ],
  optimizeDeps: {
    include: ['react', 'zustand', 'webextension-polyfill'],
  },
  // optimizeDeps: {
  //   include: ['vue', '@vueuse/core', 'webextension-polyfill'],
  //   exclude: ['vue-demi'],
  // },
}

export default defineConfig(({ command }) => ({
  ...sharedConfig,
  base: command === 'serve' ? `http://localhost:${port}/` : '/dist/',
  server: {
    port,
    hmr: {
      host: 'localhost',
    },
  },
  build: {
    watch: isDev ? {} : undefined,
    outDir: r('extension/dist'),
    emptyOutDir: false,
    sourcemap: isDev ? 'inline' : false,
    // https://developer.chrome.com/docs/webstore/program_policies/#:~:text=Code%20Readability%20Requirements
    terserOptions: {
      mangle: false,
    },
    rollupOptions: {
      input: {
        options: r('src/options/index.html'),
        popup: r('src/popup/index.html'),
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
}))
