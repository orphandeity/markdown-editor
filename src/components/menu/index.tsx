import { Document } from '../../App'
import { formatDate } from '../../lib/utils'
import * as styles from './menu.css'
import * as fileItem from '../../styles/fileItem.css'
import fileIcon from '../../assets/icon-document.svg'
import Theme from '../theme'

interface MenuProps {
  darkMode: boolean
  documents: Document[]
  onNewDocumentClick: () => void
  onThemeChange: () => void
  onDocumentSelect: (document: Document) => void
}

export default function Menu({
  darkMode,
  documents,
  onNewDocumentClick,
  onThemeChange,
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
              <img src={fileIcon} alt="" />
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
      <Theme darkMode={darkMode} onThemeChange={onThemeChange} />
    </div>
  )
}
