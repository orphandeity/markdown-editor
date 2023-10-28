import { button } from './styles/button.css'
import { Eye, EyeOff } from 'lucide-react'
import Header from './components/header'
import Menu from './components/menu'

export default function App() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
      <Menu />
      <div id="main">
        <Header />
        <article
          id="editor"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
        >
          <main id="markdown">
            <header
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <h2>markdown</h2>
              <button className={button({ variant: 'icon' })}>
                <Eye width={16} />
              </button>
            </header>
            <textarea></textarea>
          </main>
          <aside id="preview">
            <header
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
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
