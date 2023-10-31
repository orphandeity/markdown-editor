import { useState, useEffect } from 'react'
import initDocuments from './data.json'
import Menu from './components/menu'
import Header from './components/header'
import MarkdownEditor from './components/markdown'

import { dark, light } from './styles/theme.css'
import { container } from './styles/app.css'

export interface Document {
  createdAt: string
  name: string
  content: string
}

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const [documents, setDocuments] = useState<Document[]>([])
  const [selected, setSelected] = useState<Document>(initDocuments[1])

  useEffect(() => {
    const storedDocuments = localStorage.getItem('documents')
    if (storedDocuments) {
      setDocuments(JSON.parse(storedDocuments))
    } else {
      setDocuments(initDocuments)
    }
  }, [])

  useEffect(() => {
    const lastIdx = documents.length - 1
    setSelected(documents[lastIdx])
  }, [documents])

  return (
    <div data-open={open} className={`${darkMode ? dark : light} ${container}`}>
      <Menu
        documents={documents}
        onNewDocumentClick={() => console.log('new document')}
        onDocumentSelect={(document) => setSelected(document)}
        darkMode={darkMode}
        onThemeChange={() => setDarkMode(!darkMode)}
      />
      <div id="main">
        <Header document={selected} onMenuOpen={() => setOpen(!open)} />
        <MarkdownEditor document={selected} />
      </div>
    </div>
  )
}
