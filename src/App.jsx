import './App.css'
import { Header } from './components/Header'
import { Categories } from './components/categories/Categories'

function App() {
  return (
    <>
      <Header />
      <main>
        <Categories />
        <section className="products-container"></section>
      </main>
    </>
  )
}

export default App
