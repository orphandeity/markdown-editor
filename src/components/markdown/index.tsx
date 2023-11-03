import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useAppSelector } from '../../store/hooks'
import { selectPreview } from '../../store/app/appSlice'
import Editor from './editor'
import Preview from './preview'

import { container } from './markdown.css'

export default function MarkdownEditor(): JSX.Element {
  const preview = useAppSelector(selectPreview)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [parent, enableAnimations] = useAutoAnimate()

  return (
    <article ref={parent} className={container}>
      {!preview && <Editor />}

      <Preview />
    </article>
  )
}
