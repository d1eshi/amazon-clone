import React from 'react'

import { Header } from '../../components/Header'
import { ListOfCheckoutProduct } from '../../components/ListOfCheckoutProduct'
import { SubTotal } from '../../components/SubTotal'
import './style.scss'

export const Checkout = () => {
  return (
    <>
      <Header />
      <div className='checkout'>
        <div className='checkout__left'>
          <img
            alt='Exclusive offer for Amazon customers with credit card Ocean (Mastercard)'
            className='checkout__left-ad'
            src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          />

          <ListOfCheckoutProduct />
        </div>

        <div className='checkout__right'>
          <SubTotal />
        </div>
      </div>
    </>
  )
}
