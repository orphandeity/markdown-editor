import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index.ts'
import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { storageAvailable } from '../../lib/utils.ts'

interface Document {
  id: string
  createdAt: string
  name: string
  content: string
}

const localDocs = localStorage.getItem('documents')

const documents: Document[] = localDocs
  ? JSON.parse(localDocs)
  : [
      {
        id: nanoid(),
        createdAt: new Date().toISOString(),
        name: 'untitled-document.md',
        content: '',
      },
      {
        id: nanoid(),
        createdAt: new Date().toISOString(),
        name: 'welcome.md',
        content:
          "# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```",
      },
    ]

// Define a type for the slice state
interface markdownState {
  documents: Document[]
  currentDocument: Document
}

// Define the initial state using that type
const initialState: markdownState = {
  documents,
  currentDocument: documents[documents.length - 1],
}

export const markdownSlice = createSlice({
  name: 'markdown',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    select: (state, action: PayloadAction<Document>) => {
      state.currentDocument = action.payload
    },
    updateCurrentDocument: (state, action: PayloadAction<string>) => {
      state.currentDocument.content = action.payload
    },
    updateDocumentName: (state, action: PayloadAction<string>) => {
      state.currentDocument.name = action.payload
    },
    createNewDocument: (state) => {
      state.documents.push({
        id: nanoid(),
        createdAt: new Date().toISOString(),
        name: 'untitled-document.md',
        content: '',
      })

      if (storageAvailable()) {
        localStorage.setItem(
          'documents',
          JSON.stringify(state.documents.map((doc) => doc))
        )
      }
    },
    saveChanges: (state, action: PayloadAction<Document>) => {
      const { id } = action.payload
      const document = state.documents.find((doc) => doc.id === id)
      if (document) {
        document.name = state.currentDocument.name
        document.content = state.currentDocument.content
      }

      if (storageAvailable()) {
        localStorage.setItem(
          'documents',
          JSON.stringify(state.documents.map((doc) => doc))
        )
      }
    },
    removeDocument: (state, action: PayloadAction<Document>) => {
      const { id } = action.payload
      state.documents = state.documents.filter((doc) => doc.id !== id)

      if (storageAvailable()) {
        localStorage.setItem(
          'documents',
          JSON.stringify(state.documents.map((doc) => doc))
        )
      }
    },
  },
})

export const {
  select,
  updateCurrentDocument,
  updateDocumentName,
  createNewDocument,
  saveChanges,
  removeDocument,
} = markdownSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectDocuments = (state: RootState) => state.markdown.documents
export const selectCurrentDocument = (state: RootState) =>
  state.markdown.currentDocument

export default markdownSlice.reducer
