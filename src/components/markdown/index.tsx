import { type Document } from '../../App'
import { useEffect, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Editor from './editor'
import Preview from './preview'

import { container } from './editor.css'

interface EditorProps {
  document: Document
}

export default function MarkdownEditor({ document }: EditorProps): JSX.Element {
  const [markdown, setMarkdown] = useState<string>('')
  const [showPreview, setShowPreview] = useState<boolean>(false)
  const [parent, enableAnimations] = useAutoAnimate()

  useEffect(() => {
    setMarkdown(document.content)
  }, [document])

  return (
    <article ref={parent} className={container}>
      {!showPreview && (
        <Editor markdown={markdown} onUpdateMarkdown={setMarkdown} />
      )}

      <Preview
        markdown={markdown}
        showPreview={showPreview}
        onShowPreview={() => setShowPreview(!showPreview)}
      />
    </article>
  )
}
