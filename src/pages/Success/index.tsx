import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'

export const Success = () => {
  return (
    <>
      <Header />
      <div className='success'>
        <h1>Thanks for buy here!</h1>
        <Link to='/'>Back to Home.</Link>
      </div>
    </>
  )
}
