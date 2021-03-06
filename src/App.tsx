import React from 'react'
import './global.scss'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Login } from './pages/Login'
import { Payment } from './pages/Payment'
import { useState } from './context/useStateProvider'
import { userState } from './firebase/firebase.functions'
import { Success } from './pages/Success'
import { Orders } from './pages/Orders'

const App: React.FC = () => {
  const { dispatch } = useState()

  React.useEffect(() => {
    userState(dispatch)
  }, [dispatch])

  return (
    <>
      <Router>
        <Switch>
          <Route exact component={Home} path='/' />
          <Route component={Checkout} path='/checkout' />
          <Route component={Login} path='/login' />
          <Route component={Success} path='/success' />
          <Route component={Orders} path='/orders' />

          <Elements
            stripe={loadStripe(
              'pk_test_51JasY1KNsjFHlkwIgApkIq6oSXZ0kDTqAkZaoMDL8PV6jXmgQTUfFkgkpOceC8LnitC8hLundJIlMa4FCZpq4bO800dfPzgGz2'
            )}
          >
            <Route component={Payment} path='/payment' />
          </Elements>
        </Switch>
      </Router>
    </>
  )
}

export default App
