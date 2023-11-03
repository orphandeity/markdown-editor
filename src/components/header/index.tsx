import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectMenu, toggleMenu } from '../../store/app/appSlice'
import {
  saveChanges,
  selectCurrentDocument,
  updateDocumentName,
} from '../../store/markdown/markdownSlice'
import DeleteDocument from '../modal'
import logo from '../../assets/logo.svg'
import iconMenu from '../../assets/icon-menu.svg'
import iconClose from '../../assets/icon-close.svg'
import iconSave from '../../assets/icon-save.svg'
import fileIcon from '../../assets/icon-document.svg'

import * as styles from './header.css'
import * as filename from './filename.css'

export default function Header(): JSX.Element {
  const menu = useAppSelector(selectMenu)
  const currentDocument = useAppSelector(selectCurrentDocument)
  const dispatch = useAppDispatch()

  return (
    <header className={styles.container}>
      <div className={styles.flexBox}>
        <button
          className={styles.menuButton}
          onClick={() => dispatch(toggleMenu())}
        >
          <img src={menu ? iconClose : iconMenu} alt="toggle menu" />
        </button>

        <img src={logo} alt="markdown" className={styles.logo} />

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
          className={styles.saveButton}
        >
          <img src={iconSave} alt="" />
          <span className={styles.saveButtonText}>Save Changes</span>
        </button>
      </menu>
    </header>
  )
}
