import React from 'react'

import { CheckoutProduct } from '../CheckoutProduct'
import { useState } from '../../context/useStateProvider'
import { ErrorCart } from '../Errors'

export const ListOfCheckoutProduct: React.FC = () => {
  const {
    state: { basket, user },
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
      <ErrorCart noLogin={Boolean(!user)} />
    </>
  )
}
