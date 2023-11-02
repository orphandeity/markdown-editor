import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  removeDocument,
  selectCurrentDocument,
} from '../../store/markdown/markdownSlice'
import { dark, light } from '../../styles/theme.css'
import * as Dialog from '@radix-ui/react-dialog'
import { Trash2 } from 'lucide-react'

import * as styles from './modal.css'
import { selectTheme } from '../../store/theme/themeSlice'

export default function DeleteDocument() {
  const currentDocument = useAppSelector(selectCurrentDocument)
  const darkMode = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.iconButton}>
          <Trash2 />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`${styles.overlay} ${darkMode ? dark : light}`}
        />
        <Dialog.Content
          className={`${styles.content} ${darkMode ? dark : light}`}
        >
          <Dialog.Title className={styles.title} asChild>
            <h1>Delete this document?</h1>
          </Dialog.Title>
          <Dialog.Description className={styles.description} asChild>
            <p>
              Are you sure you want to delete the{' '}
              <span>'{currentDocument.name}'</span> document and its contents?
              <br />
              This action cannot be reversed.
            </p>
          </Dialog.Description>
          <Dialog.Close asChild>
            <button
              onClick={() => dispatch(removeDocument(currentDocument))}
              className={styles.primaryButton}
            >
              Confirm & Delete
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
