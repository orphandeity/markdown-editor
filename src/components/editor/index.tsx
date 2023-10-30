import { type Document } from '../../App'
import { useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Eye, EyeOff } from 'lucide-react'

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
      <aside className={styles.preview}>
        <header className={styles.header}>
          <h2 className={styles.heading}>preview</h2>
          <button className={styles.iconButton}>
            <EyeOff width={16} />
          </button>
        </header>
        <Markdown className={styles.previewContent} remarkPlugins={[remarkGfm]}>
          {markdown}
        </Markdown>
      </aside>
    </article>
  )
}
