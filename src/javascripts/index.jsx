import { createRoot } from 'react-dom/client'

const Main = () => (
  <section className="section">
    <div className="container">
      <h1 id="title" className="title">
        NP-complete
      </h1>
      <p id="subtitle" className="subtitle">
        プログラミング・技術書系同人サークル
      </p>
      <Books />
    </div>
  </section>
)

export default Main

document.addEventListener('DOMContentLoaded', () => {
  const elm = document.querySelector('#mount')
  createRoot(elm).render(<Main />)
})
