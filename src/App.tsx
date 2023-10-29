import { useState, useEffect } from 'react'
import initDocuments from './data.json'
import Menu from './components/menu'
import Header from './components/header'
import Editor from './components/editor'
import { dark, light } from './styles/theme.css'

export interface Document {
  createdAt: string
  name: string
  content: string
}

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [documents, setDocuments] = useState<Document[]>([])
  const [selected, setSelected] = useState<Document | null>(null)

  useEffect(() => {
    const storedDocuments = localStorage.getItem('documents')
    if (storedDocuments) {
      setDocuments(JSON.parse(storedDocuments))
    } else {
      setDocuments(initDocuments)
      setSelected(initDocuments[1])
    }
  }, [])

  return (
    <div
      style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}
      className={darkMode ? dark : light}
    >
      <Menu
        documents={documents}
        onNewDocumentClick={() => console.log('new document')}
        onThemeClick={() => setDarkMode(!darkMode)}
        onDocumentSelect={(document) => setSelected(document)}
      />
      <div id="main">
        <Header document={selected} />
        <Editor document={selected} />
      </div>
    </div>
  )
}
