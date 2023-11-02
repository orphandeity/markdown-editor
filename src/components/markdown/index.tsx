import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Editor from './editor'
import Preview from './preview'

import { container } from './markdown.css'

export default function MarkdownEditor(): JSX.Element {
  const [showPreview, setShowPreview] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [parent, enableAnimations] = useAutoAnimate()

  return (
    <article ref={parent} className={container}>
      {!showPreview && <Editor />}

      <Preview
        showPreview={showPreview}
        onShowPreview={() => setShowPreview(!showPreview)}
      />
    </article>
  )
}
