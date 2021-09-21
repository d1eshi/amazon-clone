import React from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { collection, doc, setDoc } from '@firebase/firestore'
import { useHistory } from 'react-router-dom'

import { Item, Dispatch } from '../../types'
import { db } from '../../firebase/firebase'
import { useState } from '../../context/useStateProvider'

import { instance as axios } from './axios'

interface Props {
  basket: Item[]
  dispatch: Dispatch
}

export const Stripe: React.FC<Props> = ({ basket, dispatch }) => {
  const stripe = useStripe()
  const elements = useElements()
  const history = useHistory()
  const {
    state: { user },
  } = useState()

  const [clientSecret, setClientSecret] = React.useState('')

  const [success, setSuccess] = React.useState(false)
  const [processing, setProcessing] = React.useState(false)

  const [error, setError] = React.useState(null)
  const [disabled, setDisabled] = React.useState(true)

  const subTotal = basket?.reduce((amount, item) => item.price + amount, 0)
  const currencyFormat = subTotal.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setProcessing(true)

    // let cardElemet

    // eslint-disable-next-line no-useless-return
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }
    const cardElement = elements.getElement(CardElement)

    if (cardElement) {
      // eslint-disable-next-line no-unused-vars
      const payload = await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
          },
        })
        .then(async ({ paymentIntent = {} }) => {
          // paymentIntent = payment confirmation
          const data = {
            basket: basket,
            amount: paymentIntent.amount || 0,
            created: paymentIntent.created || new Date(),
          }

          const uid = user?.uid || ''
          const id = paymentIntent.id || ''

          const collectionUsers = collection(db, 'users')
          const userIdRef = doc(collectionUsers, uid)

          await setDoc(doc(userIdRef, 'orders', id), {
            data,
          })

          setError(null)

          setProcessing(false)
          setSuccess(true)

          dispatch({
            type: '@basket/clear-basket',
          })

          history.replace('/orders')
        })
    }
  }

  const handleChange = (event: any) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  React.useEffect(() => {
    // Generate the especial Stripe token
    const sub = subTotal * 100
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${parseInt(sub.toString())}`,
      })

      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <CardElement onChange={handleChange} />
      <div>
        <h3>Order Total: {currencyFormat}</h3>
        <button disabled={processing || disabled || success}>
          <span>{processing ? 'Processing' : 'Buy Now  '}</span>
        </button>
      </div>

      {/* Errors */}
      {error && <div>{error}</div>}
    </form>
  )
}
