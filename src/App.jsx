import { Cart } from '@components/Cart'
import { useCart } from '@hooks/useCart'
import { Header } from '@components/Header'
import { Home } from '@components/Home'
import { Footer } from '@components/Footer'
import { MobileMenu } from '@components/MobileMenu'
import { useStopScroll } from '@hooks/useStopScroll'
import { PageProvider } from '@context/PageContext'

import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const ProductDetails = lazy(() => import('@components/products/Details'))

function App() {
  const { cartIsVisible } = useCart()
  useStopScroll({ selector: 'body', when: cartIsVisible })

  return (
    <>
      <Header />
      <Cart />
      <main>
        <PageProvider>
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:name" element={<ProductDetails />} />
            </Routes>
          </Suspense>
        </PageProvider>
      </main>
      <MobileMenu />
      <Footer />
    </>
  )
}

export default App
