import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'
import { button } from '../../styles/button.css'

const overlayShow = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)',
  },
  to: {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
})

export const overlay = style({
  backgroundColor: vars.editor.overlay,
  position: 'fixed',
  inset: 0,
  animationName: overlayShow,
  animationDuration: '150ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  backgroundColor: vars.editor.background_on,
  borderRadius: vars.rounded,
  boxShadow:
    'hsla(0, 0%, 0%, 0.35) 0px 10px 38px -10px, hsla(0, 0%, 0%, 0.2) 0px 10px 20px -15px',
  outline: 'hsla(0, 0%, 0%, 0.2) solid 1px',
  maxWidth: '343px',
  padding: '24px',
  width: '90vw',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  animationName: contentShow,
  animationDuration: '150ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  selectors: {
    '&:focus': {
      outline: 'hsla(0, 0%, 0%, 0.2) solid 1px',
    },
  },
})

export const title = style({
  color: vars.editor.text,
  fontFamily: vars.fontFamily.slab,
  fontSize: vars.fontSize.previewH4,
})

export const description = style({
  color: vars.editor.text_light,
  fontFamily: vars.fontFamily.slab,
  fontSize: vars.fontSize.previewP,
  lineHeight: vars.previewLineSp,
})

export const iconButton = button({ variant: 'icon' })

export const primaryButton = style([
  button({ variant: 'primary' }),
  {
    transitionDelay: '200ms',
  },
])
