import { button } from './styles/button.css'
import { Eye, EyeOff } from 'lucide-react'
import Header from './components/header'

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
        <Header />
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
