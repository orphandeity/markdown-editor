import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css'

const root = createGlobalTheme(':root', {
  color: {
    1000: 'hsl(225, 9%, 9%)',
    900: 'hsl(216, 8%, 12%)',
    800: 'hsl(220, 7%, 18%)',
    700: 'hsl(216, 9%, 23%)',
    600: 'hsl(216, 8%, 38%)',
    500: 'hsl(213, 4%, 51%)',
    400: 'hsl(222, 9%, 78%)',
    300: 'hsl(0, 0%, 89%)',
    200: 'hsl(0, 0%, 96%)',
    100: 'hsl(0, 0%, 100%)',
    orange: 'hsl(13, 75%, 58%)',
    orangeHover: 'hsl(21, 86%, 67%)',
    orangeSelection: 'hsla(21, 86%, 67%, 0.4)',
    overlay: 'hsla(216, 8%, 12%, 0.7)',
    shadow1: 'hsla(225 9% 9%, 35%)',
    shadow2: 'hsla(225 9% 9%, 20%)',
  },
  fontFamily: {
    sans: `'Roboto', sans-serif`,
    slab: `'Roboto Slab Variable', sans-serif`,
    mono: `'Roboto Mono Variable', sans-serif`,
  },
  fontSize: {
    appHeadingMd: '15px',
    appHeadingSm: '14px',
    appBodySm: '13px',
    previewH1: '32px',
    previewH2: '28px',
    previewH3: '24px',
    previewH4: '20px',
    previewH5: '16px',
    previewH6: '14px',
    previewP: '14px',
  },
  fontWeight: {
    light: '300',
    regular: '400',
  },
  rounded: '4px',
  appHeadingSmLtrSp: '2px',
  previewLineSp: '24px',
})

const editor = createThemeContract({
  background: null,
  background_on: null,
  border: null,
  text: null,
  text_light: null,
})

export const light = createTheme(editor, {
  background: root.color[100],
  background_on: root.color[200],
  border: root.color[300],
  text: root.color[700],
  text_light: root.color[500],
})

export const dark = createTheme(editor, {
  background: root.color[1000],
  background_on: root.color[900],
  border: root.color[600],
  text: root.color[100],
  text_light: root.color[400],
})

export const vars = { ...root, editor }
