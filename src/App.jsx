import { Cart } from '@components/Cart'
import { Home } from '@components/Home'
import { useCart } from '@hooks/useCart'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { MobileMenu } from '@components/MobileMenu'
import { PageProvider } from '@context/PageContext'
import { useStopScroll } from '@hooks/useStopScroll'
import { Notifications } from '@components/NotificationsContainer'

import { MAPPED_API_URLS, availableCategories } from './config'
import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const SorterProvider = lazy(() => import('@context/CategoryContext'))
const ViewSettingsProvider = lazy(() => import('@context/ViewSettingsContext'))
const ProductDetails = lazy(() => import('@components/products/Details'))
const NotFound = lazy(() => import('@components/NotFound'))

const DynamicRouteManager = lazy(() =>
  import('@components/DynamicRouteManager')
)
const CategoryProducts = lazy(() =>
  import('@components/categories/CategoryProducts')
)

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
            <SorterProvider>
              <ViewSettingsProvider>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="category/:category"
                    element={
                      <DynamicRouteManager
                        paramKey="category"
                        validParams={Object.keys(MAPPED_API_URLS)}
                      >
                        <CategoryProducts />
                      </DynamicRouteManager>
                    }
                  />
                  <Route
                    path="/:category/:page/:name"
                    element={
                      <DynamicRouteManager
                        paramKey="category"
                        validParams={Object.keys(availableCategories)}
                      >
                        <ProductDetails />
                      </DynamicRouteManager>
                    }
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </ViewSettingsProvider>
            </SorterProvider>
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
