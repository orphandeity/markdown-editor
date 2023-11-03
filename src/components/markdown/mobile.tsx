import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectPreview, togglePreview } from '../../store/app/appSlice'
import {
  selectCurrentDocument,
  updateCurrentDocument,
} from '../../store/markdown/markdownSlice'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Eye, EyeOff } from 'lucide-react'

import * as styles from './markdown.css'

export default function MobileEditor(): JSX.Element {
  const preview = useAppSelector(selectPreview)
  const currentDocument = useAppSelector(selectCurrentDocument)
  const dispatch = useAppDispatch()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [parent, enableAnimations] = useAutoAnimate()

  return (
    <main ref={parent} className={styles.mobile}>
      <header className={styles.header}>
        <h2 className={styles.heading}>{preview ? 'preview' : 'markdown'}</h2>
        <button
          className={styles.iconButton}
          onClick={() => dispatch(togglePreview())}
        >
          {preview ? <EyeOff width={16} /> : <Eye width={16} />}
        </button>
      </header>
      {preview ? (
        <Markdown className={styles.previewContent} remarkPlugins={[remarkGfm]}>
          {currentDocument.content}
        </Markdown>
      ) : (
        <textarea
          className={styles.markdownEditor}
          onChange={(e) => dispatch(updateCurrentDocument(e.target.value))}
          value={currentDocument.content}
        />
      )}
    </main>
  )
}
