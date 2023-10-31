import { type Document } from '../../App'
import logo from '../../assets/logo.svg'
import iconMenu from '../../assets/icon-menu.svg'
import iconSave from '../../assets/icon-save.svg'
import { Trash2 } from 'lucide-react'
import fileIcon from '../../assets/icon-document.svg'

import * as styles from './header.css'
import * as filename from './filename.css'
import { button } from '../../styles/button.css'

interface HeaderProps {
  document: Document
  onMenuOpen: () => void
}

export default function Header({
  document,
  onMenuOpen,
}: HeaderProps): JSX.Element {
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
              type="text"
              value={document.name}
              className={filename.input}
            />
          </label>
        </div>
      </div>
      <menu className={styles.flexBox}>
        <button className={button({ variant: 'icon' })}>
          <Trash2 />
        </button>
        <button className={button()}>
          <img src={iconSave} alt="" />
          <span>Save Changes</span>
        </button>
      </menu>
    </header>
  )
}
