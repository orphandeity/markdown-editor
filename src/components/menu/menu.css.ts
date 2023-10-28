import { style } from '@vanilla-extract/css'
import { button } from '../../styles/button.css'
import { vars } from '../../styles/theme.css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh',
  padding: '27px 24px 24px',
  backgroundColor: vars.color[900],
  color: vars.color[500],
})

export const heading = style({
  selectors: {
    [`${container} &`]: {
      fontSize: vars.fontSize.appHeadingSm,
      fontWeight: vars.fontWeight.regular,
      textTransform: 'uppercase',
    },
  },
})

export const primaryButton = style([
  button(),
  {
    marginTop: '29px',
  },
])

export const fileList = style({
  marginTop: '24px',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '26px',
})
