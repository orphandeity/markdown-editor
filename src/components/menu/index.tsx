import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  createNewDocument,
  select,
  selectDocuments,
} from '../../store/markdown/markdownSlice'
import { format } from 'date-fns'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import fileIcon from '../../assets/icon-document.svg'
import DarkMode from '../theme'

import * as styles from './menu.css'
import * as fileItem from '../../styles/fileItem.css'

export default function Menu(): JSX.Element {
  const documents = useAppSelector(selectDocuments)
  const dispatch = useAppDispatch()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [parent, enableAnimations] = useAutoAnimate()

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading}>my documents</h2>
        <button
          className={styles.primaryButton}
          onClick={() => dispatch(createNewDocument())}
        >
          + New Document
        </button>
        <ul ref={parent} className={styles.fileList}>
          {documents.map((document) => (
            <li
              key={document.name}
              onClick={() => dispatch(select(document))}
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
      <DarkMode />
    </div>
  )
}
