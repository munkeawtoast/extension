import type { Config } from 'tailwindcss/types/config'
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      fontFamily: {
        sans: ['TF2 Build', 'sans-serif'],
      },
      colors: {
        card: {
          header: '#41454D',
          body: '#555',
          footer: '#272727',
        },
        currency: {
          key: '#D6A62C',
          metal: '#C6C6C6',
        },
        component: {
          border: '#5F5F5F',
          content: '#2A2A2A',
        },
        item_group: {
          header: '#111',
          body: '#323232',
        },
        tf2_settings: {
          body: '#282526',
          header: '#BB5741',
          title: '#EAE3CD',
          label: '#746B5F',
        },

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
  },
} satisfies Config
