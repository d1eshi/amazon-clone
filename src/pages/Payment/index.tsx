import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { useState } from '../../context/useStateProvider'
import { CheckoutProduct } from '../../components/CheckoutProduct'
import { Stripe } from '../../components/Stripe'

export const Payment = () => {
  const {
    state: { basket, user },
    dispatch,
  } = useState()

  return (
    <>
      <Header />
      <main className='payment'>
        <div className='payment__container'>
          <h1>
            Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
          </h1>

          <section className='payment__section'>
            <h3>Delivery Address</h3>
            <div className='payment__section-address'>
              <p>{user?.email}</p>
              <p>123 React Lane</p>
              <p>Los Angeles, CA</p>
            </div>
          </section>

          <section className='payment__section'>
            <h3>Review Items and Delivery</h3>

            <div className='payment__section-items'>
              {basket?.map((item, index) => (
                <CheckoutProduct key={index} {...item} dispatch={dispatch} />
              ))}
            </div>
          </section>

          <section className='payment__section'>
            <h3>Payment Method</h3>
            <div className='payment__section-details'>
              <Stripe basket={basket} dispatch={dispatch} />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
