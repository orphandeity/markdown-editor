import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: vars.color[800],
  paddingRight: '16px',
})

export const menuButton = style({
  aspectRatio: '1/1',
  width: '72px',
  display: 'grid',
  placeItems: 'center',
  backgroundColor: vars.color[700],
  border: 'none',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.orange,
    },
  },
})

export const flexBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
})

export const divider = style({
  selectors: {
    [`${flexBox} &`]: {
      width: '1px',
      height: '40px',
      backgroundColor: vars.color[600],
    },
  },
})
