import { Cart } from '@components/Cart'
import { useCart } from '@hooks/useCart'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { Products } from '@components/Products'
import { MobileMenu } from '@components/MobileMenu'
import { useStopScroll } from '@hooks/useStopScroll'

function App() {
  const { cartIsVisible } = useCart()
  useStopScroll({ selector: 'body', when: cartIsVisible })

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
