import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { Categories } from '@components/Categories'
import { Products } from '@components/Products'
import { Cart } from '@components/Cart'
import { MobileMenu } from '@components/MobileMenu'
import { CartContext } from '@context/CartContext'
import { useContext, useEffect } from 'react'

function App() {
  const { cartVisibility } = useContext(CartContext)

  useEffect(() => {
    if (cartVisibility) {
      document.body.classList.add('stop-scroll')
    }

    return () => {
      document.body.classList.remove('stop-scroll')
    }
  }, [cartVisibility])

  return (
    <>
      <Header />
      <Cart />
      <main>
        <Categories />
        <Products />
      </main>
      <MobileMenu />
      <Footer />
    </>
  )
}

export default App
