import { Products } from './components/Products/Products.jsx'
import { products as initialProducts } from './mocks/products.json'
import { useState } from 'react'
import { Header } from './components/Header/Header.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Info } from './components/Info/Info.jsx'
import { Cart } from './components/Cart/Cart.jsx'
import { CartProvider } from './context/cart.jsx'
import { Footer } from './components/Footer/Footer.jsx'

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Info />
      <Footer />
    </CartProvider>
  )
}

export default App
