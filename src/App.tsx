import { useState } from 'react'
import Menu from './components/menu'
import Header from './components/header'
import MarkdownEditor from './components/markdown'

import { dark, light } from './styles/theme.css'
import { container } from './styles/app.css'

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div data-open={open} className={`${darkMode ? dark : light} ${container}`}>
      <Menu darkMode={darkMode} onThemeChange={() => setDarkMode(!darkMode)} />
      <div id="main">
        <Header onMenuOpen={() => setOpen(!open)} />
        <MarkdownEditor />
      </div>
    </div>
  )
}
