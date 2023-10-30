import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  transform: 'translateX(-225px)',
  selectors: {
    '&[data-open="true"]': {
      transform: 'translateX(0)',
    },
  },
})
