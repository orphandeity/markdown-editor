import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  transform: 'translateX(-225px)',
  transition: 'transform 0.4s ease',
  selectors: {
    '&[data-open="true"]': {
      transform: 'translateX(0)',
    },
  },
})
