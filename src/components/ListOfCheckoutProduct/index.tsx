import React from 'react'
import { Link } from 'react-router-dom'

import { CheckoutProduct } from '../CheckoutProduct'
import { useState } from '../../context/useStateProvider'
import { ErrorCart } from '../Errors'

export const ListOfCheckoutProduct: React.FC = () => {
  const {
    state: { basket, user },
    dispatch,
  } = useState()

  // if (!user) {
  //   return (
  //     <>
  //       <h1>Your Amazon Cart is empty</h1>
  //       <Link to='/login'>Sign in to your account</Link>
  //       <Link to='/login'>Sign up now</Link>
  //     </>
  //   )
  // }

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
