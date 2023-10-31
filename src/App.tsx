import { useState, useEffect } from 'react'
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

const defaultDocuments: Document[] = [
  {
    createdAt: new Date().toISOString(),
    name: 'untitled-document.md',
    content: '',
  },
  {
    createdAt: new Date().toISOString(),
    name: 'welcome.md',
    content:
      "# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```",
  },
]

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const [documents, setDocuments] = useState<Document[]>(defaultDocuments)
  const [selected, setSelected] = useState<Document>(documents[1])

  // Check if localStorage is available and load documents
  // if not available, fallback to default documents
  useEffect(() => {
    if (storageAvailable()) {
      const docs = localStorage.getItem('documents')
      if (docs) {
        setDocuments(JSON.parse(docs))
      } else {
        localStorage.setItem('documents', JSON.stringify(defaultDocuments))
        setDocuments(defaultDocuments)
      }
    } else {
      setDocuments(defaultDocuments)
    }
  }, [])

  useEffect(() => {
    const lastIdx = documents.length - 1
    setSelected(documents[lastIdx])
  }, [documents])

  function createNewDocument() {
    const newDocument: Document = {
      createdAt: new Date().toISOString(),
      name: 'untitled-document.md',
      content: '',
    }
    if (storageAvailable()) {
      localStorage.setItem(
        'documents',
        JSON.stringify([...documents, newDocument])
      )
    }
    setDocuments((prev) => [...prev, newDocument])
  }

  return (
    <div data-open={open} className={`${darkMode ? dark : light} ${container}`}>
      <Menu
        darkMode={darkMode}
        documents={documents}
        onDocumentSelect={(document) => setSelected(document)}
        onNewDocumentClick={createNewDocument}
        onThemeChange={() => setDarkMode(!darkMode)}
      />
      <div id="main">
        <Header document={selected} onMenuOpen={() => setOpen(!open)} />
        <MarkdownEditor document={selected} />
      </div>
    </div>
  )
}
