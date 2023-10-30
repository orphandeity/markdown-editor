import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import * as styles from './editor.css'
import { EyeOff } from 'lucide-react'

interface PreviewProps {
  markdown: string
}

export default function Preview({
  markdown,
  ...props
}: PreviewProps & React.HTMLProps<HTMLElement>): JSX.Element {
  return (
    <aside {...props} className={styles.preview}>
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
  )
}
