import { style } from '@vanilla-extract/css'
import { vars } from './theme.css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  color: vars.color[100],
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      color: vars.color.orange,
    },
  },
})

export const group = style({
  selectors: {
    [`${container} &`]: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
    },
  },
})

export const date = style({
  selectors: {
    [`${group} &`]: {
      fontSize: vars.fontSize.appBodySm,
      fontWeight: vars.fontWeight.light,
      color: vars.color[500],
    },
  },
})

export const name = style({
  selectors: {
    [`${group} &`]: {
      fontSize: vars.fontSize.appHeadingMd,
    },
  },
})
