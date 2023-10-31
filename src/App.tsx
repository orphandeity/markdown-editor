import { useState, useEffect } from 'react'
import initDocuments from './data.json'
import Menu from './components/menu'
import Header from './components/header'
import MarkdownEditor from './components/markdown'

import { dark, light } from './styles/theme.css'
import { container } from './styles/app.css'
import { storageAvailable } from './lib/utils'

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
    // Check if localStorage is available
    if (storageAvailable()) {
      const docs = localStorage.getItem('documents')
      if (docs) {
        // Load documents from localStorage
        setDocuments(JSON.parse(docs))
      } else {
        // Fallback to default documents
        localStorage.setItem('documents', JSON.stringify(initDocuments))
        setDocuments(initDocuments)
      }
    } else {
      // Fallback to default documents
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
        darkMode={darkMode}
        documents={documents}
        onDocumentSelect={(document) => setSelected(document)}
        onNewDocumentClick={() => console.log('new document')}
        onThemeChange={() => setDarkMode(!darkMode)}
      />
      <div id="main">
        <Header document={selected} onMenuOpen={() => setOpen(!open)} />
        <MarkdownEditor document={selected} />
      </div>
    </div>
  )
}
