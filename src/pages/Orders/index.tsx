import { collection, doc, onSnapshot } from '@firebase/firestore'
import React from 'react'
import './style.scss'

import { Header } from '../../components/Header'
import { Order } from '../../components/Order'
import { useState } from '../../context/useStateProvider'
import { db } from '../../firebase/firebase'

export const Orders = () => {
  interface Order {
    id: string
    data: any
  }

  const [orders, setOrders] = React.useState<Order>()

  console.log('orders: ', orders)

  const {
    state: { user },
  } = useState()

  async function getOrders() {
    console.log('before user')

    if (user) {
      console.log('after user')

      const uid = user?.uid
      const first = collection(db, 'users')
      const second = doc(first, uid)

      onSnapshot(collection(second, 'orders'), snapshot => {
        snapshot.forEach(
          doc => {
            setOrders(prevState => {
              return {
                ...prevState,
                id: doc.id,
                data: doc.data().data,
              }
            })
          },

          (error: Error) => {
            throw new Error(`Message: ${error.message}, ${error.name}`)
          }
        )
      })
    }
  }

  React.useEffect(() => {
    getOrders()
  }, [user])

  return (
    <>
      <Header />
      <div className='orders'>
        <h1>Your Orders</h1>
        <div className='orders__container'>
          {orders && <Order key={orders.id} order={orders} />}
        </div>
      </div>
    </>
  )
}
