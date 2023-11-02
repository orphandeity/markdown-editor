import { useState } from 'react'
import Menu from './components/menu'
import Header from './components/header'
import MarkdownEditor from './components/markdown'

import { dark, light } from './styles/theme.css'
import { container } from './styles/app.css'
import { useAppSelector } from './store/hooks'
import { selectTheme } from './store/theme/themeSlice'

export default function App() {
  const darkMode = useAppSelector(selectTheme)

  const [open, setOpen] = useState<boolean>(false)

  return (
    <div data-open={open} className={`${darkMode ? dark : light} ${container}`}>
      <Menu />
      <div id="main">
        <Header onMenuOpen={() => setOpen(!open)} />
        <MarkdownEditor />
      </div>
    </div>
  )
}
