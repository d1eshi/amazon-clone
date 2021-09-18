import React from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useHistory } from 'react-router-dom'

import { Item } from '../../types'

import { instance as axios } from './axios'

interface Props {
  basket: Item[]
}

export const Stripe: React.FC<Props> = ({ basket }) => {
  const stripe = useStripe()
  const elements = useElements()
  const history = useHistory()

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

    // eslint-disable-next-line no-useless-return
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }
    const cardElement = elements.getElement(CardElement)

    // eslint-disable-next-line no-unused-vars
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        console.log({ paymentIntent })
        setSuccess(true)
        setError(null)
        setProcessing(false)
        history.replace('/orders')
      })
  }

  const handleChange = (event: any) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  React.useEffect(() => {
    // Generate the especial Stripe token
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${subTotal * 100}`,
      })

      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
  }, [subTotal])

  console.log('client secret is: ', clientSecret)

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
