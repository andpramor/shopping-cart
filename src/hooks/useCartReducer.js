import { useReducer } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart'

export const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })

  const removeFromCart = (product) =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product
    })

  const decreaseItem = (product) =>
    dispatch({
      type: 'DECREASE_ITEM',
      payload: product
    })

  const clearCart = () =>
    dispatch({
      type: 'CLEAR_CART'
    })

  return { cart: state, addToCart, removeFromCart, decreaseItem, clearCart }
}
