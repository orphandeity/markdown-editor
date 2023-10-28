import { globalStyle } from '@vanilla-extract/css'
import { vars } from './theme.css'

globalStyle('html, body', {
  fontFamily: vars.fontFamily.sans,
})

// reset styles inspired by Josh Comeau
// https://www.joshwcomeau.com/css/custom-css-reset/
globalStyle('*', {
  margin: '0',
  padding: '0',
  lineHeight: 'calc(1em + 0.5rem)',
})

globalStyle('*::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('body', {
  WebkitFontSmoothing: 'antialiased',
})

globalStyle('input, button, textarea, select', {
  font: 'inherit',
})

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
})

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
})

globalStyle(':root', {
  // resets stacking context for react portals
  isolation: 'isolate',
})
