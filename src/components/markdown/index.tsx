import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useAppSelector } from '../../store/hooks'
import { selectPreview } from '../../store/app/appSlice'
import Editor from './editor'
import Preview from './preview'

import { container } from './markdown.css'
import { useMediaQuery } from '../../lib/useMediaQuery'
import MobileEditor from './mobile'

export default function MarkdownEditor(): JSX.Element {
  const preview = useAppSelector(selectPreview)
  const matches = useMediaQuery('(min-width: 768px)')

  const [parent] = useAutoAnimate()

  return matches ? (
    <article data-show={preview} ref={parent} className={container}>
      {!preview && <Editor />}
      <Preview />
    </article>
  ) : (
    <MobileEditor />
  )
}
