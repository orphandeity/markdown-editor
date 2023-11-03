import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'
import { button } from '../../styles/button.css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: vars.color[800],
  paddingRight: '8px',
  '@media': {
    'screen and (min-width: 768px)': {
      paddingRight: '16px',
    },
  },
})

export const menuButton = style({
  aspectRatio: '1/1',
  width: '56px',
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
  '@media': {
    'screen and (min-width: 768px)': {
      width: '72px',
    },
  },
})

export const flexBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
})

/**
 * Left side of header
 */

export const logo = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'block',
    },
  },
})

export const divider = style({
  selectors: {
    [`${flexBox} &`]: {
      width: '1px',
      height: '40px',
      backgroundColor: vars.color[600],
      display: 'none',
      '@media': {
        'screen and (min-width: 1024px)': {
          display: 'block',
        },
      },
    },
  },
})

/**
 * Right side of header
 */

export const saveButton = style([
  button(),
  {
    width: '40px',
    '@media': {
      'screen and (min-width: 768px)': {
        width: 'auto',
      },
    },
  },
])

export const saveButtonText = style({
  selectors: {
    [`${saveButton} &`]: {
      display: 'none',
      '@media': {
        'screen and (min-width: 768px)': {
          display: 'inline',
        },
      },
    },
  },
})
