import React from 'react'
import * as CurrencyFormat from 'react-currency-format'

import { useState } from '../../context/useStateProvider'
import './style.scss'

export const SubTotal: React.FC = () => {
  const {
    state: { basket },
  } = useState()

  const subTotal = basket?.reduce((amount, item) => item.price + amount, 0)

  return (
    <div className='subtotal'>
      <CurrencyFormat
        decimalScale={2}
        displayType={'text'}
        prefix={'$'}
        renderText={value => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        thousandSeparator={true}
        value={subTotal}
      />
      <button>Proceed to checkout</button>
    </div>
  )
}
