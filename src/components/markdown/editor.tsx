import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  selectCurrentDocument,
  updateCurrentDocument,
} from '../../store/markdown/markdownSlice'

import * as styles from './markdown.css'

export default function Editor(): JSX.Element {
  const currentDocument = useAppSelector(selectCurrentDocument)
  const dispatch = useAppDispatch()

  return (
    <main className={styles.markdown}>
      <header className={styles.header}>
        <h2 className={styles.heading}>markdown</h2>
      </header>
      <textarea
        className={styles.markdownEditor}
        onChange={(e) => dispatch(updateCurrentDocument(e.target.value))}
        value={currentDocument.content}
      />
    </main>
  )
}
