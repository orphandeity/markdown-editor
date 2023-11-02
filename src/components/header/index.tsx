import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  saveChanges,
  selectCurrentDocument,
  updateDocumentName,
} from '../../store/markdown/markdownSlice'
import logo from '../../assets/logo.svg'
import iconMenu from '../../assets/icon-menu.svg'
import iconClose from '../../assets/icon-close.svg'
import iconSave from '../../assets/icon-save.svg'
import fileIcon from '../../assets/icon-document.svg'

import * as styles from './header.css'
import * as filename from './filename.css'
import { button } from '../../styles/button.css'
import DeleteDocument from '../modal'

interface HeaderProps {
  isOpen: boolean
  onMenuOpen: () => void
}

export default function Header({
  isOpen,
  onMenuOpen,
}: HeaderProps): JSX.Element {
  const currentDocument = useAppSelector(selectCurrentDocument)
  const dispatch = useAppDispatch()

  return (
    <header className={styles.container}>
      <div className={styles.flexBox}>
        <button className={styles.menuButton} onClick={onMenuOpen}>
          <img src={isOpen ? iconClose : iconMenu} alt="toggle menu" />
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
        <DeleteDocument />

        <button
          tabIndex={0}
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
