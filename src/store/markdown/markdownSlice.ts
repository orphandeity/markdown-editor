import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index.ts'
import { nanoid } from 'nanoid'

interface Document {
  id: string
  createdAt: string
  name: string
  content: string
}

// Define a type for the slice state
interface markdownState {
  documents: Document[]
}

// Define the initial state using that type
const initialState: markdownState = {
  documents: [
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
  ],
}

export const markdownSlice = createSlice({
  name: 'markdown',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    create: (state) => {
      state.documents.push({
        id: nanoid(),
        createdAt: new Date().toISOString(),
        name: 'untitled-document.md',
        content: '',
      })
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    update: (state, action: PayloadAction<Document>) => {
      const { id, name, content } = action.payload
      const document = state.documents.find((doc) => doc.id === id)
      if (document) {
        document.name = name
        document.content = content
      }
    },
    remove: (state, action: PayloadAction<Document>) => {
      const { id } = action.payload
      state.documents = state.documents.filter((doc) => doc.id !== id)
    },
  },
})

export const { create, update, remove } = markdownSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectDocuments = (state: RootState) => state.markdown.documents

export default markdownSlice.reducer
