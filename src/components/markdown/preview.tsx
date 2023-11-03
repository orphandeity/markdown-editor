import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectCurrentDocument } from '../../store/markdown/markdownSlice'
import { selectPreview, togglePreview } from '../../store/app/appSlice'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Eye, EyeOff } from 'lucide-react'

import * as styles from './markdown.css'

export default function Preview(
  props: React.HTMLProps<HTMLElement>
): JSX.Element {
  const currentDocument = useAppSelector(selectCurrentDocument)
  const preview = useAppSelector(selectPreview)
  const dispatch = useAppDispatch()

  return (
    <aside {...props} data-show={preview} className={styles.preview}>
      <header className={styles.header}>
        <h2 className={styles.heading}>preview</h2>

        <button
          className={styles.iconButton}
          onClick={() => dispatch(togglePreview())}
        >
          {preview ? <EyeOff width={16} /> : <Eye width={16} />}
        </button>
      </header>
      <Markdown className={styles.previewContent} remarkPlugins={[remarkGfm]}>
        {currentDocument.content}
      </Markdown>
    </aside>
  )
}
