import { Cart } from '@components/Cart'
import { useCart } from '@hooks/useCart'
import { Header } from '@components/Header'
import { Home } from '@components/Home'
import { Footer } from '@components/Footer'
import { MobileMenu } from '@components/MobileMenu'
import { useStopScroll } from '@hooks/useStopScroll'

import { ProductDetails } from '@components/products/Details'
import { Routes, Route } from 'react-router-dom'

function App() {
  const { cartIsVisible } = useCart()
  useStopScroll({ selector: 'body', when: cartIsVisible })

  return (
    <>
      <Header />
      <Cart />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:name" element={<ProductDetails />} />
        </Routes>
      </main>
      <MobileMenu />
      <Footer />
    </>
  )
}

export default App
