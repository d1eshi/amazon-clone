import React from 'react'
import './global.scss'
import { Route, Switch } from 'wouter'

import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Login } from './pages/Login'
import { StateProvider } from './context/useStateProvider'

const App: React.FC = () => {
  return (
    <>
      <StateProvider>
        <Header />
        <Switch>
          <Route component={Home} path='/' />
          <Route component={Checkout} path='/checkout' />
          <Route component={Login} path='/login' />
        </Switch>
      </StateProvider>
    </>
  )
}

export default App
