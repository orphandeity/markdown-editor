import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  height: '100dvh',
  transform: 'translateX(-250px)',
  transition: 'transform 0.4s ease',
  selectors: {
    '&[data-open="true"]': {
      transform: 'translateX(0)',
    },
  },
})
