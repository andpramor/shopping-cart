import { useFilters } from '../../hooks/useFilters'
import './Filters.css'
import { useId } from 'react'

export const Filters = () => {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPriceChange = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleCategoryChange = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Price from:</label>
        <input
          value={filters.minPrice}
          type='range'
          name='price'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleMinPriceChange}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select name='category' id={categoryFilterId} onChange={handleCategoryChange}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
