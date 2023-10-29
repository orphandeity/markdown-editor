import { style } from '@vanilla-extract/css'
import { button } from '../../styles/button.css'
import { vars } from '../../styles/theme.css'

export const container = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  backgroundColor: vars.editor.background,
  color: vars.editor.text,
})

export const iconButton = button({ variant: 'icon' })

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '13px 16px',
  fontFamily: vars.fontFamily.sans,
  backgroundColor: vars.editor.background_on,
  color: vars.editor.text_light,
})

export const heading = style({
  fontSize: vars.fontSize.appHeadingSm,
  fontWeight: vars.fontWeight.regular,
  textTransform: 'uppercase',
})

export const markdown = style({
  height: 'calc(100vh - 72px)',
})

export const markdownEditor = style({
  width: '100%',
  height: '100%',
  fontFamily: vars.fontFamily.mono,
  color: vars.editor.text,
  backgroundColor: vars.editor.background,
  padding: '9px 16px',
  border: 'none',
  resize: 'none',
})

export const preview = style({
  fontFamily: vars.fontFamily.slab,
  borderLeft: `1px solid ${vars.editor.border}`,
  height: 'calc(100vh - 72px)',
})

export const previewContent = style({
  padding: '24px',
  overflow: 'auto',
})
