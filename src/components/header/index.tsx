import logo from '../../assets/logo.svg'
import iconMenu from '../../assets/icon-menu.svg'
import iconSave from '../../assets/icon-save.svg'
import { File, Trash2 } from 'lucide-react'

import * as styles from './header.css'
import * as fileItem from '../../styles/fileItem.css'
import { button } from '../../styles/button.css'

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.flexBox}>
        <button className={styles.menuButton}>
          <img src={iconMenu} alt="show menu" />
        </button>
        <img src={logo} alt="markdown" />
        <div className={styles.divider} />
        <div className={fileItem.container}>
          <File width={14} />
          <div className={fileItem.group}>
            <div className={fileItem.date}>created_at</div>
            <div className={fileItem.name}>filename</div>
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
