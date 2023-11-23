import {
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from 'unocss'
import { defineConfig } from 'unocss/vite'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      fonts: {
        sans: ['TF2 Build'],
      },
    }),
  ],
  transformers: [transformerDirectives()],

  theme: {
    colors: {
      quality: {
        normal: '#B2B2B2',
        unique: '#FFD700',
        vintage: '#476291',
        genuine: '#4D7455',
        strange: '#CF6A32',
        unusual: '#8650AC',
        haunted: '#38F3AB',
        collectors: '#AA0000',
        decorated: {
          DEFAULT: '#FAFAFA',
          civilian: '#B0C3D9',
          freelance: '#5E98D9',
          mercenary: '#4B69FF',
          commando: '#8847FF',
          assassin: '#D32CE6',
          elite: '#EB4B4B',
        },
        community: '#70B04A',
        selfmade: '#70B04A',
        valve: '#A50F79',
        unset: '#B2B2B2',
      },
    },
  },
})
