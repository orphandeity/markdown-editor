import { recipe } from '@vanilla-extract/recipes'
import { vars } from './theme.css'

export const button = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    border: 'none',
    fontSize: vars.fontSize.appHeadingMd,
    cursor: 'pointer',
    userSelect: 'none',
  },
  variants: {
    variant: {
      icon: {
        backgroundColor: 'transparent',
        color: vars.color[500],
        padding: 'auto',
        selectors: {
          '&:hover': {
            color: vars.color.orange,
          },
        },
      },
      primary: {
        backgroundColor: vars.color.orange,
        color: vars.color[100],
        borderRadius: vars.rounded,
        padding: '10px 16px',
        selectors: {
          '&:hover': {
            backgroundColor: vars.color.orangeHover,
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})