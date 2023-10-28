import { button } from './styles/button.css'
import iconMenu from './assets/icon-menu.svg'
import iconSave from './assets/icon-save.svg'
import { Eye, EyeOff, File, Trash2 } from 'lucide-react'

export default function App() {
  return (
    <div>
      <div id="menu">
        <b>markdown</b>
        <h2>my documents</h2>
        <button className={button()}>+ New Document</button>
        <ul>
          <li>
            <div>created_at</div>
            <div>filename</div>
          </li>
          <li>
            <div>created_at</div>
            <div>filename</div>
          </li>
        </ul>
        <button>theme</button>
      </div>
      <div id="main">
        <header>
          <button
            style={{
              aspectRatio: '1/1',
              width: '72px',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <img src={iconMenu} alt="show menu" />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <File width={14} />
            <span>filename</span>
          </div>
          <menu>
            <button className={button({ variant: 'icon' })}>
              <Trash2 width={18} />
            </button>
            <button className={button()}>
              <img src={iconSave} alt="" />
              <span>Save Changes</span>
            </button>
          </menu>
        </header>
        <article id="editor">
          <main id="markdown">
            <header>
              <h2>markdown</h2>
              <button className={button({ variant: 'icon' })}>
                <Eye width={16} />
              </button>
            </header>
            <textarea></textarea>
          </main>
          <aside id="preview">
            <header>
              <h2>preview</h2>
              <button className={button({ variant: 'icon' })}>
                <EyeOff width={16} />
              </button>
            </header>
            <textarea></textarea>
          </aside>
        </article>
      </div>
    </div>
  )
}
