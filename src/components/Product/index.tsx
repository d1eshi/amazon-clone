import React from 'react'

import { useState } from '../../context/useStateProvider'
import './style.scss'

interface Props {
  id: string
  image: string
  title: string
  price: number
  rating: number
}

export const Product: React.FC<Props> = ({ price, image, title, rating, id }) => {
  const { dispatch } = useState()

  const addToBasket = () => {
    dispatch({
      type: '@basket/add-item',
      payload: {
        price,
        image,
        title,
        rating,
        id,
      },
    })
  }

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__info-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__info-rating'>
          {Array(rating)
            // only optional the value of the array
            .fill(0)
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} />

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}
