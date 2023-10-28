export default function App() {
  return (
    <div>
      <div id="menu">
        <b>markdown</b>
        <h2>my documents</h2>
        <button>+ new document</button>
        <ul>
          <li>
            <div>created_at</div>
            <div>filename</div>
          </li>
          <li>
            <div>created_at</div>
            <div>filename</div>
          </li>
        </ul>
        <button>theme</button>
      </div>
      <div id="main">
        <header>
          <button>menu</button>
          <span>filename</span>
          <menu>
            <button>delete</button>
            <button>save</button>
          </menu>
        </header>
        <article id="editor">
          <main id="markdown">
            <header>
              <h2>markdown</h2>
              <button>preview</button>
            </header>
            <textarea></textarea>
          </main>
          <aside id="preview">
            <header>
              <h2>preview</h2>
              <button>close</button>
            </header>
            <textarea></textarea>
          </aside>
        </article>
      </div>
    </div>
  )
}
