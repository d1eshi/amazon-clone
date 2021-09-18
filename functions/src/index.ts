/* eslint-disable import/order */
const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')

require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// API

// App config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// API routes
app.get('/', (req: any, res: any) => res.status(200).send('Hello World!'))

app.post('/payments/create', async (req: any, res: any) => {
  const total = req.query.total

  console.log('request recieved', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  })

  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// Listen command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-37bfb/us-central1/api
