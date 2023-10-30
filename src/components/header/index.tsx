import { type Document } from '../../App'
import logo from '../../assets/logo.svg'
import iconMenu from '../../assets/icon-menu.svg'
import iconSave from '../../assets/icon-save.svg'
import { Trash2 } from 'lucide-react'
import fileIcon from '../../assets/icon-document.svg'

import * as styles from './header.css'
import * as fileItem from '../../styles/fileItem.css'
import { button } from '../../styles/button.css'
import { formatDate } from '../../lib/utils'

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
        <div className={fileItem.container}>
          <img src={fileIcon} alt="" />
          <div className={fileItem.group}>
            <div className={fileItem.date}>
              {document ? formatDate(document.createdAt) : ''}
            </div>
            <div className={fileItem.name}>{document?.name}</div>
          </div>
        </div>
      </div>
      <menu className={styles.flexBox}>
        <button className={button({ variant: 'icon' })}>
          <Trash2 width={18} />
        </button>
        <button className={button()}>
          <img src={iconSave} alt="" />
          <span>Save Changes</span>
        </button>
      </menu>
    </header>
  )
}
