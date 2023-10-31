import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Eye, EyeOff } from 'lucide-react'

import * as styles from './markdown.css'

interface PreviewProps {
  markdown: string
  showPreview: boolean
  onShowPreview: () => void
}

export default function Preview({
  markdown,
  showPreview,
  onShowPreview,
  ...props
}: PreviewProps & React.HTMLProps<HTMLElement>): JSX.Element {
  return (
    <aside {...props} data-show={showPreview} className={styles.preview}>
      <header className={styles.header}>
        <h2 className={styles.heading}>preview</h2>

        <button className={styles.iconButton} onClick={onShowPreview}>
          {showPreview ? <EyeOff width={16} /> : <Eye width={16} />}
        </button>
      </header>
      <Markdown className={styles.previewContent} remarkPlugins={[remarkGfm]}>
        {markdown}
      </Markdown>
    </aside>
  )
}
