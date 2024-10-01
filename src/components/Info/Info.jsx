import './Info.css'
import { IS_DEVELOPMENT } from '../../config.js'
import { useFilters } from '../../hooks/useFilters.js'
import { useCart } from '../../hooks/useCart.js'

export const Info = () => {
  const { filters } = useFilters()
  const { cart } = useCart()
  const summaryCart = cart.map(({ title, price, quantity }) => ({
    title,
    price,
    quantity
  }))
  return (
    <div className='info'>
      <h4>Shopping cart</h4>
      <span>&#128187; With useContext & useReducer</span>
      {IS_DEVELOPMENT && <pre>{JSON.stringify(filters, null, 2)}</pre>}
      {IS_DEVELOPMENT && <pre>{JSON.stringify(summaryCart, null, 2)}</pre>}
    </div>
  )
}
