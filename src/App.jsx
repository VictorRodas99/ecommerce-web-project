import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { Categories } from '@components/Categories'
import { Products } from '@components/Products'

function App() {
  return (
    <>
      <Header />
      <main>
        <Categories />
        <Products />
      </main>
      <Footer />
    </>
  )
}

export default App
