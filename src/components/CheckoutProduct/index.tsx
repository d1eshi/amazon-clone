import React from 'react'
import './style.scss'

interface Props {
  id: string
  image: string
  title: string
  price: number
  rating: number
  dispatch(action: any): void
}
export const CheckoutProduct: React.FC<Props> = ({ id, image, title, price, rating, dispatch }) => {
  const handleRemoveBasket = () => {
    dispatch({
      type: '@basket/remove-item',
      payload: id,
    })
  }

  return (
    <div className='checkoutProduct'>
      <img alt={title} className='checkoutProduct__image' src={image} />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            // only optional the value of the array
            .fill(0)
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={handleRemoveBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}
