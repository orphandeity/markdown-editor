import { globalStyle } from '@vanilla-extract/css'
import { vars } from './theme.css'

globalStyle('html, body', {
  fontFamily: vars.fontFamily.sans,
})
