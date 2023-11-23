import { defineConfig } from 'unocss/vite'
import { presetIcons, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  transformers: [transformerDirectives()],
})
