import React from 'react'
import { Link } from 'wouter'

import { CheckoutProduct } from '../CheckoutProduct'
import { useState } from '../../context/useStateProvider'

export const ListOfCheckoutProduct: React.FC = () => {
  const {
    state: { basket },
    dispatch,
  } = useState()

  return basket.length !== 0 ? (
    <>
      <h2 className='checkout__left-title'>Your shopping Basket</h2>
      {basket.map((item, index) => (
        <CheckoutProduct key={index} {...item} dispatch={dispatch} />
      ))}
    </>
  ) : (
    <>
      <h1>There are no items in your cart.</h1>
      <Link href='/'>See products</Link>
    </>
  )
}
