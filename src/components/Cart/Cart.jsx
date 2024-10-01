import './Cart.css'
import { useId, useState } from 'react'
import { CartIcon, ClearCartIcon, CloseIcon } from '../Icons.jsx'
import { useCart } from '../../hooks/useCart.js'
import { CartItem } from './CartItem.jsx'

export function Cart() {
  const cartCheckboxId = useId()
  const { addToCart, decreaseItem, cart, clearCart } = useCart()
  const [isCartShown, setIsCartShown] = useState(false)
  const handleClick = () => {
    setIsCartShown((prevState) => !prevState)
  }

  return (
    <>
      <label
        className='cart-button'
        htmlFor={cartCheckboxId}
        onClick={handleClick}
      >
        {isCartShown ? <CloseIcon /> : <CartIcon />}
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              decreaseQuantity={() => decreaseItem(product)}
              {...product}
            />
          ))}
        </ul>
        {cart.length > 0 && (
          <button className='colorRed' onClick={clearCart}>
            <ClearCartIcon />
          </button>
        )}
      </aside>
    </>
  )
}
