import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  transform: 'translateX(-225px)',
  transition: 'all 0.4s ease-in-out',
  selectors: {
    '&[data-open="true"]': {
      transform: 'translateX(0)',
    },
  },
})
