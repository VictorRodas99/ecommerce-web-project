import './App.css'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="categories">
          <div className="menu-categories"></div>

          <div className="top-categories"></div>
        </section>
        <section className="products-container"></section>
      </main>
    </>
  )
}

export default App
