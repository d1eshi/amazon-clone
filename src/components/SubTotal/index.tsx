import React from 'react'
import { useHistory } from 'react-router-dom'

import { useState } from '../../context/useStateProvider'
import './style.scss'

export const SubTotal: React.FC = () => {
  const {
    state: { basket },
  } = useState()
  const history = useHistory()

  const subTotal = basket?.reduce((amount, item) => item.price + amount, 0)
  const currencyFormat = subTotal.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <div className='subtotal'>
      <>
        <p>
          Subtotal ({basket.length} items): <strong>{currencyFormat}</strong>
        </p>
        <small className='subtotal__gift'>
          <input type='checkbox' /> This order contains a gift
        </small>
      </>
      <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
    </div>
  )
}
