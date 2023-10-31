import { Document } from '../../App'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { format } from 'date-fns'
import Theme from '../theme'
import fileIcon from '../../assets/icon-document.svg'

import * as styles from './menu.css'
import * as fileItem from '../../styles/fileItem.css'

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [parent, enableAnimations] = useAutoAnimate()

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading}>my documents</h2>
        <button className={styles.primaryButton} onClick={onNewDocumentClick}>
          + New Document
        </button>
        <ul ref={parent} className={styles.fileList}>
          {documents.map((document) => (
            <li
              key={document.name}
              onClick={() => onDocumentSelect(document)}
              className={fileItem.container}
            >
              <img src={fileIcon} alt="" />
              <div className={fileItem.group}>
                <div className={fileItem.date}>
                  {format(Date.parse(document.createdAt), 'dd MMMM yyyy')}
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
