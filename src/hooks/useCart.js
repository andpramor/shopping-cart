import { useContext } from 'react'
import { CartContext } from '../context/cart'

export const useCart = () => {
  const context = useContext(CartContext)

  // Si context es undefined, es que la parte de la aplicación que llama al custom hook no está envuelta en el provider del contexto, y por tanto no puede leerlo
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
