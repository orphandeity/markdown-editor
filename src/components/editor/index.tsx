import { type Document } from '../../App'
import { useState } from 'react'
import { Eye } from 'lucide-react'
import Preview from './preview'

import * as styles from './editor.css'

interface EditorProps {
  document: Document
}

export default function Editor({ document }: EditorProps): JSX.Element {
  const [markdown, setMarkdown] = useState<string>(() => document.content ?? '')

  return (
    <article className={styles.container}>
      <main className={styles.markdown}>
        <header className={styles.header}>
          <h2 className={styles.heading}>markdown</h2>
          <button className={styles.iconButton}>
            <Eye width={16} />
          </button>
        </header>
        <textarea
          className={styles.markdownEditor}
          onChange={(e) => setMarkdown(e.target.value)}
          value={markdown}
        ></textarea>
      </main>
      <Preview markdown={markdown} />
    </article>
  )
}
