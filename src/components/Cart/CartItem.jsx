import { DeleteIcon } from "../Icons.jsx"

export const CartItem = ({
  thumbnail,
  title,
  price,
  quantity,
  addToCart,
  decreaseQuantity
}) => {
  return (
    <li>
      <img src={thumbnail} alt={title} style={{ objectFit: 'contain' }} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <button className={quantity === 1 ? 'cartItemRed' : ''} onClick={decreaseQuantity}> {quantity > 1 ? '-' : <DeleteIcon />} </button>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}> + </button>
      </footer>
    </li>
  )
}
