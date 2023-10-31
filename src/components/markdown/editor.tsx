import * as styles from './editor.css'

interface MarkdownProps {
  markdown?: string
  onUpdateMarkdown: (markdown: string) => void
}

export default function Editor({
  markdown,
  onUpdateMarkdown,
}: MarkdownProps & React.HTMLProps<HTMLElement>) {
  return (
    <main className={styles.markdown}>
      <header className={styles.header}>
        <h2 className={styles.heading}>markdown</h2>
      </header>
      <textarea
        className={styles.markdownEditor}
        onChange={(e) => onUpdateMarkdown(e.target.value)}
        value={markdown}
      />
    </main>
  )
}
