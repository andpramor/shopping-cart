import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons.jsx'
import { useCart } from '../../hooks/useCart.js'

export const Products = ({ products }) => {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = (product) =>
    cart.some((item) => item.id === product.id)

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 20).map((product) => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{ color: isProductInCart ? 'red' : 'white' }}
                  onClick={() =>
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
