import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

// filename
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

export const label = style({
  selectors: {
    [`${container} &`]: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
    },
  },
})

export const span = style({
  selectors: {
    [`${label} &`]: {
      fontSize: vars.fontSize.appBodySm,
      fontWeight: vars.fontWeight.light,
      color: vars.color[500],
      display: 'none',
      '@media': {
        'screen and (min-width: 768px)': {
          display: 'block',
        },
      },
    },
  },
})

export const input = style({
  selectors: {
    [`${label} &`]: {
      fontSize: vars.fontSize.appHeadingMd,
      color: vars.color[100],
      backgroundColor: vars.color[800],
      paddingBlockEnd: '3px',
      border: '1px solid transparent',
      transition: 'border-block-end-color 0.2s ease-in-out',
      cursor: 'pointer',
      caretColor: vars.color.orange,
    },

    [`${label} &::selection`]: {
      backgroundColor: vars.color.orangeSelection,
    },

    [`${label} &:focus`]: {
      borderBlockEndColor: vars.color[100],
      outline: 'none',
    },
  },
})
