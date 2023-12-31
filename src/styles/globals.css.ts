import { globalStyle } from '@vanilla-extract/css'
import { vars } from './theme.css'

globalStyle('html, body', {
  fontFamily: vars.fontFamily.sans,
  maxHeight: '100vh',
  overflow: 'hidden',
})

// reset styles inspired by Josh Comeau
// https://www.joshwcomeau.com/css/custom-css-reset/
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: '0',
  padding: '0',
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
