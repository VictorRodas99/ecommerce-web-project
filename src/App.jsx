import { Header } from '@components/Header'
import { Categories } from '@components/categories/Categories'
import { Products } from '@components/Products'

function App() {
  return (
    <>
      <Header />
      <main>
        <Categories />
        <Products />
      </main>
    </>
  )
}

export default App
