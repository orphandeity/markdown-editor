import { Document } from '../../App'
import { formatDate } from '../../lib/utils'
import * as styles from './menu.css'
import * as fileItem from '../../styles/fileItem.css'
import { File } from 'lucide-react'

interface MenuProps {
  documents: Document[]
  onNewDocumentClick: () => void
  onThemeClick: () => void
  onDocumentSelect: (document: Document) => void
}

export default function Menu({
  documents,
  onNewDocumentClick,
  onThemeClick,
  onDocumentSelect,
}: MenuProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading}>my documents</h2>
        <button className={styles.primaryButton} onClick={onNewDocumentClick}>
          + New Document
        </button>
        <ul className={styles.fileList}>
          {documents.map((document) => (
            <li
              key={document.name}
              onClick={() => onDocumentSelect(document)}
              className={fileItem.container}
            >
              <File width={14} />
              <div className={fileItem.group}>
                <div className={fileItem.date}>
                  {formatDate(document.createdAt)}
                </div>
                <div className={fileItem.name}>{document.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={onThemeClick}>theme</button>
    </div>
  )
}
