import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  removeDocument,
  saveChanges,
  selectCurrentDocument,
  updateDocumentName,
} from '../../store/markdown/markdownSlice'
import { Trash2 } from 'lucide-react'
import logo from '../../assets/logo.svg'
import iconMenu from '../../assets/icon-menu.svg'
import iconSave from '../../assets/icon-save.svg'
import fileIcon from '../../assets/icon-document.svg'

import * as styles from './header.css'
import * as filename from './filename.css'
import { button } from '../../styles/button.css'

interface HeaderProps {
  onMenuOpen: () => void
}

export default function Header({ onMenuOpen }: HeaderProps): JSX.Element {
  const currentDocument = useAppSelector(selectCurrentDocument)
  const dispatch = useAppDispatch()

  return (
    <header className={styles.container}>
      <div className={styles.flexBox}>
        <button className={styles.menuButton} onClick={onMenuOpen}>
          <img src={iconMenu} alt="show menu" />
        </button>

        <img src={logo} alt="markdown" />

        <div className={styles.divider} />

        <div className={filename.container}>
          <img src={fileIcon} alt="" />

          <label className={filename.label}>
            <span className={filename.span}>Document Name</span>
            <input
              value={currentDocument.name}
              onChange={(e) => dispatch(updateDocumentName(e.target.value))}
              className={filename.input}
            />
          </label>
        </div>
      </div>
      <menu className={styles.flexBox}>
        <button
          onClick={() => dispatch(removeDocument(currentDocument))}
          className={button({ variant: 'icon' })}
        >
          <Trash2 />
        </button>
        <button
          onClick={() => dispatch(saveChanges(currentDocument))}
          className={button()}
        >
          <img src={iconSave} alt="" />
          <span>Save Changes</span>
        </button>
      </menu>
    </header>
  )
}
