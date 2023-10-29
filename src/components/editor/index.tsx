import { type Document } from '../../App'
import { Eye, EyeOff } from 'lucide-react'
import * as styles from './editor.css'

interface EditorProps {
  document: Document | null
}

export default function Editor({ document }: EditorProps): JSX.Element {
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
          value={document?.content}
          className={styles.markdownEditor}
        ></textarea>
      </main>
      <aside className={styles.preview}>
        <header className={styles.header}>
          <h2 className={styles.heading}>preview</h2>
          <button className={styles.iconButton}>
            <EyeOff width={16} />
          </button>
        </header>
        <div className={styles.previewContent}></div>
      </aside>
    </article>
  )
}
