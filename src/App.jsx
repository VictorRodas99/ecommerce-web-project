import { Cart } from '@components/Cart'
import { useCart } from '@hooks/useCart'
import { Header } from '@components/Header'
import { Home } from '@components/Home'
import { Footer } from '@components/Footer'
import { MobileMenu } from '@components/MobileMenu'
import { useStopScroll } from '@hooks/useStopScroll'
import { PageProvider } from '@context/PageContext'
import { Notifications } from '@components/NotificationsContainer'

import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const ProductDetails = lazy(() => import('@components/products/Details'))
const CategoryProducts = lazy(() =>
  import('@components/categories/CategoryProducts')
)
const SorterProvider = lazy(() => import('@context/CategoryContext'))
const NotFound = lazy(() => import('@components/NotFound'))

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
              <Route
                path="/:category"
                element={
                  <SorterProvider>
                    <CategoryProducts />
                  </SorterProvider>
                }
              />
              <Route
                path="/:category/:page/:name"
                element={<ProductDetails />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageProvider>
      </main>
      <Notifications />
      <MobileMenu />
      <Footer />
    </>
  )
}

export default App
