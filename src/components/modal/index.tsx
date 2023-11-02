import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  removeDocument,
  selectCurrentDocument,
} from '../../store/markdown/markdownSlice'
import * as Dialog from '@radix-ui/react-dialog'
import { Trash2 } from 'lucide-react'

import * as styles from './modal.css'

export default function DeleteDocument() {
  const currentDocument = useAppSelector(selectCurrentDocument)
  const dispatch = useAppDispatch()

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.iconButton}>
          <Trash2 />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
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
