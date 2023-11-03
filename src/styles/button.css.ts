import { recipe } from '@vanilla-extract/recipes'
import { vars } from './theme.css'

export const button = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    border: 'none',
    borderRadius: vars.rounded,
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
          '&:focus': {
            outline: 'none',
          },
        },
      },
      primary: {
        width: '100%',
        padding: '10px',
        backgroundColor: vars.color.orange,
        color: vars.color[100],
        outlineOffset: '-2px',
        outline: 'transparent solid 2px',
        transitionProperty: 'outline-offset, outline-color',
        transitionDuration: '300ms',
        transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        selectors: {
          '&:hover': {
            backgroundColor: vars.color.orangeHover,
          },
          '&:focus': {
            outlineColor: vars.color.orangeHover,
            outlineOffset: '2px',
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
