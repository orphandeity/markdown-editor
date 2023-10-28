import Menu from './components/menu'
import Header from './components/header'
import Editor from './components/editor'
import { lightTheme } from './styles/theme.css'

export default function App() {
  return (
    <div
      style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}
      className={lightTheme}
    >
      <Menu />
      <div id="main">
        <Header />
        <Editor />
      </div>
    </div>
  )
}
