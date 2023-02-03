import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { Categories } from '@components/Categories'
import { Products } from '@components/Products'
import { Cart } from '@components/Cart'

function App() {
  return (
    <>
      <Header />
      <Cart />
      <main>
        <Categories />
        <Products />
      </main>
      <Footer />
    </>
  )
}

export default App
