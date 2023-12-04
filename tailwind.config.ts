import type { Config } from 'tailwindcss/types/config'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // HACK: scale bugfix sizing according to https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
    spacing: {
      0: '0px',
      px: '1px',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
    },
    // HACK: fontSize rem to em, needs font-size of 16px on outer container https://github.com/tailwindlabs/tailwindcss/blob/6dfcdd100759c7d4406d25ba35c6b269014a9a96/stubs/config.full.js#L79
    fontSize: {
      xs: ['0.75em', { lineHeight: '1em' }],
      sm: ['0.875em', { lineHeight: '1.25em' }],
      base: ['1em', { lineHeight: '1.5em' }],
      lg: ['1.125em', { lineHeight: '1.75em' }],
      xl: ['1.25em', { lineHeight: '1.75em' }],
      '2xl': ['1.5em', { lineHeight: '2em' }],
      '3xl': ['1.875em', { lineHeight: '2.25em' }],
      '4xl': ['2.25em', { lineHeight: '2.5em' }],
      '5xl': ['3em', { lineHeight: '1' }],
      '6xl': ['3.75em', { lineHeight: '1' }],
      '7xl': ['4.5em', { lineHeight: '1' }],
      '8xl': ['6em', { lineHeight: '1' }],
      '9xl': ['8em', { lineHeight: '1' }],
    },
    // or (other works until you forget font-base)
    // fontSize: {
    //   xs: ['12px', { lineHeight: '1em' }],
    //   sm: ['14px', { lineHeight: '1.25em' }],
    //   base: ['16px', { lineHeight: '1.5em' }],
    //   lg: ['18px', { lineHeight: '1.75em' }],
    //   xl: ['20px', { lineHeight: '1.75em' }],
    //   '2xl': ['24px', { lineHeight: '2em' }],
    //   '3xl': ['30px', { lineHeight: '2.25em' }],
    //   '4xl': ['36px', { lineHeight: '2.5em' }],
    //   '5xl': ['48px', { lineHeight: '1' }],
    //   '6xl': ['60px', { lineHeight: '1' }],
    //   '7xl': ['72px', { lineHeight: '1' }],
    //   '8xl': ['96px', { lineHeight: '1' }],
    //   '9xl': ['128px', { lineHeight: '1' }],
    // },
    extend: {
      fontSize: {
        base: '16px',
      },
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
