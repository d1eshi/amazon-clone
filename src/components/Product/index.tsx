import React from 'react'
import './style.scss'

interface Props {
  id: string
  image: string
  title: string
  price: number
  rating: number
}

export const Product: React.FC<Props> = ({price, image, title, rating}) => {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__info-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__info-rating'>
          {
            Array(rating)
            // only optional the value of the array
            .fill(0)
            .map((_, i) => ( 
            <p key={i}>⭐</p> 
            ))
          }
        </div>
      </div>

      <img src={image} />

      <button>Add to basket</button>
    </div>
  )
}
