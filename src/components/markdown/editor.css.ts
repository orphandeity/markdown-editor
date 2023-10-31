import { style } from '@vanilla-extract/css'
import { button } from '../../styles/button.css'
import { vars } from '../../styles/theme.css'

export const container = style({
  display: 'flex',
  flexFlow: 'row nowrap',
  width: '100vw',
  backgroundColor: vars.editor.background,
  color: vars.editor.text,
})

export const iconButton = button({ variant: 'icon' })

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxHeight: '42px',
  width: 'clamp(50vw, 100%, 100%)',
  padding: '13px 16px',
  fontFamily: vars.fontFamily.sans,
  backgroundColor: vars.editor.background_on,
  color: vars.editor.text_light,
})

export const heading = style({
  fontSize: vars.fontSize.appHeadingSm,
  letterSpacing: vars.appHeadingSmLtrSp,
  fontWeight: vars.fontWeight.regular,
  textTransform: 'uppercase',
})

export const markdown = style({
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 72px)',
})

export const markdownEditor = style({
  flex: '1 1 auto',
  width: '50vw',
  fontFamily: vars.fontFamily.mono,
  fontSize: vars.fontSize.previewP,
  lineHeight: vars.previewLineSp,
  color: vars.editor.text,
  backgroundColor: vars.editor.background,
  padding: '9px 16px',
  border: 'none',
  resize: 'none',
})

export const preview = style({
  height: 'calc(100vh - 72px)',
  fontFamily: vars.fontFamily.slab,
  width: '100%',
  borderLeft: `1px solid ${vars.editor.border}`,
})

export const previewContent = style({
  width: '50vw',
  marginInline: 'auto',
  padding: '24px',
  overflow: 'auto',
})
