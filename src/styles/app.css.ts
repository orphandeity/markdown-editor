import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  height: '100svh',
  transform: 'translateX(-250px)',
  transition: 'transform 0.4s ease',
  '@media': {
    'screen and (min-width: 768px)': {
      height: '100vh',
    },
  },
  selectors: {
    '&[data-open="true"]': {
      transform: 'translateX(0)',
    },
  },
})
