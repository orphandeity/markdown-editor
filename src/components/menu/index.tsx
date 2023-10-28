import * as styles from './menu.css'

export default function Menu() {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading}>my documents</h2>
        <button className={styles.primaryButton}>+ New Document</button>
        <ul className={styles.fileList}>
          <li>
            <div>created_at</div>
            <div>filename</div>
          </li>
          <li>
            <div>created_at</div>
            <div>filename</div>
          </li>
        </ul>
      </div>
      <button>theme</button>
    </div>
  )
}
