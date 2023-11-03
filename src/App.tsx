import { useAppSelector } from './store/hooks'
import { selectMenu, selectTheme } from './store/app/appSlice'
import Menu from './components/menu'
import Header from './components/header'
import MarkdownEditor from './components/markdown'

import { dark, light } from './styles/theme.css'
import { container } from './styles/app.css'
import { useMediaQuery } from './lib/useMediaQuery'

export default function App() {
  const menu = useAppSelector(selectMenu)
  const darkMode = useAppSelector(selectTheme)
  const matches = useMediaQuery('(prefers-color-scheme: dark)')

  return (
    <div
      data-open={menu}
      className={`${darkMode || matches ? dark : light} ${container}`}
    >
      <Menu />
      <div id="main">
        <Header />
        <MarkdownEditor />
      </div>
    </div>
  )
}
