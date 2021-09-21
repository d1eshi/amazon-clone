import React from 'react'
import moment from 'moment'

import './style.scss'
import { CheckoutProduct } from '../CheckoutProduct'

type OrderObject = { data: { amount: number; basket: []; created: number }; id: string }

interface Props {
  order: OrderObject
}

export const Order: React.FC<Props> = ({ order }) => {
  console.log(typeof order)

  const { id, data } = order
  const amount = data.amount / 100
  const currencyFormat = amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{moment.unix(data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p className='order__id'>
        <small>{id}</small>
      </p>

      {data.basket?.map((item: any, index: number) => (
        <CheckoutProduct key={index} {...item} button={false} />
      ))}
      <p className='order__total'>Order Total: {currencyFormat}</p>
    </div>
  )
}
