import { globalStyle, style } from '@vanilla-extract/css'
import { button } from '../../styles/button.css'
import { vars } from '../../styles/theme.css'

export const container = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  width: '100vw',
  backgroundColor: vars.editor.background,
  color: vars.editor.text,
  selectors: {
    '&[data-show="true"]': {
      gridTemplateColumns: '1fr',
    },
  },
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

export const mobile = style({
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100svh - 56px)',
  width: '100vw',
  backgroundColor: vars.editor.background,
  color: vars.editor.text,
})

export const markdown = style({
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 72px)',
})

export const markdownEditor = style({
  alignSelf: 'center',
  flex: '1 1 auto',
  width: '100%',
  maxWidth: '672px',
  padding: '9px 16px',
  border: 'none',
  borderRadius: vars.rounded,
  fontFamily: vars.fontFamily.mono,
  fontSize: vars.fontSize.previewP,
  lineHeight: vars.previewLineSp,
  color: vars.editor.text,
  backgroundColor: vars.editor.background,
  caretColor: vars.color.orange,
  resize: 'none',
  '@media': {
    'screen and (min-width: 768px)': {
      width: '50vw',
    },
  },
  selectors: {
    '&:focus': {
      outline: 'none',
    },
  },
})

export const preview = style({
  height: 'calc(100vh - 56px)',
  width: '100%',
  borderLeft: `1px solid ${vars.editor.border}`,
  transition: 'border-color 0.6s ease-in-out',
  selectors: {
    '&[data-show="true"]': {
      borderColor: 'transparent',
    },
  },
  '@media': {
    'screen and (max-width: 768px)': {
      borderLeft: 'none',
      height: 'calc(100vh - 72px)',
    },
  },
})

export const previewContent = style({
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '20px',
  width: '100%',
  maxWidth: '672px',
  height: '100%',
  marginInline: 'auto',
  padding: '24px',
  paddingBottom: '63px',
  fontFamily: vars.fontFamily.slab,
  fontSize: vars.fontSize.previewP,

  color: vars.editor.text_light,
  overflow: 'auto',
})

/**
 * Global styles for preview content
 */

globalStyle(
  `
    ${previewContent} h1,
    ${previewContent} h2,
    ${previewContent} h3,
    ${previewContent} h4,
    ${previewContent} h5,
    ${previewContent} code
  `,
  { color: vars.editor.text }
)

globalStyle(`${previewContent} h1`, {
  fontSize: vars.fontSize.previewH1,
})

globalStyle(`${previewContent} h2`, {
  fontSize: vars.fontSize.previewH2,
  fontWeight: vars.fontWeight.light,
})

globalStyle(`${previewContent} h3`, {
  fontSize: vars.fontSize.previewH3,
})

globalStyle(`${previewContent} h4`, {
  fontSize: vars.fontSize.previewH4,
})

globalStyle(`${previewContent} h5`, {
  fontSize: vars.fontSize.previewH5,
})

globalStyle(`${previewContent} h6`, {
  fontSize: vars.fontSize.previewH6,
  color: vars.color.orange,
})

globalStyle(
  `
    ${previewContent} p,
    ${previewContent} li,
    ${previewContent} code,
    ${previewContent} pre
  `,
  { lineHeight: vars.previewLineSp }
)

globalStyle(`${previewContent} a`, {
  color: 'inherit',
})

globalStyle(`${previewContent} pre`, {
  whiteSpace: 'pre-wrap',
})

globalStyle(
  `
    ${previewContent} ul,
    ${previewContent} ol,
    ${previewContent} menu
  `,
  {
    listStylePosition: 'inside',
    display: 'flex',
    flexFlow: 'column nowrap',
    gap: '4px',
  }
)

globalStyle(`${previewContent} ul li::marker`, {
  color: vars.color.orange,
  content: "'\u2022'",
  fontSize: '0.75em',
})

globalStyle(`${previewContent} blockquote`, {
  padding: '24px',
  borderRadius: vars.rounded,
  borderLeft: `${vars.color.orange} solid 4px`,
  backgroundColor: vars.editor.background_on,
  color: vars.editor.text,
  fontWeight: vars.fontWeight.bold,
})

globalStyle(`${previewContent} pre`, {
  padding: '24px',
  borderRadius: vars.rounded,
  backgroundColor: vars.editor.background_on,
  color: vars.editor.text,
})
