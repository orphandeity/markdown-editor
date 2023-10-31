import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const SwitchRoot = style({
  position: 'relative',
  width: '48px',
  height: '24px',
  borderRadius: '9999px',
  border: 'none',
  backgroundColor: vars.color[600],
  cursor: 'pointer',
})

export const SwitchThumb = style({
  display: 'block',
  width: '12px',
  height: '12px',
  borderRadius: '9999px',
  backgroundColor: vars.color[100],
  transition: 'transform 100ms',
  transform: 'translateX(30px)',
  willChange: 'transform',
  selectors: {
    '&[data-state="checked"]': {
      transform: 'translateX(6px)',
    },
  },
})

export const label = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: vars.color[600],
  cursor: 'pointer',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
})

export const dark = style({
  selectors: {
    [`${label}[data-dark="true"] &`]: {
      color: vars.color[100],
    },
  },
})

export const light = style({
  selectors: {
    [`${label}[data-dark="false"] &`]: {
      color: vars.color[100],
    },
  },
})
