import { Document } from '../../App'
import * as styles from './menu.css'
import * as fileItem from '../../styles/fileItem.css'
import { File } from 'lucide-react'

interface MenuProps {
  documents: Document[]
  onNewDocumentClick: () => void
  onThemeClick: () => void
}

export default function Menu({
  documents,
  onNewDocumentClick,
  onThemeClick,
}: MenuProps): JSX.Element {
  function formatDate(date: string): string {
    const parts = date.split('-')

    const inputDate = new Date(
      Number(parts[2]),
      Number(parts[0]) - 1,
      Number(parts[1])
    )

    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(inputDate)

    return formattedDate
  }

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading}>my documents</h2>
        <button className={styles.primaryButton} onClick={onNewDocumentClick}>
          + New Document
        </button>
        <ul className={styles.fileList}>
          {documents.map((document) => (
            <li key={document.name} className={fileItem.container}>
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
