import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

// Contexto 1. Crear contexto
export const CartContext = createContext()

// Contexto 2. Crear provider
export function CartProvider({ children }) {
  const { cart, addToCart, removeFromCart, decreaseItem, clearCart } = useCartReducer()
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseItem,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
