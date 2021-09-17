/* eslint-disable no-unused-vars */
import React from 'react'
import { useHistory, Link } from 'react-router-dom'

import * as firebase from '../../firebase/firebase.functions'
import './style.scss'

export const Login = () => {
  const history = useHistory()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const signIn = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    firebase.signIn(email, password, history)
  }
  const register = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    firebase.createNewUser(email, password, history)
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
        />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
          <label>
            E-mail
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
          </label>

          <label>
            Password
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
          </label>

          <button onClick={signIn}>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our
          Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  )
}
