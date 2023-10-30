import { type Document } from '../../App'
import { useState } from 'react'
import Editor from './editor'
import Preview from './preview'

import * as styles from './editor.css'

interface EditorProps {
  document: Document
}

export default function MarkdownEditor({ document }: EditorProps): JSX.Element {
  const [markdown, setMarkdown] = useState<string>(() => document.content ?? '')

  return (
    <article className={styles.container}>
      <Editor markdown={markdown} onUpdateMarkdown={setMarkdown} />
      <Preview markdown={markdown} />
    </article>
  )
}
